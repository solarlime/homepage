import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Footer.module.sass';
import { LanguageContext } from '../../Language';
import { ThemeContext } from '../../Theme';
import { getContent, PageComponent } from '../Content/getContent';

/**
 * A component for rendering a language changer switcher
 * @param props - toggleLanguage: a function to be called on a click,
 *                languageName: a string with a chosen language
 * @constructor
 */
function LanguageChanger(props: { toggleLanguage: () => void, languageName: 'ru' | 'en' }) {
  const { toggleLanguage, languageName } = props;

  return (
    <label className={`${styles['language-switch']} ${styles.switcher}`} htmlFor="language-switch">
      <input id="language-switch" type="checkbox" onChange={toggleLanguage} checked={(languageName === 'en')} />
      <span className={styles.slider} />
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
  const location = useLocation();
  const [content, setContent] = useState({} as PageComponent);

  useEffect(() => {
    getContent(language, 'footer')
      .then((res) => { setContent(res); });
  }, [language]);

  // Links must differ for a CV page & others
  const links = () => {
    if (location.pathname === `/cv/${process.env.REACT_APP_PLEASE}`) {
      return (
        <Link className={`${styles.button} ${styles['button-link']} ${styles.navigation__item}`} to="/projects">{content.footer_projects}</Link>
      );
    }
    return (
      <a className={`${styles.button} ${styles['button-link']}`} href={`https://${process.env.REACT_APP_LINK_GITHUB}`} target="_blank" rel="noreferrer">GitHub</a>
    );
  };

  return (
    <footer
      className={styles.footer}
      style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
    >
      <p className={styles.footer__item_copyright}>
        Copyright &copy;
        {` ${getYear()} `}
        solarlime.dev.
        <br />
        {content.copyright}
        .
      </p>
      <LanguageChanger languageName={language} toggleLanguage={toggleLanguage} />
      <nav className={styles.footer__item_buttons}>
        {links()}
      </nav>
    </footer>
  );
}

export default Footer;
