import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Something will be here. But you can contact me.
        </p>
        <a
          className="App-link"
          href={`https://${process.env.REACT_APP_LINK_TELEGRAM}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
      </header>
    </div>
  );
}

export default App;
