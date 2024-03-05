import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.sass';

import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Main, { AboutOrNot } from './components/Main/Main';
import Maintenance from './components/Maintenance/Maintenance';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import { useAppSelector } from './redux/app/hooks';
import { selectTheme } from './redux/theme/themeSlice';

const AppContent = memo(() => (
  <>
    <Header />
    <div className="app-content">
      <Main />
    </div>
    <Footer />
  </>
));

function App() {
  const theme = useAppSelector(selectTheme);

  return (
    <div className="app" style={{ color: theme.color, backgroundColor: theme.backgroundColor }}>
      <Routes>
        <Route path="/" element={<AppContent />}>
          <Route
            index
            element={(import.meta.env.VITE_APP_MAINTENANCE_MODE === 'false') ? <Intro /> : <Maintenance />}
          />
          <Route path=":please" element={<AboutOrNot />} />
          <Route path="*" element={(import.meta.env.VITE_APP_MAINTENANCE_MODE === 'false') ? <NotFound /> : <Maintenance />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
