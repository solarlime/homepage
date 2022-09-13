import React, { useContext, useEffect, useState } from 'react';
import styles from './About.module.sass';
import { ReactComponent as GitHub } from '../../../img/github.svg';
import { ReactComponent as LinkedIn } from '../../../img/linkedin.svg';
import { ReactComponent as Email } from '../../../img/email.svg';
import { ReactComponent as Telegram } from '../../../img/telegram.svg';
import { ThemeContext } from '../../../Theme';
import TagCloud from './TagCloud';
import FactsList from './FactsList';
import { LanguageContext } from '../../../Language';
import { getContent, PageComponent } from '../../Content/getContent';

/**
 * A function for counting the age
 */
function getAge(language: 'ru' | 'en') {
  const birthDate = new Date(process.env.REACT_APP_BIRTH_DATE!);
  const date = Date.now();
  const dif = new Date(date - birthDate.getTime());
  const age = (dif.getFullYear() - 1970).toString();
  if (language === 'ru') {
    if (age.endsWith('1')) {
      return `${age} год`;
    }
    if (age.endsWith('2') || age.endsWith('3') || age.endsWith('4')) {
      return `${age} года`;
    }
    return `${age} лет`;
  }
  return `${age} years old`;
}

/**
 * A component for a navigation button
 * @param props - color: a colour for a text,
 *                bgColor: a colour for a background,
 *                sections: an array with section ids
 * @constructor
 */
function NavigationButton(props: {
  color: string, bgColor: string, sections: Array<string>, toTop: string, toNext: string
}) {
  const [index, setIndex] = useState(0);
  const {
    color, bgColor, sections, toTop, toNext,
  } = props;

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
      {(index === 2) ? toTop : toNext}
    </button>
  );
}

/**
 * A component for rendering an about page
 * @constructor
 */
function About() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const sections = ['contacts', 'skills', 'facts'];
  const [content, setContent] = useState({} as PageComponent);
  const age = getAge(language);

  useEffect(() => {
    getContent(language, 'about')
      .then((res) => { setContent(res); });
  });

  return (
    <article
      className={`${styles.about} ${styles.base}`}
      style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
    >
      <section id={sections[0]} className={`${styles.about__contacts} ${styles.base__item} ${styles.about__item}`}>
        <h1 className={styles.contacts__title}>
          <p className={`${styles.base__item__title} ${styles.contacts__title_title}`}>
            {process.env[`REACT_APP_ME_${language}`]}
          </p>
          <p className={styles.contacts__title_subtitle}>
            {content.subtitle_job}
            ,
          </p>
          <p className={styles.contacts__title_subtitle}>{age}</p>
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
        <h1 className={styles.base__item__title}>{content.skills_title}</h1>
        <TagCloud themeName={theme.name} />
      </section>
      <section id={sections[2]} className={`${styles['about-me']} ${styles.base__item} ${styles.about__item}`}>
        <h1 className={styles.base__item__title}>{content.about_title}</h1>
        <FactsList />
      </section>
      <div className={styles['about-buttons']}>
        <NavigationButton
          color={theme.color}
          bgColor={theme.backgroundColor}
          sections={sections}
          toTop={content.nav_button_top}
          toNext={content.nav_button_next}
        />
        <button
          style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
          className={`${styles.button}`}
          type="button"
          onClick={window.print}
        >
          {content.print_button}
        </button>
      </div>
    </article>
  );
}

export default About;
