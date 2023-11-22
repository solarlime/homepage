import React, { useState, useEffect, useContext } from 'react';
import { createApi } from 'unsplash-js';
import type { ApiResponse } from 'unsplash-js/dist/helpers/response';
import type { Random } from 'unsplash-js/dist/methods/photos/types';
import lime from '../../../img/lime.jpg';
import styles from './NotFound.module.sass';
import { ThemeContext } from '../../../context/Theme';
import { LanguageContext } from '../../../context/Language';
import { getContent, PageComponent } from '../../Content/getContent';

interface Photo {
  image: React.ReactElement | undefined,
  author: string,
  userLink: string,
  photoLink: string,
}

interface Page {
  photo: Photo
  content: PageComponent
}

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
    accessKey: import.meta.env.VITE_APP_UNSPLASH,
  });

  const utm = '?utm_source=Homepage&utm_medium=referral';
  const loading = (language.name === 'ru') ? 'Идёт загрузка. Пожалуйста, подождите.' : 'Loading, please wait.';

  const init: Page = {
    photo: {
      image: undefined,
      author: '',
      userLink: '',
      photoLink: '',
    },
    content: {} as PageComponent,
  };

  const [page, setPage] = useState(init);

  useEffect(() => {
    const getImage = async (res: Page) => {
      if (!res.photo.image) {
        const result = await Promise.any([
          unsplash.photos.getRandom({ collectionIds: ['228275'], orientation: 'portrait' }),
          new Promise((resolve) => { setTimeout(() => resolve({}), 1000); }),
        ]) as ApiResponse<Random>;
        if (result.response) {
          res.photo = {
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
          };
        } else {
          res.photo = {
            image: <img src={lime} alt="lime" />,
            author: 'Victor Figueroa',
            userLink: `https://unsplash.com/@vfigueroa${utm}`,
            photoLink: `https://unsplash.com/photos/huUI0y0ERMM${utm}`,
          };
        }
      }
      setPage(res);
    };

    getContent(language, 'notFound')
      .then((res) => ({
        photo: page.photo,
        content: res,
      }))
      .then((res) => getImage(res))
      .catch((error) => {
        console.log(error.message);
      });
  }, [language]);

  return (
    <article
      className={styles.base}
      style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
    >
      <section className={`${styles.base__item} ${styles['not-found']}`}>
        <div className={`${styles['not-found__item']} ${styles.content}`}>
          <h1 className={`${styles.base__item__title} ${styles.content__item} ${styles.content__item_header}`}>404</h1>
          <p className={`${styles.content__item} ${styles.content__item_text}`}>
            {
              (!page.photo.image)
                ? <span className={styles.loading}>{loading}</span>
                : (
                  <>
                    {page.content.subtitle_1}
                    <span>{page.content.subtitle_2}</span>
                  </>
                )
            }
          </p>
          <p className={`${styles.content__item} ${styles.content__item_figcaption}`}>
            {
              (!page.photo.image)
                ? <span className={styles.loading}>{loading}</span>
                : (
                  <>
                    {page.content.caption_1}
                    {' '}
                    <a href={page.photo.userLink} target="_blank" rel="noreferrer">{page.photo.author}</a>
                    {(language.name === 'ru') ? '' : ' '}
                    {page.content.caption_2}
                    {' '}
                    <a href={page.photo.photoLink} target="_blank" rel="noreferrer">Unsplash</a>
                    .
                  </>
                )
            }
          </p>
        </div>
        <picture className={`${styles['not-found__item']} ${styles['not-found__item_image']}`}>
          {
            (!page.photo.image) ? <div className={styles.loading}>{loading}</div> : page.photo.image
          }
        </picture>
      </section>
    </article>
  );
}

export default NotFound;
