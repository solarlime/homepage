import { useContext, useState, useEffect } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import styles from './Main.module.sass';
import NotFound from './NotFound/NotFound';
import About from './About/About';
import { ThemeContext } from '../../context/Theme';
import { LanguageContext } from '../../context/Language';
import ImacExtras from '../../img/imac-extras.svg?react';
import Cat from '../../img/cat.svg?react';
import Tambourines from '../../img/tambourines.svg?react';
import TagCloud from './About/TagCloud';
import { getContent, PageComponent } from '../Content/getContent';

/**
 * A component for rendering a name.
 * Takes initName and turns it into finalName
 * @constructor
 */
function Name(props: { content: PageComponent }) {
  const { content } = props;
  const initName = 'solarlime';
  const finalName = content.title_name;
  const [name, setName] = useState(initName);
  const [mode, setMode] = useState('decrease');

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (mode === 'decrease') {
      timeout = setTimeout(() => {
        setName((oldString) => {
          //  Before the first letter it is needed to change the mode to begin typing the final name
          if (oldString.length === 1) setMode('increase');
          return oldString.substring(0, oldString.length - 1);
        });
        // A delay must be more before beginning than during the transformation
      }, (name === initName) ? 2000 : 200);
    } else {
      timeout = setTimeout(() => {
        setName((oldString) => finalName.substring(0, oldString.length + 1));
        if (name === finalName) {
          setMode('finished');
        }
      }, 250);
    }
    return () => { clearTimeout(timeout); };
  }, [name]);

  return (
    <span className={styles.name}>
      {`${(mode === 'finished') ? finalName : name}${(name === initName || mode === 'finished') ? '' : '_'}`}
    </span>
  );
}

/**
 * A component for a main page
 * @constructor
 */
export function Intro() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [content, setContent] = useState({} as PageComponent);

  useEffect(() => {
    getContent(language, 'intro')
      .then((res) => { setContent(res); });
  }, [language]);

  return (
    <article
      className={styles.base}
      style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
    >
      <section id="me" className={`${styles.intro} ${styles.base__item}`}>
        <h1 className={styles.intro__title}>
          <p className={styles.base__item__title}>
            {content.title}
            {' '}
            <Name content={content} />
            .
          </p>
          <p className={styles.intro__title_subtitle}>{content.subtitle}</p>
        </h1>
        <picture className={styles.intro__image}>
          <img
            sizes="100w"
            srcSet={`${import.meta.env.VITE_APP_FILES}/memoji320.jpg 320w, 
            ${import.meta.env.VITE_APP_FILES}/memoji640.jpg 640w, 
            ${import.meta.env.VITE_APP_FILES}/memoji1280.jpg 1280w`}
            src={`${import.meta.env.VITE_APP_FILES}/memoji.jpg`}
            alt="Me"
          />
        </picture>
        <div className={styles.intro__imac}>
          <div
            className={styles.imac}
            style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
          >
            <p>
              {content.imac}
            </p>
          </div>
          <div className={styles['imac-space']} />
        </div>
        <div className={styles.intro__table}>
          <ImacExtras className={styles['imac-extras']} />
          <div
            className={styles.table}
            style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
          >
            <h2 className={styles.table__title}>
              {content.table_title}
            </h2>
            <TagCloud theme={theme} />
            <Cat className={styles.table__cat} />
            <div className={styles.table__hole} />
          </div>
        </div>
        <div className={styles.intro__projects}>
          <h2 className={styles.projects__title}>
            {content.projects_title}
          </h2>
          <p className={styles.projects__text}>
            {content.projects_text_1}
            <br />
            {content.projects_text_2}
          </p>
          <Link className={styles.projects__chest} to="/projects">
            <div className={styles.cap} />
            <div className={styles.chest}>
              <p>{content.chest}</p>
            </div>
          </Link>
          <Tambourines className={styles.projects__tambourines} />
        </div>
        <div className={styles.intro__final}>
          <p>
            {content.final_1}
            <br />
            {content.final_2}
          </p>
          <a className={`${styles.button} ${styles['button-link']}`} href={`https://${import.meta.env.VITE_APP_LINK_TELEGRAM}`} target="_blank" rel="noreferrer">Telegram</a>
        </div>
      </section>
    </article>
  );
}

/**
 * An extra component, which controls access to the CV
 * @constructor
 */
export function AboutOrNot() {
  const params = useParams();
  if (params.please === import.meta.env.VITE_APP_PLEASE) {
    return <About />;
  }
  return (<NotFound />);
}

/**
 * A wrapper for components rendered in <main>
 * @constructor
 */
function Main() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={styles.main} style={{ color: theme.color, backgroundColor: theme.backgroundColor }}>
      <Outlet />
    </main>
  );
}

export default Main;
