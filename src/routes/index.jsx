import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import AppLayout from '../components/layout/AppLayout';

const levels = [
  {
    path: 'beginner',
    name: 'Principiante',
  },
  {
    path: 'intermediate',
    name: 'Intermedio',
  },
  {
    path: 'professional',
    name: 'Profesional',
  }
];

const createAppRoutes = (app) => {
  const color = app === 'excel' ? 'emerald' : 'blue';
  
  return levels.map(level => ({
    path: `/${app}/${level.path}`,
    element: (
      <AppLayout>
        <ShortcutList 
          appType={app}
          level={level.path}
          color={color}
        />
      </AppLayout>
    )
  }));
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  ...createAppRoutes('excel'),
  ...createAppRoutes('word')
]);