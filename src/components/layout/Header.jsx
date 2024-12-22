import { useState } from 'react';
import { SunIcon, MoonIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/outline';
import officeIcon from '../../assets/office-logo.png';

const Header = ({ theme, setTheme }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm h-14">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <div className="flex items-center gap-1">
          <div className="flex items-center">
            <img 
              src={officeIcon} 
              alt="Microsoft Office Logo" 
              className="h-16 w-16 object-contain -my-6"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Shortcuts
          </h1>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={toggleFullScreen}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
          >
            <ArrowsPointingOutIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
          >
            {theme === 'dark' ? (
              <SunIcon className="h-5 w-5 text-yellow-500" />
            ) : (
              <MoonIcon className="h-5 w-5 text-gray-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;