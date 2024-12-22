import { useState } from 'react';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';

const SearchFilters = ({ categories, onSearch, onFilterChange, appColor = 'emerald' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = (value) => {
    setSearchTerm(value);
    onSearch(value, selectedCategory);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onFilterChange(category, searchTerm);
  };

  return (
    <div className="mb-6 space-y-4">
      {/* Barra de búsqueda */}
      <div className="relative">
        <MagnifyingGlassIcon className={`absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-${appColor}-500`} />
        <input
          type="text"
          placeholder="Buscar atajo..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className={`
            w-full pl-10 pr-4 py-2.5 
            rounded-lg
            bg-white dark:bg-gray-800
            border border-gray-200 dark:border-gray-700
            text-gray-900 dark:text-white
            placeholder-gray-500 dark:placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-${appColor}-500 dark:focus:ring-${appColor}-400
            transition-colors duration-200
          `}
        />
      </div>

      {/* Filtros por categoría */}
      <div className="flex flex-wrap gap-2">
        <div className={`
          inline-flex items-center gap-1 px-2 py-1 
          text-sm font-medium text-${appColor}-600 dark:text-${appColor}-400
        `}>
          <FunnelIcon className="h-4 w-4" />
          Filtrar:
        </div>
        <button
          onClick={() => handleCategoryChange('')}
          className={`
            px-3 py-1 rounded-full text-sm font-medium
            ${!selectedCategory 
              ? `bg-${appColor}-100 dark:bg-${appColor}-900/30 text-${appColor}-700 dark:text-${appColor}-300` 
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
            }
            transition-colors duration-200
          `}
        >
          Todos
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`
              px-3 py-1 rounded-full text-sm font-medium
              ${selectedCategory === category 
                ? `bg-${appColor}-100 dark:bg-${appColor}-900/30 text-${appColor}-700 dark:text-${appColor}-300`
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }
              transition-colors duration-200
            `}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchFilters;