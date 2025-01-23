import { Link, useParams } from 'react-router-dom';
import { BookOpenIcon, UserIcon, AcademicCapIcon, StarIcon } from '@heroicons/react/24/outline';

const LevelsSelection = () => {
  const { app } = useParams();
  
  const appStyles = {
    excel: {
      title: 'text-emerald-500 dark:text-emerald-400',
      iconBg: 'bg-emerald-100 dark:bg-emerald-900/30',
      iconText: 'text-emerald-500 dark:text-emerald-400',
      hover: 'hover:bg-emerald-50 dark:hover:bg-emerald-900/20'
    },
    word: {
      title: 'text-blue-500 dark:text-blue-400',
      iconBg: 'bg-blue-100 dark:bg-blue-900/30',
      iconText: 'text-blue-500 dark:text-blue-400',
      hover: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    powerpoint: {
      title: 'text-red-500 dark:text-red-400',
      iconBg: 'bg-red-100 dark:bg-red-900/30',
      iconText: 'text-red-500 dark:text-red-400',
      hover: 'hover:bg-red-50 dark:hover:bg-red-900/20'
    }
  };

  const currentStyle = appStyles[app];

  const levels = [
    {
      id: 'fundamentals',
      name: 'Fundamentos',
      icon: BookOpenIcon,
      description: 'Aprende los conceptos básicos y esenciales'
    },
    {
      id: 'beginner',
      name: 'Principiante',
      icon: UserIcon,
      description: 'Comienza con los atajos más comunes'
    },
    {
      id: 'intermediate',
      name: 'Intermedio',
      icon: AcademicCapIcon,
      description: 'Mejora tu productividad con atajos avanzados'
    },
    {
      id: 'professional',
      name: 'Profesional',
      icon: StarIcon,
      description: 'Domina los atajos de nivel experto'
    }
  ];

  const appNames = {
    excel: 'Excel',
    word: 'Word',
    powerpoint: 'PowerPoint'
  };

  return (
    <div className="min-h-screen pb-20 relative bg-gray-50 dark:bg-gray-900">
      {/* Formas de fondo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-96 h-96 ${currentStyle.iconBg} rounded-full blur-3xl`}></div>
        <div className={`absolute bottom-1/4 right-1/3 w-96 h-96 ${currentStyle.iconBg} rounded-full blur-3xl`}></div>
      </div>

      <div className="relative max-w-md mx-auto pt-12 px-4">
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold ${currentStyle.title} mb-2`}>
            Microsoft {appNames[app]}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Selecciona un nivel para comenzar a aprender
          </p>
        </div>

        <div className="space-y-4">
          {levels.map((level) => {
            const Icon = level.icon;
            return (
              <Link 
                key={level.id}
                to={`/${app}/${level.id}`}
                className="block"
              >
                <div className={`
                  relative rounded-xl p-4
                  bg-white dark:bg-gray-800
                  border border-gray-200 dark:border-gray-700
                  transform transition duration-200
                  hover:-translate-y-0.5
                  ${currentStyle.hover}
                  shadow-sm hover:shadow-md
                `}>
                  <div className="flex items-center gap-4">
                    <div className={`
                      p-3 rounded-xl
                      ${currentStyle.iconBg}
                      transition-colors duration-200
                    `}>
                      <Icon className={`w-6 h-6 ${currentStyle.iconText}`} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold mb-1 ${currentStyle.title}`}>
                        {level.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {level.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LevelsSelection;