import { Link } from 'react-router-dom';
import excelIcon from '../assets/excel-icon.png';
import wordIcon from '../assets/word-icon.png';
import powerpointIcon from '../assets/powerpoint-icon.png';

const Home = () => {
    const apps = [
      {
        id: 'excel',
        name: 'Excel',
        icon: excelIcon,
        description: 'Domina los atajos de teclado de Microsoft Excel',
        gradient: 'from-emerald-400 to-green-500',
        iconBg: 'bg-emerald-500/10',
        shadowColor: 'shadow-emerald-500/20',
        borderGlow: 'group-hover:shadow-emerald-500/30'
      },
      {
        id: 'word',
        name: 'Word',
        icon: wordIcon,
        description: 'Aprende los atajos de teclado de Microsoft Word',
        gradient: 'from-blue-500 to-blue-600',
        iconBg: 'bg-blue-500/10',
        shadowColor: 'shadow-blue-500/20',
        borderGlow: 'group-hover:shadow-blue-500/30'
      },
      {
        id: 'powerpoint',
        name: 'PowerPoint',
        icon: powerpointIcon,
        description: 'Descubre los atajos de teclado de Microsoft PowerPoint',
        gradient: 'from-red-400 to-orange-500',
        iconBg: 'bg-red-500/10',
        shadowColor: 'shadow-red-500/20',
        borderGlow: 'group-hover:shadow-red-500/30'
      }
    ];
  
    return (
      <div className="min-h-screen pb-20 relative bg-gray-50 dark:bg-gray-900">
        {/* Formas de fondo */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 dark:bg-orange-400/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-orange-600/10 dark:bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
  
        <div className="relative max-w-md mx-auto pt-12 px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-orange-500 dark:text-orange-400 mb-2">
              Microsoft Office
            </h1>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Shortcuts
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Selecciona una aplicación para aprender sus atajos de teclado
            </p>
          </div>
  
          <div className="space-y-4">
            {apps.map((app) => (
              <Link 
                key={app.id} 
                to={`/${app.id}`}
                className="group block relative transition-all duration-300 ease-out"
              >
                {/* Card Background with Gradient Border */}
                <div className={`
                  absolute -inset-0.5 rounded-xl
                  bg-gradient-to-r ${app.gradient} opacity-0
                  group-hover:opacity-100 blur transition duration-300
                  ${app.borderGlow}
                `}></div>
                
                {/* Card Content */}
                <div className="
                  relative rounded-xl p-4
                  bg-white dark:bg-gray-800
                  border border-gray-200 dark:border-gray-700
                  group-hover:border-opacity-0
                  transform transition duration-300
                  group-hover:-translate-y-1
                  shadow-lg group-hover:shadow-xl
                ">
                  <div className="flex items-center gap-4">
                    <div className={`
                      flex-shrink-0 w-12 h-12
                      rounded-xl
                      ${app.iconBg}
                      flex items-center justify-center
                      p-2
                    `}>
                      <img 
                        src={app.icon} 
                        alt={`${app.name} icon`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                        Microsoft {app.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {app.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;