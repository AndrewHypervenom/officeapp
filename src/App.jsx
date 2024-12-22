import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LevelsSelection from './pages/LevelsSelection';
import Layout from './components/layout/Layout';
import Fundamentals from './pages/Fundamentals';
import Beginner from './pages/Beginner';
import Intermediate from './pages/Intermediate';
import Professional from './pages/Professional';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:app" element={<LevelsSelection />} />
          <Route path="/:app/fundamentals" element={<Fundamentals />} />
          <Route path="/:app/beginner" element={<Beginner />} />
          <Route path="/:app/intermediate" element={<Intermediate />} />
          <Route path="/:app/professional" element={<Professional />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;