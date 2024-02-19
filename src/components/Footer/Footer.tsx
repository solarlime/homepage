import { useContext, useEffect, useState } from 'react';

import type { ExtendedCSS } from '../types';

import styles from './Footer.module.sass';
import { LanguageContext } from '../../redux/Language';
import { getContent, PageComponent } from '../Content/getContent';
import { useAppSelector } from '../../redux/app/hooks';
import { selectTheme } from '../../redux/themeSlice';

import ru from '../../img/ru.png';
import en from '../../img/en.png';

/**
 * A component for rendering a language changer switcher
 * @param props - toggleLanguage: a function to be called on a click,
 *                languageName: a string with a chosen language
 * @constructor
 */
function LanguageChanger(props: { toggleLanguage: () => void, languageName: 'ru' | 'en', languageButton: string }) {
  const { toggleLanguage, languageName, languageButton } = props;

  return (
    <button
      className={`${(document.documentElement.clientWidth < 550) ? styles.switcher : styles.link}`}
      type="button"
      aria-label={(languageName === 'ru' ? 'Сменить язык' : 'Change language')}
      aria-controls={(languageName === 'ru' ? `Текущий язык: ${(languageName === 'ru') ? 'русский' : 'английский'}` : `Theme changed to ${languageName}`)}
      onClick={toggleLanguage}
    >
      {
        (document.documentElement.clientWidth < 550)
          ? <img src={(languageName === 'ru') ? en : ru} alt="" />
          : <span>{languageButton}</span>
      }
    </button>
  );
}

/**
 * A simple function for fetching a current year
 */
const getYear = () => {
  const date = new Date();
  return date.getFullYear();
};

/**
 * A component for rendering a site footer
 * @constructor
 */
function Footer() {
  const theme = useAppSelector(selectTheme);
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [content, setContent] = useState({} as PageComponent);

  useEffect(() => {
    getContent(language, 'footer')
      .then((res) => { setContent(res); });
  }, [language]);

  return (
    <footer
      className={styles.footer}
      style={{
        color: theme.color,
        backgroundColor: theme.backgroundColor,
        '--focus-color': theme.accentColor,
      } as ExtendedCSS}
    >
      <div className={styles['footer-items']}>
        <p className={styles['footer-items__item_copyright']}>
          &copy;
          solarlime.dev,
          {` ${getYear()} `}
        </p>
        <LanguageChanger
          languageName={language.name}
          toggleLanguage={toggleLanguage}
          languageButton={content.language}
        />
      </div>
    </footer>
  );
}

export default Footer;
