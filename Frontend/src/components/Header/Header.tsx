import { FC, useContext, useState, useRef, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";

import { Favorite, SearchIcon } from "../../assets/icon";
import { UserContextObj } from "../../contexts/UserContext";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { CarsContext } from "../../contexts/CarsContext";
import LoginModal from "../UserLogin/LoginModal";

const Header: FC = () => {
  const ServerLink = "http://localhost:9090";
  const userContext = useContext(UserContextObj);
  const userObject = userContext;
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { cars, addToQuery, addToSearch } = useContext(CarsContext);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const isLoggedIn = userObject?.googleId || userObject?.email;
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Generate user initials for avatar
  const getUserInitials = () => {
    if (userObject?.displayName) {
      return userObject.displayName
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    }
    if (userObject?.firstName && userObject?.lastName) {
      return `${userObject.firstName[0]}${userObject.lastName[0]}`.toUpperCase();
    }
    if (userObject?.email) {
      return userObject.email[0].toUpperCase();
    }
    return 'U';
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  const handleLogout = () => {
    if (userContext?.logout) {
      userContext.logout();
    } else if (userObject?.googleId) {
      window.open(`${ServerLink}/auth/google/logout`, "_self");
    }
    setShowDropdown(false);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    addToQuery(query);
    
    if (query.trim()) {
      const filtered = cars.filter(car => 
        car.car_title.toLowerCase().includes(query.toLowerCase()) ||
        car.car_brand.toLowerCase().includes(query.toLowerCase()) ||
        car.car_body_type.toLowerCase().includes(query.toLowerCase())
      );
      addToSearch(filtered);
    } else {
      addToSearch([]);
    }
  };

  const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate('/search');
    }
  };

  const handleSearchClick = () => {
    if (searchQuery.trim()) {
      navigate('/search');
    }
  };

  return (
    <header className={`flex flex-col sm:flex-row items-center justify-between w-full min-h-[80px] sm:h-[8.62%] sm:max-h-[124px] px-4 sm:px-8 md:px-16 gap-3 sm:gap-0 py-2 sm:py-0 transition-colors duration-200 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`} style={{ backgroundColor: isDarkMode ? '#111827' : '#ffffff' }}>
      <Link to="/">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">VROOME</h1>
      </Link>
      <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-end flex-wrap">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isDarkMode 
              ? 'bg-gray-800 hover:bg-gray-700' 
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
          aria-label="Toggle dark mode"
          title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
        <div className="relative flex items-center w-full sm:w-auto sm:min-w-[270px] md:min-w-[300px]">
          <img 
            src={SearchIcon} 
            alt="Search"
            className={`absolute left-4 w-6 h-6 pointer-events-none cursor-pointer ${isDarkMode ? 'opacity-70 brightness-0 invert' : ''}`}
            style={{ filter: isDarkMode ? 'brightness(0) invert(1)' : 'none' }}
            onClick={handleSearchClick}
          />
          <input
            type="text"
            placeholder="Search something here"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyPress={handleSearchKeyPress}
            className={`w-full h-12 pl-12 pr-4 border rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base ${
              isDarkMode 
                ? 'border-gray-600 bg-gray-800 text-gray-100 placeholder:text-gray-400' 
                : 'border-[rgba(195,212,233,0.4)] bg-white text-gray-900 placeholder:text-[#3d5278]'
            }`}
          />
        </div>
        <Link to="/favorites">
          <img 
            src={Favorite} 
            alt="Favorite"
            className="cursor-pointer rounded-full w-8 h-8 sm:w-11 sm:h-11 hidden md:block transition-opacity hover:opacity-80"
          />
        </Link>
        {isLoggedIn ? (
          <div 
            className="relative"
            ref={dropdownRef}
          >
            {userObject?.image ? (
              <img 
                src={userObject.image} 
                alt="User Avatar"
                width={43.99} 
                height={43.99}
                className="cursor-pointer rounded-full w-8 h-8 sm:w-11 sm:h-11 object-cover"
                onClick={() => setShowDropdown(!showDropdown)}
              />
            ) : (
              <div 
                className="cursor-pointer rounded-full w-8 h-8 sm:w-11 sm:h-11 flex items-center justify-center bg-blue-600 text-white font-semibold text-xs sm:text-sm"
                title={userObject?.displayName || userObject?.email}
                onClick={() => setShowDropdown(!showDropdown)}
              >
                {getUserInitials()}
              </div>
            )}
            {showDropdown && (
              <div className={`absolute right-0 mt-2 w-32 rounded-lg shadow-lg z-50 transition-all duration-200 ${
                isDarkMode 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200'
              }`}>
                <button
                  onClick={handleLogout}
                  className={`w-full text-left px-4 py-2 text-sm rounded-lg transition-colors duration-200 ${
                    isDarkMode
                      ? 'text-gray-200 hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div 
            className="cursor-pointer border-gray-600 rounded-full px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 bg-blue-600 text-white font-medium text-sm sm:text-base whitespace-nowrap"
            onClick={openLoginModal}
          >
            Login
          </div>
        )}
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </header>
  );
};

export default Header;
