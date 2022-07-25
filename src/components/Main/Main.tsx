import React, { useContext } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import styles from './Main.module.sass';
import NotFound from './NotFound/NotFound';
import About from './About/About';
import { ThemeContext } from '../../Theme';

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
            Hi!
          </p>
          <p className={styles.intro__title_subtitle}>{`I am ${process.env.REACT_APP_ME}`}</p>
        </h1>
        <picture className={styles.intro__image}>
          <img
            sizes="100w"
            srcSet={`${process.env.REACT_APP_FILES}/me320.jpg 320w, 
            ${process.env.REACT_APP_FILES}/me640.jpg 640w, 
            ${process.env.REACT_APP_FILES}/me1280.jpg 1280w`}
            src={`${process.env.REACT_APP_FILES}/me.jpg`}
            alt="Me"
          />
        </picture>
        <blockquote className={styles.intro__text}>
          I am inspired by different patterns of industrial design.
          However, the better thing is an opportunity to animate them,
          to provide an ability to interact with them.
          At this moment, I feel that I have really created something new.
        </blockquote>
      </section>
    </article>
  );
}

export function AboutOrNot() {
  const params = useParams();
  if (params.please === process.env.REACT_APP_PLEASE) {
    return <About />;
  }
  return (<NotFound />);
}

function Main() {
  return (
    <main className={styles.main}>
      <Outlet />
    </main>
  );
}

export default Main;
