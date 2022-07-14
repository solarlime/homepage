import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import styles from './Main.module.sass';
import NotFound from './NotFound';
import About from './About';

function Projects() {
  return (
    <article className={styles.main__title}>
      Projects
    </article>
  );
}

function AboutOrNot() {
  const params = useParams();
  if (params.please === process.env.REACT_APP_PLEASE) {
    return <About />;
  }
  return (<NotFound />);
}

function Main() {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/cv/:please" element={<AboutOrNot />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default Main;
