import { memo, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.sass';

import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Main, { AboutOrNot } from './components/Main/Main';
import Maintenance from './components/Maintenance/Maintenance';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import { useAppDispatch, useAppSelector } from './redux/app/hooks';
import { selectTheme } from './redux/theme/themeSlice';
import { setIsCompact } from './redux/layout/isCompactSlice.ts';

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
  const dispatch = useAppDispatch();

  useEffect(() => {
    const compactMatcher = window.matchMedia('(max-width: 699px)');
    const handleChange = (event: MediaQueryListEvent) => {
      dispatch(setIsCompact(event.matches));
    };
    if (compactMatcher.addEventListener) {
      compactMatcher.addEventListener('change', handleChange);
    } else {
      // fallback for Safari 12
      compactMatcher.addListener(handleChange);
    }
    return () => {
      if (compactMatcher.removeEventListener) {
        compactMatcher.removeEventListener('change', handleChange);
      } else {
        // fallback for Safari 12
        compactMatcher.removeListener(handleChange);
      }
    };
  }, []);

  return (
    <div
      className="app"
      style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
      role="application"
    >
      <Routes>
        <Route path="/" element={<AppContent />}>
          <Route
            index
            element={
              import.meta.env.VITE_APP_MAINTENANCE_MODE === 'false' ? (
                <Intro />
              ) : (
                <Maintenance />
              )
            }
          />
          <Route path=":please" element={<AboutOrNot />} />
          <Route
            path="*"
            element={
              import.meta.env.VITE_APP_MAINTENANCE_MODE === 'false' ? (
                <NotFound />
              ) : (
                <Maintenance />
              )
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
