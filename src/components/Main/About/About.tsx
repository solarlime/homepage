import React, { useContext, useEffect, useState } from 'react';
import styles from './About.module.sass';
import { ReactComponent as GitHub } from '../../../img/github.svg';
import { ReactComponent as LinkedIn } from '../../../img/linkedin.svg';
import { ReactComponent as Email } from '../../../img/email.svg';
import { ReactComponent as Telegram } from '../../../img/telegram.svg';
import { ThemeContext } from '../../../Theme';
import TagCloud from './TagCloud';

function getAge() {
  const birthDate = new Date(process.env.REACT_APP_BIRTH_DATE!);
  const date = Date.now();
  const dif = new Date(date - birthDate.getTime());
  return dif.getFullYear() - 1970;
}

function About() {
  const { theme } = useContext(ThemeContext);

  const sections = ['contacts', 'skills', 'facts'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const next = document.getElementById(sections[index])!;
    next.scrollIntoView();
  });

  const click = () => setIndex((index + 1) % 3);

  return (
    <article
      className={`${styles.about} ${styles.base}`}
      style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
    >
      <section id={sections[0]} className={`${styles.about__contacts} ${styles.base__item} ${styles.about__item}`}>
        <h1 className={styles.contacts__title}>
          <p className={`${styles.base__item__title} ${styles.contacts__title_title}`}>
            {process.env.REACT_APP_ME}
          </p>
          <p className={styles.contacts__title_subtitle}>Frontend developer,</p>
          <p className={styles.contacts__title_subtitle}>{`${getAge()} years`}</p>
        </h1>
        <picture className={styles.contacts__image}>
          <img
            sizes="100w"
            srcSet={`${process.env.REACT_APP_FILES}/me320.jpg 320w, 
            ${process.env.REACT_APP_FILES}/me640.jpg 640w, 
            ${process.env.REACT_APP_FILES}/me1280.jpg 1280w`}
            src={`${process.env.REACT_APP_FILES}/me.jpg`}
            alt="Me"
          />
        </picture>
        <div className={styles.contacts__buttons}>
          <a className={`${styles.button} ${styles['button-link']} ${styles.contacts__buttons__item}`} href={`https://${process.env.REACT_APP_LINK_GITHUB}`} target="_blank" rel="noreferrer">
            <GitHub fill={theme.color} />
          </a>
          <a className={`${styles.button} ${styles['button-link']} ${styles.contacts__buttons__item}`} href={`https://${process.env.REACT_APP_LINK_LINKEDIN}`} target="_blank" rel="noreferrer">
            <LinkedIn fill={theme.color} />
          </a>
          <a className={`${styles.button} ${styles['button-link']} ${styles.contacts__buttons__item}`} href={`https://${process.env.REACT_APP_LINK_TELEGRAM}`} target="_blank" rel="noreferrer">
            <Telegram fill={theme.color} />
          </a>
          <a className={`${styles.button} ${styles['button-link']} ${styles.contacts__buttons__item}`} href={`mailto:${process.env.REACT_APP_LINK_MAIL}?subject=Предложение о сотрудничестве`}>
            <Email fill={theme.color} />
          </a>
        </div>
      </section>
      <section id={sections[1]} className={`${styles.about__skills} ${styles.base__item} ${styles.about__item}`}>
        <h1 className={styles.base__item__title}>Skills</h1>
        <TagCloud themeName={theme.name} />
      </section>
      <section id={sections[2]} className={`${styles.about__projects} ${styles.base__item} ${styles.about__item}`}>
        <h1 className={styles.base__item__title}>Projects</h1>
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
      <button
        className={`${styles.button} ${styles['navigation-button']}`}
        style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
        type="button"
        onClick={click}
      >
        {(index === 2) ? 'To top' : 'Next'}
      </button>
    </article>
  );
}

export default About;
