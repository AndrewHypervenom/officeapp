import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PlayCircleIcon } from '@heroicons/react/24/outline';

const ShortcutCard = ({ title, shortcut, description, category }) => {
 const [showGif, setShowGif] = useState(false);
 const [imageError, setImageError] = useState(false);
 const location = useLocation();
 const pathParts = location.pathname.split('/').filter(Boolean);
 const app = pathParts[0];
 const level = pathParts[1];

 const getGifPath = () => {
    const filename = shortcut
      .toLowerCase()
      .replace(/\s*\+\s*/g, '_plus_')
      .replace(/\s+/g, '_')
      .replace(/[^\w_]/g, '');
    // Actualizar ruta para coincidir con la estructura
    return `/shortcuts/${app}/${level}/${filename}.gif`;
  };

 const parseShortcut = (shortcutStr) => {
   const normalized = shortcutStr.replace(/\s*\+\s*/g, '+');
   const keys = [];
   let buffer = '';
   
   for (let i = 0; i < normalized.length; i++) {
     if (normalized[i] === '+') {
       if (buffer) {
         keys.push(buffer);
         buffer = '';
       }
       if (normalized[i + 1] === '+') {
         keys.push('+');
         i++;
       }
     } else {
       buffer += normalized[i];
     }
   }
   
   if (buffer) {
     keys.push(buffer);
   }
   
   return keys.map(key => key.trim()).filter(Boolean);
 };

 const keys = parseShortcut(shortcut);
 
 const styles = {
   excel: {
     accent: 'text-emerald-500',
     badge: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400',
     button: 'text-emerald-500 hover:text-emerald-600 dark:text-emerald-400'
   },
   word: {
     accent: 'text-blue-500',
     badge: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
     button: 'text-blue-500 hover:text-blue-600 dark:text-blue-400'
   },
   powerpoint: {
     accent: 'text-red-500',
     badge: 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400',
     button: 'text-red-500 hover:text-red-600 dark:text-red-400'
   }
 }[app] || {
   accent: 'text-gray-500',
   badge: 'bg-gray-50 text-gray-600 dark:bg-gray-900/20 dark:text-gray-400',
   button: 'text-gray-500 hover:text-gray-600 dark:text-gray-400'
 };

 return (
   <div className="bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-100 dark:border-gray-700 p-4">
     <span className={`inline-block px-2 py-1 text-xs font-medium rounded-md ${styles.badge}`}>
       {category}
     </span>
     
     <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-2">
       {title}
     </h3>

     <div className="flex flex-wrap gap-1.5 my-3">
       {keys.map((key, index) => (
         <span key={index} className="flex items-center">
           <kbd className="px-2 py-1 text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-900 
                         border border-gray-200 dark:border-gray-700 rounded">
             {key}
           </kbd>
           {index < keys.length - 1 && (
             <span className="mx-1 text-gray-400">+</span>
           )}
         </span>
       ))}
     </div>

     <p className="text-sm text-gray-600 dark:text-gray-300">
       {description}
     </p>

     <button
       onClick={() => {
         setShowGif(!showGif);
         setImageError(false);
       }}
       className={`
         flex items-center gap-2 mt-4 text-sm font-medium
         ${styles.button}
         transition-colors duration-200
       `}
     >
       <PlayCircleIcon className={`w-5 h-5 transition-transform duration-200 ${showGif ? 'rotate-90' : ''}`} />
       {showGif ? 'Ocultar ejemplo' : 'Ver ejemplo'}
     </button>

     {showGif && (
       <div className="mt-4 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900">
         <img
            src={imageError ? '/assets/images/no_image.png' : getGifPath()}
            alt={`Demostración: ${title}`}
            className="w-full h-auto"
            loading="lazy"
            onError={(e) => {
              console.log(`Error loading GIF: ${getGifPath()}`);
              setImageError(true);
            }}
          />
       </div>
     )}
   </div>
 );
};

export default ShortcutCard;