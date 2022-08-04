import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.sass';
import { ThemeContext } from '../../Theme';
import logo from '../../img/logo.svg';

function ThemeChanger(props: { toggleTheme: () => void, themeName: 'light' | 'dark' }) {
  const { toggleTheme, themeName } = props;

  return (
    <label className={styles['theme-switch']} htmlFor="theme-switch">
      <input id="theme-switch" type="checkbox" onChange={toggleTheme} checked={(themeName === 'dark')} />
      <span className={styles.slider} />
    </label>
  );
}

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      className={styles.header}
      style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
    >
      <ul className={styles['header-items']}>
        <li className={styles['header-items__item_logo']}>
          <Link className={`${styles['logo-container']}`} to="/">
            <img className={styles.logo} src={logo} alt="Main page" />
          </Link>
        </li>
        <li className={styles['header-items__item_rest']}>
          <ThemeChanger toggleTheme={toggleTheme} themeName={theme.name} />
          <a className={`${styles.button} ${styles['button-link']}`} href={`https://${process.env.REACT_APP_LINK_TELEGRAM}`} target="_blank" rel="noreferrer">Telegram</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
