import React, { useContext, useEffect, useState } from 'react';
import styles from './About.module.sass';
import GitHub from '../../../img/github.svg?react';
import LinkedIn from '../../../img/linkedin.svg?react';
import Email from '../../../img/email.svg?react';
import Telegram from '../../../img/telegram.svg?react';
import { ThemeContext } from '../../../Theme';
import TagCloud from './TagCloud';
import FactsList from './FactsList';
import { LanguageContext } from '../../../Language';
import { getContent, PageComponent } from '../../Content/getContent';

/**
 * A function for counting the age
 */
function getAge(language: 'ru' | 'en') {
  const birthDate = new Date(import.meta.env.VITE_APP_BIRTH_DATE!);
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
 * A component for rendering an about page
 * @constructor
 */
function About(): React.ReactElement {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const sections = ['contacts', 'skills', 'facts'];
  const [content, setContent] = useState({} as PageComponent);
  const age = getAge(language);

  interface ExtendedCSS extends React.CSSProperties {
    '--button-color': string,
    '--hover-color': string,
    '--hover-bg-color': string,
    '--focus-color': string,
  }

  useEffect(() => {
    getContent(language, 'about')
      .then((res) => { setContent(res); });
  }, [language]);

  return (
    <article
      className={`${styles.about}`}
      style={{
        color: theme.color,
        backgroundColor: theme.backgroundColor,
        '--button-color': (theme.name === 'dark') ? theme.extraColor : theme.color,
        '--hover-color': theme.backgroundColor,
        '--hover-bg-color': theme.extraColor,
        '--focus-color': theme.accentColor,
      } as ExtendedCSS}
    >
      <section id={sections[0]} className={`${styles.about__contacts} ${styles.base__item} ${styles.about__item}`}>
        <h1 className={styles.contacts__title}>
          <p className={styles.contacts__title_title}>
            {import.meta.env[`VITE_APP_ME_${language}`]}
          </p>
          <p className={styles.contacts__title_subtitle}>
            {content.subtitle_job}
            ,
          </p>
          <p className={styles.contacts__title_subtitle}>{age}</p>
        </h1>
        <div className={styles.contacts__buttons}>
          <img className={styles.qr} src={`${import.meta.env.VITE_APP_FILES}/qr.svg`} alt="about me" />
          <div>
            <a className={`${styles.button} ${styles['button-link']} ${styles.contacts__buttons__item}`} href={`https://${import.meta.env.VITE_APP_LINK_GITHUB}`} target="_blank" rel="noreferrer" data-url={import.meta.env.VITE_APP_LINK_GITHUB}>
              <GitHub fill={theme.color} />
              <span>github</span>
            </a>
            <a className={`${styles.button} ${styles['button-link']} ${styles.contacts__buttons__item}`} href={`mailto:${import.meta.env.VITE_APP_LINK_MAIL}?subject=Предложение о сотрудничестве`} data-url={import.meta.env.VITE_APP_LINK_MAIL}>
              <Email fill={theme.color} />
              <span>e-mail</span>
            </a>
          </div>
          <div>
            <a className={`${styles.button} ${styles['button-link']} ${styles.contacts__buttons__item}`} href={`https://${import.meta.env.VITE_APP_LINK_LINKEDIN}`} target="_blank" rel="noreferrer" data-url={import.meta.env.VITE_APP_LINK_LINKEDIN}>
              <LinkedIn fill={theme.color} />
              <span>linkedin</span>
            </a>
            <a className={`${styles.button} ${styles['button-link']} ${styles.contacts__buttons__item}`} href={`https://${import.meta.env.VITE_APP_LINK_TELEGRAM}`} target="_blank" rel="noreferrer" data-url={import.meta.env.VITE_APP_LINK_TELEGRAM}>
              <Telegram fill={theme.color} />
              <span>telegram</span>
            </a>
          </div>
        </div>
        <picture className={styles.contacts__image}>
          <source srcSet={`${import.meta.env.VITE_APP_FILES}/me320.jpg 1x, ${import.meta.env.VITE_APP_FILES}/me640.jpg 2x`} media="(min-width: 320px)" />
          <source srcSet={`${import.meta.env.VITE_APP_FILES}/me640.jpg 1x, ${import.meta.env.VITE_APP_FILES}/me1280.jpg 2x`} media="(min-width: 640px)" />
          <img src={`${import.meta.env.VITE_APP_FILES}/me1280.jpg`} alt="Me" />
        </picture>
      </section>
      <section id={sections[1]} className={`${styles.about__skills} ${styles.base__item} ${styles.about__item}`}>
        <h1 className={styles.base__item__title}>{content.skills_title}</h1>
        <TagCloud themeName={theme.name} />
      </section>
      <section id={sections[2]} className={`${styles['about-me']} ${styles.base__item} ${styles.about__item}`}>
        <h1 className={styles.base__item__title}>{content.about_title}</h1>
        <FactsList />
      </section>
    </article>
  );
}

export default About;
