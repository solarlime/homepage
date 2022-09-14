import React, { useState, useEffect, useContext } from 'react';
import { createApi } from 'unsplash-js';
import type { ApiResponse } from 'unsplash-js/dist/helpers/response';
import type { Random } from 'unsplash-js/dist/methods/photos/types';
import lime from '../../../img/lime.jpg';
import styles from './NotFound.module.sass';
import { ThemeContext } from '../../../Theme';
import { LanguageContext } from '../../../Language';
import { getContent, PageComponent } from '../../Content/getContent';

/**
 * A component for a 404 page. Uses Unsplash API for random images
 * Each state contains information: a source link,
 * a photographer's name, a link to him, a link to a photo on Unsplash.
 * Each image is cropped
 * @constructor
 */
function NotFound() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  // @ts-ignore
  const unsplash = createApi({
    accessKey: process.env.REACT_APP_UNSPLASH,
  });

  const init = <div>Loading</div>;
  let trigger = true;

  const [content, setContent] = useState({} as PageComponent);
  const [photo, setPhoto] = useState({
    image: init, author: '', userLink: '', photoLink: '',
  });

  useEffect(() => {
    getContent(language, 'notFound')
      .then((res) => { setContent(res); });
  });

  useEffect(() => {
    const getImage = async (utm: string) => {
      const result = await unsplash.photos.getRandom({ collectionIds: ['228275'], orientation: 'portrait' }) as ApiResponse<Random>;
      if (result.response) {
        setPhoto({
          image: <img
            style={{ backgroundImage: `url("${result.response.urls.thumb}")` }}
            sizes="100w"
            srcSet={`${result.response.urls.raw}&w=320&crop=entropy&fit=clip 320w,
            ${result.response.urls.raw}&w=640&crop=entropy&fit=clip 640w,
            ${result.response.urls.raw}&w=1280&crop=entropy&fit=clip 1280w`}
            src={`${result.response.urls.raw}&w=1400&crop=entropy&fit=clip`}
            alt={(result.response.alt_description) ? result.response.alt_description : 'must be nature'}
          />,
          author: `${result.response.user.first_name} ${result.response.user.last_name}`,
          userLink: `${result.response.user.links.html}${utm}`,
          photoLink: `${result.response.links.html}${utm}`,
        });
      }
    };

    if ((photo.image === init) && trigger) {
      const utm = '?utm_source=Homepage&utm_medium=referral';
      getImage(utm)
        .catch((error) => {
          console.log(error.message);
          // Fallback image
          setPhoto({
            image: <img src={lime} alt="lime" />,
            author: 'Victor Figueroa',
            userLink: `https://unsplash.com/@vfigueroa${utm}`,
            photoLink: `https://unsplash.com/photos/huUI0y0ERMM${utm}`,
          });
        });
      trigger = false;
    }
  }, [photo.image]);

  return (
    <article
      className={styles.base}
      style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
    >
      <section className={`${styles.base__item} ${styles['not-found']}`}>
        <div className={`${styles['not-found__item']} ${styles.content}`}>
          <h1 className={`${styles.base__item__title} ${styles.content__item} ${styles.content__item_header}`}>404</h1>
          <p className={`${styles.content__item} ${styles.content__item_text}`}>
            {content.subtitle_1}
            <span>{content.subtitle_2}</span>
          </p>
          <p className={`${styles.content__item} ${styles.content__item_figcaption}`}>
            {content.caption_1}
            {' '}
            <a href={photo.userLink} target="_blank" rel="noreferrer">{photo.author}</a>
            {(language === 'ru') ? '' : ' '}
            {content.caption_2}
            {' '}
            <a href={photo.photoLink} target="_blank" rel="noreferrer">Unsplash</a>
            .
          </p>
        </div>
        <picture className={`${styles['not-found__item']} ${styles['not-found__item_image']}`}>
          {photo.image}
        </picture>
      </section>
    </article>
  );
}

export default NotFound;
