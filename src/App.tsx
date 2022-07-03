import React from 'react';
import './App.sass';
import Header from './features/header/Header';
import Main from './features/main/Main';
import Footer from './features/footer/Footer';
import { ThemeProvider } from './Theme';

function App(): React.ReactElement {
  return (
    <div className="App">
      <ThemeProvider>
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
