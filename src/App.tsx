import React, { useContext } from 'react';
import './App.sass';
import Header from './features/header/Header';
import Main from './features/main/Main';
import Footer from './features/footer/Footer';
import { ThemeContext, ThemeProvider } from './Theme';

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
        <AppContent />
      </ThemeProvider>
    </div>
  );
}

export default App;
