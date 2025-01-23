const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
    const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-colors';
    const variants = {
      primary: 'bg-blue-500 text-white hover:bg-blue-600',
      secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
      outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-800'
    };
  
    return (
      <button
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;