import React, { useContext } from 'react';
import './App.sass';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main, { AboutOrNot, Intro } from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Projects from './components/Main/Projects/Projects';
import Project from './components/Main/Projects/Project/Project';
import NotFound from './components/Main/NotFound/NotFound';
import { ThemeContext, ThemeProvider } from './Theme';
import { LanguageProvider } from './Language';

function Sidebar(props: { side: 'left' | 'right' }) {
  const { theme } = useContext(ThemeContext);
  const { side } = props;

  return (
    <div
      className={`app-content__sidebar_${side}`}
      style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
    />
  );
}

function AppContent() {
  return (
    <div className="app-content">
      <Header />
      <Main />
      <Footer />
      <Sidebar side="left" />
      <Sidebar side="right" />
    </div>
  );
}

function App(): React.ReactElement {
  return (
    <div className="app">
      <ThemeProvider>
        <LanguageProvider>
          <Routes>
            <Route path="/" element={<AppContent />}>
              <Route index element={<Intro />} />
              <Route path="projects" element={<Projects />}>
                <Route path=":project" element={<Project />} />
              </Route>
              <Route path="cv/:please" element={<AboutOrNot />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
