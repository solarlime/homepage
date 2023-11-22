import { useContext, useEffect, useState } from 'react';
import styles from './Footer.module.sass';
import { LanguageContext } from '../../context/Language';
import { ThemeContext } from '../../context/Theme';
import { getContent, PageComponent } from '../Content/getContent';
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
    <label className={`${styles['language-switch']} ${styles.switcher} ${(document.documentElement.clientWidth < 550) ? '' : styles.height}`} htmlFor="language-switch">
      <input id="language-switch" type="checkbox" onChange={toggleLanguage} checked={(languageName === 'en')} />
      {
        (document.documentElement.clientWidth < 550)
          ? <img src={(languageName === 'ru') ? en : ru} alt="Change theme" />
          : <span>{languageButton}</span>
      }
    </label>
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
  const { theme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [content, setContent] = useState({} as PageComponent);

  useEffect(() => {
    getContent(language, 'footer')
      .then((res) => { setContent(res); });
  }, [language]);

  return (
    <footer
      className={styles.footer}
      style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
    >
      <div className={styles['footer-items']}>
        <p className={styles['footer-items__item_copyright']}>
          &copy;
          {` ${getYear()} `}
          solarlime.dev
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
