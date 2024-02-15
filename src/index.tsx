import './wdyr';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './redux/Theme';
import { LanguageProvider } from './redux/Language';
import App from './App';
import { store } from './redux/app/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <LanguageProvider>
            <App />
          </LanguageProvider>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
