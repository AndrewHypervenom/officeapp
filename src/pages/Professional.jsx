import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { shortcuts } from '../data/shortcuts';
import ShortcutList from '../components/shortcuts/ShortcutList';

const getAppColors = (app) => {
  switch (app) {
    case 'excel':
      return {
        text: 'text-emerald-500 dark:text-emerald-400',
        bgPrimary: 'bg-emerald-500/10 dark:bg-emerald-400/5',
        bgSecondary: 'bg-emerald-600/10 dark:bg-emerald-500/5',
        appColor: 'emerald'
      };
    case 'word':
      return {
        text: 'text-blue-500 dark:text-blue-400',
        bgPrimary: 'bg-blue-500/10 dark:bg-blue-400/5',
        bgSecondary: 'bg-blue-600/10 dark:bg-blue-500/5',
        appColor: 'blue'
      };
    case 'powerpoint':
      return {
        text: 'text-red-500 dark:text-red-400',
        bgPrimary: 'bg-red-500/10 dark:bg-red-400/5',
        bgSecondary: 'bg-red-600/10 dark:bg-red-500/5',
        appColor: 'red'
      };
    default:
      return {
        text: 'text-gray-500 dark:text-gray-400',
        bgPrimary: 'bg-gray-500/10 dark:bg-gray-400/5',
        bgSecondary: 'bg-gray-600/10 dark:bg-gray-500/5',
        appColor: 'gray'
      };
  }
};

const Professional = () => {
  const { app } = useParams();
  const colors = getAppColors(app);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pb-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-96 h-96 ${colors.bgPrimary} rounded-full blur-3xl`}></div>
        <div className={`absolute bottom-1/4 right-1/3 w-96 h-96 ${colors.bgSecondary} rounded-full blur-3xl`}></div>
      </div>

      <div className="relative max-w-2xl mx-auto pt-8">
        <div className="mb-8">
          <h1 className={`text-2xl font-bold ${colors.text} mb-2`}>
            Profesional
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Domina los atajos de nivel experto
          </p>
        </div>

        <ShortcutList 
          shortcuts={shortcuts[app]?.professional} 
          appColor={colors.appColor}
        />
      </div>
    </div>
  );
};

export default Professional;