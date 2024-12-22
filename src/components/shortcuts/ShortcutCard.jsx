import { useParams } from 'react-router-dom';

const ShortcutCard = ({ title, shortcut, description, category }) => {
  const { app } = useParams();
  
  const getAppStyles = () => {
    switch(app) {
      case 'excel':
        return {
          category: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
          keys: 'border-emerald-200 dark:border-emerald-700'
        };
      case 'word':
        return {
          category: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
          keys: 'border-blue-200 dark:border-blue-700'
        };
      case 'powerpoint':
        return {
          category: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
          keys: 'border-red-200 dark:border-red-700'
        };
      default:
        return {
          category: 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300',
          keys: 'border-gray-200 dark:border-gray-700'
        };
    }
  };

  const styles = getAppStyles();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${styles.category}`}>
        {category}
      </span>
      
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2 mb-3">
        {shortcut.split('+').map((key, index) => (
          <span key={index} className="flex items-center">
            <kbd className={`
              px-2.5 py-1.5 
              text-sm font-semibold 
              bg-gray-50 dark:bg-gray-800
              border ${styles.keys}
              rounded
              text-gray-700 dark:text-gray-300
            `}>
              {key.trim()}
            </kbd>
            {index < shortcut.split('+').length - 1 && (
              <span className="mx-1 text-gray-400 dark:text-gray-500">+</span>
            )}
          </span>
        ))}
      </div>

      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default ShortcutCard;