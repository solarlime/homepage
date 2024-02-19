import { useContext, useEffect, useState } from 'react';

import type { ExtendedCSS } from '../../types';

import styles from './About.module.sass';
import TagCloud from './TagCloud';
import FactsList from './FactsList';
import Bottom from '../Bottom/Bottom';
import { LanguageContext } from '../../../redux/Language';
import { getContent, PageComponent } from '../../Content/getContent';
import { useAppSelector } from '../../../redux/app/hooks';
import { selectTheme } from '../../../redux/themeSlice';

import GitHub from '../../../img/github.svg?react';
import LinkedIn from '../../../img/linkedin.svg?react';
import Email from '../../../img/email.svg?react';
import Telegram from '../../../img/telegram.svg?react';

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
function About() {
  const theme = useAppSelector(selectTheme);
  const { language } = useContext(LanguageContext);
  const [content, setContent] = useState({} as PageComponent);
  const age = getAge(language.name);

  useEffect(() => {
    getContent(language, 'about')
      .then((res) => { setContent(res); });
  }, [language]);

  return (
    <article
      className={`${styles.base} ${styles.about}`}
      style={{
        color: theme.color,
        backgroundColor: theme.backgroundColor,
        '--button-color': (theme.name === 'dark') ? theme.extraColor : theme.color,
        '--hover-color': theme.backgroundColor,
        '--hover-bg-color': theme.extraColor,
        '--focus-color': theme.accentColor,
      } as ExtendedCSS}
    >
      <section className={` ${styles.base__item} ${styles.about__contacts}`}>
        <h1 className={styles.contacts__title}>
          <p className={styles.contacts__title_title}>
            {import.meta.env[`VITE_APP_ME_${language.name}`]}
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
            <a className={`${styles.button} ${styles.contacts__buttons__item}`} href={`https://${import.meta.env.VITE_APP_LINK_GITHUB}`} target="_blank" rel="noreferrer" data-url={import.meta.env.VITE_APP_LINK_GITHUB}>
              <GitHub fill={theme.color} />
              <span>github</span>
            </a>
            <a className={`${styles.button} ${styles.contacts__buttons__item}`} href={`mailto:${import.meta.env.VITE_APP_LINK_MAIL}?subject=Предложение о сотрудничестве`} data-url={import.meta.env.VITE_APP_LINK_MAIL}>
              <Email fill={theme.color} />
              <span>e-mail</span>
            </a>
          </div>
          <div>
            <a className={`${styles.button} ${styles.contacts__buttons__item}`} href={`https://${import.meta.env.VITE_APP_LINK_LINKEDIN}`} target="_blank" rel="noreferrer" data-url={import.meta.env.VITE_APP_LINK_LINKEDIN}>
              <LinkedIn fill={theme.color} />
              <span>linkedin</span>
            </a>
            <a className={`${styles.button} ${styles.contacts__buttons__item}`} href={`https://${import.meta.env.VITE_APP_LINK_TELEGRAM}`} target="_blank" rel="noreferrer" data-url={import.meta.env.VITE_APP_LINK_TELEGRAM}>
              <Telegram fill={theme.color} />
              <span>telegram</span>
            </a>
          </div>
        </div>
        <picture className={styles.contacts__image}>
          <source
            srcSet={`${import.meta.env.VITE_APP_FILES}/me320.jpg 320w, ${import.meta.env.VITE_APP_FILES}/me640.jpg 640w, ${import.meta.env.VITE_APP_FILES}/me1280.jpg 1280w`}
            sizes="(max-width: 899px) 250px, (max-width: 1280px) 500px, 1000px"
          />
          <img src={`${import.meta.env.VITE_APP_FILES}/me.jpg`} alt="Me" />
        </picture>
      </section>
      <section className={`${styles.base__item} ${styles.about__skills}`}>
        <h1 className={styles.base__item__title}>{content.skills_title}</h1>
        <TagCloud />
      </section>
      <section className={`${styles.base__item} ${styles['about-me']}`}>
        <h1 className={styles.base__item__title}>{content.about_title}</h1>
        <FactsList />
      </section>
      <section className={`${styles.base__item}`}>
        <Bottom
          content={{
            text1: content.bottom_text_1,
            text2: content.bottom_text_2,
            text3: content.bottom_text_3,
            button: content.bottom_button,
          }}
          bgColor={(theme.name === 'dark') ? theme.extraColor : theme.accentColor}
        />
      </section>
    </article>
  );
}

export default About;
