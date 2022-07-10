import React, { useContext } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import styles from './Main.module.sass';
import { ThemeContext } from '../../Theme';
import NotFound from './NotFound';

function Projects() {
  return (
    <article className={styles.main__title}>
      Projects
    </article>
  );
}

function About() {
  const params = useParams();
  if (params.please === process.env.REACT_APP_PLEASE) {
    return (
      <article className={styles.main__title}>
        About
      </article>
    );
  }
  return (<NotFound />);
}

function Main() {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={styles.main}
      style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
    >
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/cv/:please" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default Main;
