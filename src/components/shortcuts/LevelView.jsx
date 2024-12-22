import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import ShortcutList from './ShortcutList';
import SearchFilters from './SearchFilters';
import { shortcuts } from '../../data/shortcuts';

const LevelView = () => {
  const { app, level } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const isExcel = app === 'excel';
  const appColor = isExcel ? 'emerald' : 'blue';
  
  const levelTitles = {
    fundamentals: 'Fundamentos',
    beginner: 'Principiante',
    intermediate: 'Intermedio',
    professional: 'Profesional'
  };

  const levelDescriptions = {
    fundamentals: 'Aprende los conceptos básicos y esenciales',
    beginner: 'Comienza con los atajos más comunes',
    intermediate: 'Mejora tu productividad con atajos avanzados',
    professional: 'Domina los atajos de nivel experto'
  };

  // Obtener todas las categorías únicas del nivel actual
  const categories = useMemo(() => {
    const currentShortcuts = shortcuts[app]?.[level] || [];
    return [...new Set(currentShortcuts.map(shortcut => shortcut.category))].sort();
  }, [app, level]);

  // Filtrar shortcuts según búsqueda y categoría
  const filteredShortcuts = useMemo(() => {
    let filtered = shortcuts[app]?.[level] || [];
    
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(shortcut => 
        shortcut.title.toLowerCase().includes(search) ||
        shortcut.description.toLowerCase().includes(search) ||
        shortcut.shortcut.toLowerCase().includes(search)
      );
    }
    
    if (selectedCategory) {
      filtered = filtered.filter(shortcut => 
        shortcut.category === selectedCategory
      );
    }
    
    return filtered;
  }, [app, level, searchTerm, selectedCategory]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen pb-20 px-4 bg-gray-50 dark:bg-gray-900">
      {/* Formas de fondo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-96 h-96 bg-${appColor}-500/10 dark:bg-${appColor}-400/5 rounded-full blur-3xl`}></div>
        <div className={`absolute bottom-1/4 right-1/3 w-96 h-96 bg-${appColor}-600/10 dark:bg-${appColor}-500/5 rounded-full blur-3xl`}></div>
      </div>

      <div className="relative max-w-2xl mx-auto pt-8">
        <div className="mb-8">
          <h1 className={`text-2xl font-bold text-${appColor}-500 dark:text-${appColor}-400 mb-2`}>
            {levelTitles[level]}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {levelDescriptions[level]}
          </p>
        </div>

        <SearchFilters
          categories={categories}
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
          appColor={appColor}
        />

        <ShortcutList 
          shortcuts={filteredShortcuts} 
          appColor={appColor}
        />
      </div>
    </div>
  );
};

export default LevelView;