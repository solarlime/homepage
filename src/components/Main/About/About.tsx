import React, { useContext, useEffect, useState } from 'react';
import styles from './About.module.sass';
import { ReactComponent as GitHub } from '../../../img/github.svg';
import { ReactComponent as LinkedIn } from '../../../img/linkedin.svg';
import { ReactComponent as Email } from '../../../img/email.svg';
import { ReactComponent as Telegram } from '../../../img/telegram.svg';
import { ThemeContext } from '../../../Theme';
import TagCloud from './TagCloud';
import FactsList from './FactsList';

/**
 * A function for counting the age
 */
function getAge() {
  const birthDate = new Date(process.env.REACT_APP_BIRTH_DATE!);
  const date = Date.now();
  const dif = new Date(date - birthDate.getTime());
  return dif.getFullYear() - 1970;
}

/**
 * A component for a navigation button
 * @param props - color: a colour for a text,
 *                bgColor: a colour for a background,
 *                sections: an array with section ids
 * @constructor
 */
function NavigationButton(props: { color: string, bgColor: string, sections: Array<string> }) {
  const [index, setIndex] = useState(0);
  const { color, bgColor, sections } = props;

  useEffect(() => {
    const next = document.getElementById(sections[index])!;
    next.scrollIntoView();
  }, [index]);

  // It is not needed to reset index after scrolling the whole page. Just take a remainder.
  const click = () => setIndex((index + 1) % sections.length);

  return (
    <button
      className={`${styles.button} ${styles['navigation-button']}`}
      style={{ color, backgroundColor: bgColor }}
      type="button"
      onClick={click}
    >
      {(index === 2) ? 'To top' : 'Next'}
    </button>
  );
}

/**
 * A component for rendering an about page
 * @constructor
 */
function About() {
  const { theme } = useContext(ThemeContext);
  const sections = ['contacts', 'skills', 'facts'];

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
          <img className={styles.qr} src={`${process.env.REACT_APP_FILES}/qr.svg`} alt="about me" />
          <a className={`${styles.button} ${styles['button-link']} ${styles.contacts__buttons__item}`} href={`https://${process.env.REACT_APP_LINK_GITHUB}`} target="_blank" rel="noreferrer" data-url={process.env.REACT_APP_LINK_GITHUB}>
            <GitHub fill={theme.color} />
          </a>
          <a className={`${styles.button} ${styles['button-link']} ${styles.contacts__buttons__item}`} href={`https://${process.env.REACT_APP_LINK_LINKEDIN}`} target="_blank" rel="noreferrer" data-url={process.env.REACT_APP_LINK_LINKEDIN}>
            <LinkedIn fill={theme.color} />
          </a>
          <a className={`${styles.button} ${styles['button-link']} ${styles.contacts__buttons__item}`} href={`https://${process.env.REACT_APP_LINK_TELEGRAM}`} target="_blank" rel="noreferrer" data-url={process.env.REACT_APP_LINK_TELEGRAM}>
            <Telegram fill={theme.color} />
          </a>
          <a className={`${styles.button} ${styles['button-link']} ${styles.contacts__buttons__item}`} href={`mailto:${process.env.REACT_APP_LINK_MAIL}?subject=Предложение о сотрудничестве`} data-url={process.env.REACT_APP_LINK_MAIL}>
            <Email fill={theme.color} />
          </a>
        </div>
      </section>
      <section id={sections[1]} className={`${styles.about__skills} ${styles.base__item} ${styles.about__item}`}>
        <h1 className={styles.base__item__title}>Skills</h1>
        <TagCloud themeName={theme.name} />
      </section>
      <section id={sections[2]} className={`${styles['about-me']} ${styles.base__item} ${styles.about__item}`}>
        <h1 className={styles.base__item__title}>About me</h1>
        <FactsList />
      </section>
      <NavigationButton color={theme.color} bgColor={theme.backgroundColor} sections={sections} />
    </article>
  );
}

export default About;
