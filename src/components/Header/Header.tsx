import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.sass';
import { ThemeContext } from '../../Theme';
import logo from '../../img/logo.svg';

/**
 * A component for rendering a theme changer switcher
 * @param props - toggleTheme: a function to be called on a click,
 *                themeName: a string with a chosen theme name
 * @constructor
 */
function ThemeChanger(props: { toggleTheme: () => void, themeName: 'light' | 'dark' }) {
  const { toggleTheme, themeName } = props;

  return (
    <label className={`${styles['theme-switch']} ${styles.switcher}`} htmlFor="theme-switch">
      <input id="theme-switch" type="checkbox" onChange={toggleTheme} checked={(themeName === 'dark')} />
      <span className={styles.slider} />
    </label>
  );
}

/**
 * A component for rendering a site footer
 * @constructor
 */
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
          <a className={`${styles.button} ${styles['button-link']}`} href={`https://${process.env.REACT_APP_LINK_TELEGRAM}`} target="_blank" rel="noreferrer">Telegram</a>
          <ThemeChanger toggleTheme={toggleTheme} themeName={theme.name} />
        </li>
      </ul>
    </header>
  );
}

export default Header;
