import React, { useContext } from 'react';
import styles from './About.module.sass';
import { ThemeContext } from '../../../Theme';

function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <article
      className={styles.about}
      style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
    >
      <section id="me" className={`${styles.about__whoami} ${styles.about__item}`}>
        <h1 className={styles.whoami__title}>
          <p className={styles.about_title}>
            Hi!
          </p>
          <p className={styles.whoami__title_subtitle}>{`I am ${process.env.REACT_APP_ME}`}</p>
        </h1>
        <picture className={styles.whoami__image}>
          <img
            sizes="100w"
            srcSet={`${process.env.REACT_APP_FILES}/me320.jpg 320w, 
            ${process.env.REACT_APP_FILES}/me640.jpg 640w, 
            ${process.env.REACT_APP_FILES}/me1280.jpg 1280w`}
            src={`${process.env.REACT_APP_FILES}/me.jpg`}
            alt="Me"
          />
        </picture>
        <blockquote className={styles.whoami__text}>
          I am inspired by different patterns of industrial design.
          However, the better thing is an opportunity to animate them,
          to provide an ability to interact with them.
          At this moment, I feel that I have really created something new.
        </blockquote>
      </section>
      <section id="skills" className={`${styles.about__skills} ${styles.about__item}`}>
        <h1 className={styles.about_title}>Skills</h1>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Sass</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>React Router</li>
          <li>Redux (+ Thunk)</li>
          <li>MongoDB</li>
          <li>NodeJS</li>
          <li>Koa</li>
        </ul>
      </section>
      <section id="projects" className={`${styles.about__projects} ${styles.about__item}`}>
        <h1 className={styles.about_title}>Projects</h1>
        <div className={styles.projects__container}>
          <img
            className={styles.container__item}
            sizes="100w"
            srcSet={`${process.env.REACT_APP_FILES}/projects/like-a-trello320.jpg 320w, 
            ${process.env.REACT_APP_FILES}/projects/like-a-trello640.jpg 640w, 
            ${process.env.REACT_APP_FILES}/projects/like-a-trello1280.jpg 1280w`}
            src={`${process.env.REACT_APP_FILES}/projects/like-a-trello.jpg`}
            alt="Simple Kanban board"
          />
          <img
            className={styles.container__item}
            sizes="100w"
            srcSet={`${process.env.REACT_APP_FILES}/projects/dogs-and-facts320.jpg 320w, 
            ${process.env.REACT_APP_FILES}/projects/dogs-and-facts640.jpg 640w, 
            ${process.env.REACT_APP_FILES}/projects/dogs-and-facts1280.jpg 1280w`}
            src={`${process.env.REACT_APP_FILES}/projects/dogs-and-facts.jpg`}
            alt="Dogs and facts"
          />
          <img
            className={styles.container__item}
            sizes="100w"
            srcSet={`${process.env.REACT_APP_FILES}/projects/simple-chat320.jpg 320w, 
            ${process.env.REACT_APP_FILES}/projects/simple-chat640.jpg 640w, 
            ${process.env.REACT_APP_FILES}/projects/simple-chat1280.jpg 1280w`}
            src={`${process.env.REACT_APP_FILES}/projects/simple-chat.jpg`}
            alt="Simple chat"
          />
          <img
            className={styles.container__item}
            sizes="100w"
            srcSet={`${process.env.REACT_APP_FILES}/projects/chest-of-notes320.jpg 320w, 
            ${process.env.REACT_APP_FILES}/projects/chest-of-notes640.jpg 640w, 
            ${process.env.REACT_APP_FILES}/projects/chest-of-notes1280.jpg 1280w`}
            src={`${process.env.REACT_APP_FILES}/projects/chest-of-notes.jpg`}
            alt="Chest of notes"
          />
          <img
            className={styles.container__item}
            sizes="100w"
            srcSet={`${process.env.REACT_APP_FILES}/projects/help-desk320.jpg 320w, 
            ${process.env.REACT_APP_FILES}/projects/help-desk640.jpg 640w, 
            ${process.env.REACT_APP_FILES}/projects/help-desk1280.jpg 1280w`}
            src={`${process.env.REACT_APP_FILES}/projects/help-desk.jpg`}
            alt="Help desk"
          />
          <img
            className={styles.container__item}
            sizes="100w"
            srcSet={`${process.env.REACT_APP_FILES}/projects/retro-game320.jpg 320w, 
            ${process.env.REACT_APP_FILES}/projects/retro-game640.jpg 640w, 
            ${process.env.REACT_APP_FILES}/projects/retro-game1280.jpg 1280w`}
            src={`${process.env.REACT_APP_FILES}/projects/retro-game.jpg`}
            alt="Retro game"
          />
        </div>
      </section>
    </article>
  );
}

export default About;
