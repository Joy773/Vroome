import { FC } from 'react';
import { useDarkMode } from '../../contexts/DarkModeContext';

const Favorites: FC = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <main className={`min-h-screen w-full transition-colors duration-200 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} py-8`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className={`rounded-lg shadow-md p-6 md:p-8 transition-colors duration-200 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            My Favorites
          </h1>
          <p className={`text-base md:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Your favorite cars will appear here.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Favorites;

