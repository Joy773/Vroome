import { FC, useContext, useState } from "react"
import { Link } from "react-router-dom";

import LogoutIconButton from "../../assets/LogoutIconButton";
import { Favorite, SearchIcon } from "../../assets/icon";
import { UserContextObj } from "../../contexts/UserContext";
import LoginModal from "../UserLogin/LoginModal";

const Header: FC = () => {
  const ServerLink = "http://localhost:9090";
  const userObject = useContext(UserContextObj);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

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
    <header className="flex flex-col sm:flex-row items-center justify-between w-full min-h-[80px] sm:h-[8.62%] sm:max-h-[124px] px-4 sm:px-8 bg-white md:px-16 gap-3 sm:gap-0 py-2 sm:py-0">
      <Link to="/">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">VROOME</h1>
      </Link>
      <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-end flex-wrap">
        <div className="relative flex items-center w-full sm:w-auto sm:min-w-[270px] md:min-w-[300px]">
          <img 
            src={SearchIcon} 
            alt="Search"
            className="absolute left-4 w-6 h-6 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search something here"
            className="w-full h-12 pl-12 pr-4 border border-[rgba(195,212,233,0.4)] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-[#3d5278] text-sm sm:text-base"
          />
        </div>
        <img 
          src={Favorite} 
          alt="Favorite"
          className="cursor-pointer rounded-full w-8 h-8 sm:w-11 sm:h-11 hidden md:block"
        />
        {userObject?.googleId && (
          <Link to="/profile">
            <img 
              src={userObject?.image} 
              alt="User Avatar"
              width={43.99} 
              height={43.99}
              className="cursor-pointer rounded-full w-8 h-8 sm:w-11 sm:h-11"
            />
          </Link>
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
