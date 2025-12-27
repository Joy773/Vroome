import { FC, useContext, useState } from "react"
import { Link } from "react-router-dom";

import LogoutIconButton from "../../assets/LogoutIconButton";
import { Favorite, SearchIcon } from "../../assets/icon";
import { UserContextObj } from "../../contexts/UserContext";
import { useDarkMode } from "../../contexts/DarkModeContext";
import LoginModal from "../UserLogin/LoginModal";

const Header: FC = () => {
  const ServerLink = "http://localhost:9090";
  const userObject = useContext(UserContextObj);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const logout = () => {
    window.open(`${ServerLink}/auth/google/logout`, "_self")
  }

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
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
            className={`absolute left-4 w-6 h-6 pointer-events-none ${isDarkMode ? 'opacity-70 brightness-0 invert' : ''}`}
            style={{ filter: isDarkMode ? 'brightness(0) invert(1)' : 'none' }}
          />
          <input
            type="text"
            placeholder="Search something here"
            className={`w-full h-12 pl-12 pr-4 border rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base ${
              isDarkMode 
                ? 'border-gray-600 bg-gray-800 text-gray-100 placeholder:text-gray-400' 
                : 'border-[rgba(195,212,233,0.4)] bg-white text-gray-900 placeholder:text-[#3d5278]'
            }`}
          />
        </div>
        <img 
          src={Favorite} 
          alt="Favorite"
          className="cursor-pointer rounded-full w-8 h-8 sm:w-11 sm:h-11 hidden md:block"
        />
        {userObject?.googleId && (
          <img 
            src={userObject?.image} 
            alt="User Avatar"
            width={43.99} 
            height={43.99}
            className="cursor-pointer rounded-full w-8 h-8 sm:w-11 sm:h-11"
          />
        )}
        {userObject?.googleId && <LogoutIconButton onClick={logout} />}
        {!userObject?.googleId && (
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
