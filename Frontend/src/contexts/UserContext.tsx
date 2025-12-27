import { createContext, useEffect, useState } from "react"
import axios from "axios"
import { AxiosResponse } from "axios"


type UserContextProviderProps = {
  children: React.ReactNode
}
type UserContextObjType = {
  _id: string;
  googleId: string;
  displayName: string;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  loginType: 'google' | 'email' | null;
  setUser: (user: userObjectType) => void;
  loginWithEmail: (email: string, password: string, name?: string) => Promise<boolean>;
  registerWithEmail: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
}
type userObjectType = {
  _id: string;
  googleId: string;
  displayName: string;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  loginType: 'google' | 'email' | null;
}
const UserContextObj = createContext<UserContextObjType>(
  {} as UserContextObjType
)


function UserContextProvider(props: UserContextProviderProps) {
  const [userObject, setUserObject] = useState<userObjectType>(() => {
    // Load user from localStorage on initialization
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('vroome_user');
      if (storedUser) {
        try {
          return JSON.parse(storedUser);
        } catch (error) {
          console.error('Error parsing stored user:', error);
        }
      }
    }
    return {} as userObjectType;
  });

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (userObject && (userObject.googleId || userObject.email)) {
      localStorage.setItem('vroome_user', JSON.stringify(userObject));
    } else {
      localStorage.removeItem('vroome_user');
    }
  }, [userObject]);

  useEffect(() => {
    const fetchUserData = () => {
      try {
        axios
          .get("http://localhost:9090/users/getCurrentUser", {
            withCredentials: true,
          })
          .then((res: AxiosResponse) => {
            if (res.data) {
              setUserObject({ ...res.data, loginType: 'google' });
            }
          })
          .catch(() => {
            // If Google auth fails, check localStorage for email login
            const storedUser = localStorage.getItem('vroome_user');
            if (storedUser) {
              try {
                const parsed = JSON.parse(storedUser);
                if (parsed.loginType === 'email') {
                  setUserObject(parsed);
                }
              } catch (error) {
                console.error('Error parsing stored user:', error);
              }
            }
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, []);

  const setUser = (user: userObjectType) => {
    setUserObject(user);
  };

  const loginWithEmail = async (email: string, password: string, name?: string): Promise<boolean> => {
    try {
      // For now, we'll use localStorage to simulate login
      // In a real app, you'd make an API call here
      const storedUsers = localStorage.getItem('vroome_users') || '[]';
      const users = JSON.parse(storedUsers);
      
      const user = users.find((u: any) => u.email === email && u.password === password);
      
      if (user) {
        const userObject: userObjectType = {
          _id: user._id || `email_${Date.now()}`,
          googleId: '',
          displayName: user.name || email.split('@')[0],
          firstName: user.name?.split(' ')[0] || email.split('@')[0],
          lastName: user.name?.split(' ').slice(1).join(' ') || '',
          image: user.image || '',
          email: email,
          loginType: 'email'
        };
        setUserObject(userObject);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const registerWithEmail = async (email: string, password: string, name: string): Promise<boolean> => {
    try {
      // For now, we'll use localStorage to simulate registration
      // In a real app, you'd make an API call here
      const storedUsers = localStorage.getItem('vroome_users') || '[]';
      const users = JSON.parse(storedUsers);
      
      // Check if user already exists
      if (users.find((u: any) => u.email === email)) {
        return false;
      }
      
      const newUser = {
        _id: `email_${Date.now()}`,
        email,
        password,
        name,
        image: ''
      };
      
      users.push(newUser);
      localStorage.setItem('vroome_users', JSON.stringify(users));
      
      const userObject: userObjectType = {
        _id: newUser._id,
        googleId: '',
        displayName: name,
        firstName: name.split(' ')[0],
        lastName: name.split(' ').slice(1).join(' ') || '',
        image: '',
        email: email,
        loginType: 'email'
      };
      setUserObject(userObject);
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };

  const logout = () => {
    setUserObject({} as userObjectType);
    localStorage.removeItem('vroome_user');
    if (userObject.loginType === 'google') {
      window.open("http://localhost:9090/auth/google/logout", "_self");
    }
  };

  return (
    <UserContextObj.Provider value={{ 
      ...userObject, 
      setUser, 
      loginWithEmail, 
      registerWithEmail,
      logout 
    }}>
      {props.children}
    </UserContextObj.Provider>
  );
}

export { UserContextProvider, UserContextObj }
