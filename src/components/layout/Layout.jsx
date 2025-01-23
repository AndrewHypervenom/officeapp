import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useTheme } from '../../hooks/useTheme';

const AppLayout = ({ children }) => {
  const [theme, setTheme] = useTheme();
  const location = useLocation();
  
  const isExcel = location.pathname.includes('excel');
  const appColor = isExcel ? 'emerald' : 'blue';
  
  const bgGradient = isExcel 
    ? 'bg-gradient-to-br from-emerald-500/5 to-green-500/5'
    : 'bg-gradient-to-br from-blue-500/5 to-sky-500/5';

  return (
    <div className={`min-h-screen ${bgGradient}`}>
      <Header 
        theme={theme} 
        setTheme={setTheme} 
        appName={isExcel ? 'Excel' : 'Word'}
        appColor={appColor}
      />
      {children}
      <Footer appColor={appColor} />
    </div>
  );
};

export default AppLayout;