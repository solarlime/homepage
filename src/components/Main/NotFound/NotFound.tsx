import { useState, useEffect } from 'react';
import { createApi } from 'unsplash-js';

import type { ReactElement } from 'react';

import type { ApiResponse } from 'unsplash-js/dist/helpers/response';
import type { Random } from 'unsplash-js/dist/methods/photos/types';
import styles from './NotFound.module.sass';
import { getContent, PageComponent } from '../../Content/getContent';
import { useAppSelector } from '../../../redux/app/hooks';
import { selectTheme } from '../../../redux/themeSlice';
import { selectLanguage } from '../../../redux/languageSlice';

import lime from '../../../img/lime.jpg';

interface Photo {
  image: ReactElement | undefined,
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
  const theme = useAppSelector(selectTheme);
  const language = useAppSelector(selectLanguage);

  // @ts-ignore
  const unsplash = createApi({
    accessKey: import.meta.env.VITE_APP_UNSPLASH,
  });

  const utm = '?utm_source=Homepage&utm_medium=referral';

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
          unsplash.photos.getRandom({ collectionIds: ['228275'], orientation: 'landscape' }),
          new Promise((resolve) => { setTimeout(() => resolve({}), 1000); }),
        ]) as ApiResponse<Random>;
        if (result.response) {
          res.photo = {
            image: <img
              style={{ backgroundImage: `url("${result.response.urls.thumb}")` }}
              sizes="(max-width: 320px) 280px, (max-width: 640px) 550px, (max-width: 1280px) 1100px, 1280px"
              srcSet={`${result.response.urls.raw}&w=320&crop=entropy&fit=clip 320w,
            ${result.response.urls.raw}&auto=format&w=640&crop=entropy&fit=clip 640w,
            ${result.response.urls.raw}&auto=format&w=960&crop=entropy&fit=clip 960w,
            ${result.response.urls.raw}&auto=format&w=1280&crop=entropy&fit=clip 1280w,
            ${result.response.urls.raw}&auto=format&w=1920&crop=entropy&fit=clip 1920w,
            ${result.response.urls.raw}&auto=format&w=2560&crop=entropy&fit=clip 2560w`}
              src={`${result.response.urls.raw}&w=2560&crop=entropy&fit=clip`}
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
      .then((res) => {
        setPage((previous) => ({ photo: previous.photo, content: res }));
        return {
          photo: page.photo,
          content: res,
        };
      })
      .then((res) => getImage(res))
      .catch((error) => {
        console.log(error.message);
      });
  }, [language]);

  return (
    <article
      className={`${styles.base} ${styles.container}`}
      style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
    >
      <section className={`${styles.base__item} ${styles['not-found-wrapper']}`}>
        <picture className={styles.picture}>
          {page.photo.image}
        </picture>
        <div
          className={styles.filter}
          style={{ backgroundColor: theme.backgroundColor }}
        />
        <div className={styles['not-found']}>
          <h1 className={`${styles.base__item__title}`}>404</h1>
          <p className={styles['not-found__item']}>
            {page.content.subtitle_1}
          </p>
          <p className={styles['not-found__item']}>
            {page.content.subtitle_2}
          </p>
          {
            (page.photo.photoLink === '')
              ? ''
              : (
                <p className={`${styles['not-found__item']} ${styles['not-found__item_links']}`}>
                  {page.content.caption_1}
                  {' '}
                  <a
                    href={page.photo.userLink}
                    style={{ color: theme.accentColor }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {page.photo.author}
                  </a>
                  {(language.name === 'ru') ? '' : ' '}
                  {page.content.caption_2}
                  {' '}
                  <a
                    href={page.photo.photoLink}
                    style={{ color: theme.extraColor }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Unsplash
                  </a>
                  .
                </p>
              )
          }
        </div>
      </section>
    </article>
  );
}

NotFound.whyDidYouRender = true;

export default NotFound;
