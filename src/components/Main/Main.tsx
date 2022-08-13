import React, { useContext, useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import styles from './Main.module.sass';
import NotFound from './NotFound/NotFound';
import About from './About/About';
import { ThemeContext } from '../../Theme';

/**
 * A component for rendering a name.
 * Takes initName and turns it into finalName
 * @constructor
 */
function Name() {
  const initName = 'solarlime';
  const finalName = 'Dmitriy';
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
      }, 250);
    }
    return () => { clearTimeout(timeout); };
  }, [name]);

  return (
    <span className={styles.name}>
      {`${name}${(name === initName || name === finalName) ? '' : '_'}`}
    </span>
  );
}

/**
 * A component for a main page
 * @constructor
 */
export function Intro() {
  const { theme } = useContext(ThemeContext);

  return (
    <article
      className={styles.base}
      style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
    >
      <section id="me" className={`${styles.intro} ${styles.base__item}`}>
        <h1 className={styles.intro__title}>
          <p className={styles.base__item__title}>
            {'Hi! I am '}
            <Name />
            .
          </p>
          <p className={styles.intro__title_subtitle}>I turn design into reality. Web reality.</p>
        </h1>
        <picture className={styles.intro__image}>
          <img
            sizes="100w"
            srcSet={`${process.env.REACT_APP_FILES}/memoji320.jpg 320w, 
            ${process.env.REACT_APP_FILES}/memoji640.jpg 640w, 
            ${process.env.REACT_APP_FILES}/memoji1280.jpg 1280w`}
            src={`${process.env.REACT_APP_FILES}/memoji.jpg`}
            alt="Me"
          />
        </picture>
        <div className={styles.intro__imac}>
          <div
            className={styles.imac}
            style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
          >
            <p>
              I am inspired by different patterns of industrial design.
              However, the better thing is an opportunity to animate them,
              to provide an ability to interact with them.
              At this moment, I feel that I have really created something new.
            </p>
          </div>
          <div className={styles['imac-space']} />
        </div>
        <div className={styles.intro__box} />
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
  if (params.please === process.env.REACT_APP_PLEASE) {
    return <About />;
  }
  return (<NotFound />);
}

/**
 * A wrapper for components rendered in <main>
 * @constructor
 */
function Main() {
  return (
    <main className={styles.main}>
      <Outlet />
    </main>
  );
}

export default Main;
