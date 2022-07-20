import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import styles from './Main.module.sass';
import NotFound from './NotFound/NotFound';
import About from './About/About';
import Projects from './Projects/Projects';
import Project from './Projects/Project/Project';

function Intro() {
  return (
    <article>
      Introduction
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
        <Route path="/" element={<Intro />}>
          <Route path="projects" element={<Projects />}>
            <Route path="/projects/:project" element={<Project />} />
          </Route>
          <Route path="cv/:please" element={<AboutOrNot />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </main>
  );
}

export default Main;
