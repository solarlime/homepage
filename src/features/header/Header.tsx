import React, { useContext } from 'react';
import styles from './Header.module.sass';
import { ThemeContext } from '../../Theme';

function ThemeChanger(props: { toggleTheme: () => void }) {
  const { toggleTheme } = props;

  return (
    <label className={styles['theme-switch']} htmlFor="theme-switch">
      <input id="theme-switch" type="checkbox" onChange={toggleTheme} />
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
        <li className={styles['header-items__item_logo']}>solarlime.dev</li>
        <li className={styles['header-items__item_rest']}>
          <ThemeChanger toggleTheme={toggleTheme} />
          <a className={`${styles.button} ${styles['button-link']}`} href={`https://${process.env.REACT_APP_LINK_TELEGRAM}`} target="_blank" rel="noreferrer">Telegram</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;