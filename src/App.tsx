import React, { useContext } from 'react';
import './App.sass';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main, { AboutOrNot, Intro } from './components/Main/Main';
import Footer from './components/Footer/Footer';
import NotFound from './components/Main/NotFound/NotFound';
import { ThemeContext } from './context/Theme';

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

function App(): React.ReactElement {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="app" style={{ color: theme.color, backgroundColor: theme.backgroundColor }}>
      <Routes>
        <Route path="/" element={<AppContent />}>
          <Route index element={<Intro />} />
          <Route path=":please" element={<AboutOrNot />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
