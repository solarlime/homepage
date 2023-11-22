import { useContext, useEffect, useState } from 'react';
import { Link, useMatch } from 'react-router-dom';
import styles from './Header.module.sass';
import { ThemeContext } from '../../context/Theme';
import Logo from './Logo';
import Github from '../../img/github.svg?react';
import Telegram from '../../img/telegram.svg?react';
import Print from '../../img/print.svg?react';
// import Download from '../../img/download.svg?react';
import moon from '../../img/moon.svg';
import sun from '../../img/sun.svg';
import { LanguageContext } from '../../context/Language';
import { getContent, PageComponent } from '../Content/getContent';

/**
 * A component for rendering a theme changer switcher
 * @param props - toggleTheme: a function to be called on a click,
 *                themeName: a string with a chosen theme name
 * @constructor
 */
function ThemeChanger(props: { toggleTheme: () => void, themeName: 'light' | 'dark' }) {
  const { toggleTheme, themeName } = props;

  return (
    <label className={styles.switcher} htmlFor="theme-switch">
      <input id="theme-switch" type="checkbox" onChange={toggleTheme} checked={(themeName === 'dark')} />
      <img src={(themeName === 'dark') ? sun : moon} alt="Change theme" />
    </label>
  );
}

/**
 * A component for rendering a site footer
 * @constructor
 */
function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [content, setContent] = useState({} as PageComponent);
  const isCV = useMatch(`/cv/${import.meta.env.VITE_APP_PLEASE}`);

  useEffect(() => {
    getContent(language, 'header')
      .then((res) => { setContent(res); });
  }, [language]);

  return (
    <header
      className={styles.header}
      style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
    >
      <ul className={styles['header-items']}>
        <li className={styles['header-items__item_logo']}>
          <Link className={`${styles['logo-container']}`} to="/">
            <Logo className={styles.logo} green={theme.accentColor} notGreen={theme.extraColor} />
          </Link>
        </li>
        <li className={styles['header-items__item_rest']}>
          {(isCV) ? (
            <>
              {/* <button className={`${styles.link}`} type="button" onClick={() => alert('Under construction')}> */}
              {/*  /!* TODO: pdf generation *!/ */}
              {/*  {(document.documentElement.clientWidth < 650) ? <Download fill={theme.color} /> : content.download} */}
              {/* </button> */}
              <button className={`${styles.link}`} type="button" onClick={window.print}>
                {
                  (document.documentElement.clientWidth < 650)
                    ? <Print fill={theme.color} />
                    : content.print
                }
              </button>
            </>
          ) : (
            <>
              <a className={`${styles.link}`} href={`https://${import.meta.env.VITE_APP_LINK_GITHUB}`} target="_blank" rel="noreferrer">
                {(document.documentElement.clientWidth < 550) ? <Github fill={theme.color} /> : 'github'}
              </a>
              <a className={`${styles.link}`} href={`https://${import.meta.env.VITE_APP_LINK_TELEGRAM}`} target="_blank" rel="noreferrer">
                {(document.documentElement.clientWidth < 550) ? <Telegram fill={theme.color} /> : 'telegram'}
              </a>
            </>
          )}
          <ThemeChanger toggleTheme={toggleTheme} themeName={theme.name} />
        </li>
      </ul>
    </header>
  );
}

export default Header;
