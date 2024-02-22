import { useEffect, useState } from 'react';
import { Link, useMatch } from 'react-router-dom';

import type { ExtendedCSS } from '../types';

import styles from './Header.module.sass';
import { useAppSelector, useAppDispatch } from '../../redux/app/hooks';
import { getContent, PageComponent } from '../Content/getContent';
import { selectTheme, selectThemeName, toggleTheme } from '../../redux/theme/themeSlice';
import { selectLanguage, selectLanguageName } from '../../redux/language/languageSlice';
import Logo from './Logo';

import Github from '../../img/github.svg?react';
import Telegram from '../../img/telegram.svg?react';
import Print from '../../img/print.svg?react';
import Download from '../../img/download.svg?react';
import moon from '../../img/moon.svg';
import sun from '../../img/sun.svg';

/**
 * A component for rendering a theme changer switcher
 * @param props - toggleTheme: a function to be called on a click,
 *                themeName: a string with a chosen theme name
 * @constructor
 */
function ThemeChanger() {
  const themeName = useAppSelector(selectThemeName);
  const languageName = useAppSelector(selectLanguageName);
  const dispatch = useAppDispatch();

  return (
    <button
      className={styles.switcher}
      type="button"
      aria-label={(languageName === 'ru' ? 'Сменить тему' : 'Change theme')}
      aria-controls={(languageName === 'ru' ? `Текущая тема: ${(themeName === 'light') ? 'светлая' : 'тёмная'}` : `Theme changed to ${themeName}`)}
      onClick={() => dispatch(toggleTheme())}
    >
      <img src={(themeName === 'dark') ? sun : moon} alt="" />
    </button>
  );
}

type State = true | 'pending' | false;

/**
 * A component for rendering a button for saving pdfs
 * It triggers server to open the page, save as pdf and send it to client
 * @constructor
 */
function SavePDFButton(props: { content: PageComponent }) {
  const { content } = props;
  const theme = useAppSelector(selectTheme);
  const languageName = useAppSelector(selectLanguageName);
  const [disabled, setDisabled] = useState(false as State);

  const handleDownload = () => {
    setDisabled('pending');
    fetch(import.meta.env.VITE_APP_SERVER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/pdf',
        'Cache-Control': 'no-cache',
      },
      body: JSON.stringify({ language: languageName }),
    })
      .then(
        (result) => {
        // Server sends 500 if there are problems with making pdfs
          if (result.status === 500) {
            result.json()
              .then((parsed) => {
                console.error(parsed.error);
                setDisabled(true);
              });
          } else {
            result.blob()
              .then((blob) => {
                const url = URL.createObjectURL(blob);

                const linkElement = document.createElement('a');
                linkElement.href = url;
                linkElement.download = `CV_Front-end_${import.meta.env[(languageName === 'ru') ? 'VITE_APP_ME_ru' : 'VITE_APP_ME_en']}.pdf`;

                document.body.appendChild(linkElement);
                linkElement.click();
                linkElement.parentNode!.removeChild(linkElement);
                setDisabled(false);
              });
          }
        },
        // Handling 404
        () => {
          setDisabled(true);
        },
      );
  };

  return (
    <button
      className={`${styles.link} ${(disabled === 'pending') ? styles.pending : ''}`}
      type="button"
      aria-label={content.download}
      onClick={handleDownload}
      disabled={(typeof disabled === 'boolean') ? disabled : true}
    >
      {
        // At first, find out if state is 'pending' and then deside what to use: svg or text
        // eslint-disable-next-line no-nested-ternary
        (typeof disabled === 'boolean')
          ? ((document.documentElement.clientWidth < 650)
            ? <Download fill={(!disabled) ? theme.color : ''} /> : content.download)
          : '...'
      }
    </button>
  );
}

/**
 * A component for rendering a site footer
 * @constructor
 */
function Header() {
  const theme = useAppSelector(selectTheme);
  const language = useAppSelector(selectLanguage);
  const [content, setContent] = useState({} as PageComponent);
  const isCV = useMatch(`/${import.meta.env.VITE_APP_PLEASE}`);

  useEffect(() => {
    getContent(language, 'header')
      .then((res) => { setContent(res); });
  }, [language]);

  return (
    <header
      className={styles.header}
      style={{
        color: theme.color,
        backgroundColor: theme.backgroundColor,
        '--focus-color': theme.accentColor,
      } as ExtendedCSS}
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
              <SavePDFButton content={content} />
              <button
                className={`${styles.link}`}
                type="button"
                aria-label={content.print}
                onClick={
                  () => {
                    const printTimeout = window.setTimeout(() => {
                      clearTimeout(printTimeout);
                      window.print();
                    }, 1000);
                  }
                }
              >
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
          <ThemeChanger />
        </li>
      </ul>
    </header>
  );
}

Header.whyDidYouRender = true;

export default Header;
