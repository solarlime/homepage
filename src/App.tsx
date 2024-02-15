import { useContext } from 'react';
import './App.sass';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Intro from './components/Main/Intro/Intro';
import Main, { AboutOrNot } from './components/Main/Main';
import Maintenance from './components/Main/Maintenance/Maintenance';
import Footer from './components/Footer/Footer';
import NotFound from './components/Main/NotFound/NotFound';
import { ThemeContext } from './redux/Theme';

function AppContent() {
  return (
    <>
      <Header />
      <div className="app-content">
        <Main />
      </div>
      <Footer />
    </>
  );
}

function App() {
  const { theme } = useContext(ThemeContext);

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
