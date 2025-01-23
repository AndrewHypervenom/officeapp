import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, BookOpenIcon, UserIcon, AcademicCapIcon, StarIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);
  const [currentApp] = pathParts;

  const isHome = location.pathname === '/';
  
  const isExcel = currentApp === 'excel';
  const isWord = currentApp === 'word';
  const activeColor = isExcel 
    ? 'text-emerald-500 dark:text-emerald-400' 
    : isWord 
      ? 'text-blue-500 dark:text-blue-400'
      : 'text-orange-500 dark:text-orange-400';

  const navigation = [
    { 
      name: 'Inicio', 
      icon: HomeIcon, 
      path: '/',
      width: 'w-1/6'
    },
    { 
      name: 'Fundamentos', 
      icon: BookOpenIcon, 
      path: currentApp ? `/${currentApp}/fundamentals` : '#',
      width: 'w-1/6'
    },
    { 
      name: 'Principiante', 
      icon: UserIcon, 
      path: currentApp ? `/${currentApp}/beginner` : '#',
      width: 'w-1/6'
    },
    { 
      name: 'Intermedio', 
      icon: AcademicCapIcon, 
      path: currentApp ? `/${currentApp}/intermediate` : '#',
      width: 'w-1/6'
    },
    { 
      name: 'Profesional', 
      icon: StarIcon, 
      path: currentApp ? `/${currentApp}/professional` : '#',
      width: 'w-1/6'
    }
  ];

  return (
    <footer className="fixed bottom-0 w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700">
      <nav className="h-16">
        <ul className="flex h-full items-center justify-between px-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            const isDisabled = item.path === '#' || (isHome && item.name !== 'Inicio');
            
            return (
              <li key={item.name} className={item.width}>
                {isDisabled ? (
                  <div className="flex flex-col items-center space-y-0.5 text-gray-300 dark:text-gray-600 cursor-not-allowed">
                    <Icon className="h-5 w-5" />
                    <span className="text-[10px] font-medium">{item.name}</span>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`
                      flex flex-col items-center space-y-0.5
                      ${isActive 
                        ? activeColor
                        : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                      }
                      transition-colors duration-200
                    `}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="text-[10px] font-medium">{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;