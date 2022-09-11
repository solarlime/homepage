import React, { useContext, useEffect, useState } from 'react';
import styles from './Projects.module.sass';
import { ThemeContext } from '../../../Theme';
import { getContent, PageComponent } from '../../Content/getContent';
import { LanguageContext } from '../../../Language';

function Projects() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [content, setContent] = useState({} as PageComponent);

  useEffect(() => {
    getContent(language, 'projects')
      .then((res) => { setContent(res); });
  });

  return (
    <article
      className={styles.base}
      style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
    >
      <section className={`${styles.projects} ${styles.base__item}`}>
        <h1 className={styles.base__item__title}>{content.title}</h1>
        <div className={styles['projects-container']}>
          <img
            className={styles['projects-container__item']}
            sizes="100w"
            srcSet={`${process.env.REACT_APP_FILES}/projects/like-a-trello320.jpg 320w, 
            ${process.env.REACT_APP_FILES}/projects/like-a-trello640.jpg 640w, 
            ${process.env.REACT_APP_FILES}/projects/like-a-trello1280.jpg 1280w`}
            src={`${process.env.REACT_APP_FILES}/projects/like-a-trello.jpg`}
            alt="Simple Kanban board"
          />
          <img
            className={styles['projects-container__item']}
            sizes="100w"
            srcSet={`${process.env.REACT_APP_FILES}/projects/dogs-and-facts320.jpg 320w, 
            ${process.env.REACT_APP_FILES}/projects/dogs-and-facts640.jpg 640w, 
            ${process.env.REACT_APP_FILES}/projects/dogs-and-facts1280.jpg 1280w`}
            src={`${process.env.REACT_APP_FILES}/projects/dogs-and-facts.jpg`}
            alt="Dogs and facts"
          />
          <img
            className={styles['projects-container__item']}
            sizes="100w"
            srcSet={`${process.env.REACT_APP_FILES}/projects/simple-chat320.jpg 320w, 
            ${process.env.REACT_APP_FILES}/projects/simple-chat640.jpg 640w, 
            ${process.env.REACT_APP_FILES}/projects/simple-chat1280.jpg 1280w`}
            src={`${process.env.REACT_APP_FILES}/projects/simple-chat.jpg`}
            alt="Simple chat"
          />
          <img
            className={styles['projects-container__item']}
            sizes="100w"
            srcSet={`${process.env.REACT_APP_FILES}/projects/chest-of-notes320.jpg 320w, 
            ${process.env.REACT_APP_FILES}/projects/chest-of-notes640.jpg 640w, 
            ${process.env.REACT_APP_FILES}/projects/chest-of-notes1280.jpg 1280w`}
            src={`${process.env.REACT_APP_FILES}/projects/chest-of-notes.jpg`}
            alt="Chest of notes"
          />
          <img
            className={styles['projects-container__item']}
            sizes="100w"
            srcSet={`${process.env.REACT_APP_FILES}/projects/help-desk320.jpg 320w, 
            ${process.env.REACT_APP_FILES}/projects/help-desk640.jpg 640w, 
            ${process.env.REACT_APP_FILES}/projects/help-desk1280.jpg 1280w`}
            src={`${process.env.REACT_APP_FILES}/projects/help-desk.jpg`}
            alt="Help desk"
          />
          <img
            className={styles['projects-container__item']}
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

export default Projects;
