import { FC, useState } from 'react';
import Modal from 'styled-react-modal';
import styled from 'styled-components';

const StyledModal = Modal.styled`
  position: fixed;
  inset: 0;
  margin: auto;
  width: 90%;
  max-width: 500px;
  background: transparent;
  border-radius: 12px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  z-index: 1000;
  
  @media (max-width: 640px) {
    width: 95%;
    max-height: 90vh;
    overflow-y: auto;
  }
`;

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormData = {
  name: string;
  email: string;
  password: string;
};

const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [state, setState] = useState<'login' | 'register'>('login');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your login/signup logic here
    console.log('Form submitted:', { state, formData });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <StyledModal
      isOpen={isOpen}
      onEscapeKeydown={onClose}
      onBackgroundClick={onClose}
      aria-modal={true}
      aria-labelledby="login-modal-label"
    >
      <div className="w-full flex items-center justify-center">
        <form onSubmit={handleSubmit} className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 py-8 bg-white">
          <h1 className="text-gray-900 text-3xl mt-6 font-medium">{state === "login" ? "Login" : "Sign up"}</h1>
          <p className="text-gray-500 text-sm mt-2">Please sign in to continue</p>

          {state !== "login" && (
            <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-icon lucide-user-round">
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
              <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                className="border-none outline-none ring-0 flex-1" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
          )}

          <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail">
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
            <input 
              type="email" 
              name="email" 
              placeholder="Email id" 
              className="border-none outline-none ring-0 flex-1" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-icon lucide-lock">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              className="border-none outline-none ring-0 flex-1" 
              value={formData.password} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="mt-4 text-left text-indigo-500">
            <button className="text-sm" type="reset">Forget password?</button>
          </div>

          <button type="submit" className="mt-2 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity">
            {state === "login" ? "Login" : "Sign up"}
          </button>

          <p className="text-gray-500 text-sm mt-3 mb-6">
            {state === "login" ? "Don't have an account?" : "Already have an account?"}{' '}
            <button 
              type="button"
              onClick={() => setState(prev => prev === "login" ? "register" : "login")} 
              className="text-indigo-500 hover:underline"
            >
              click here
            </button>
          </p>
        </form>
      </div>
    </StyledModal>
  );
};

export default LoginModal;

