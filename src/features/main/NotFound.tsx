import React, { useState, useEffect } from 'react';
import { createApi } from 'unsplash-js';
import type { ApiResponse } from 'unsplash-js/dist/helpers/response';
import type { Random } from 'unsplash-js/dist/methods/photos/types';
import lime from '../../img/lime.jpg';
import styles from './NotFound.module.sass';

function NotFound() {
  // @ts-ignore
  const unsplash = createApi({
    accessKey: process.env.REACT_APP_UNSPLASH,
  });

  const init = <div>Loading</div>;
  let trigger = true;

  const [content, setContent] = useState({ image: init, author: '' });
  useEffect(() => {
    const getImage = async () => {
      const result = await unsplash.photos.getRandom({ username: 'davehoefler', orientation: 'portrait' }) as ApiResponse<Random>;
      if (result.response) {
        setContent({
          image: <img src={result.response.urls.regular} alt={(result.response.alt_description) ? result.response.alt_description : 'must be nature'} />,
          author: `A photo by @${result.response.user.username} on Unsplash`,
        });
      }
    };

    if ((content.image === init) && trigger) {
      getImage()
        .catch((error) => {
          console.log(error.message);
          // Fallback image
          setContent({ image: <img src={lime} alt="lime" />, author: 'A photo by @vfigueroa on Unsplash' });
        });
      trigger = false;
    }
  }, [content.image]);

  return (
    <article className={styles['not-found']}>
      <h1 className={`${styles['not-found__item']} ${styles['not-found__item_header']}`}>404</h1>
      <picture className={`${styles['not-found__item']} ${styles['not-found__item_image']}`}>
        {content.image}
      </picture>
      <p className={`${styles['not-found__item']} ${styles['not-found__item_text']}`}>
        The page, you are trying to get, is not found!
        Maybe you have made a mistake in your request.
        <span>Try again or visit the main page.</span>
      </p>
      <p className={`${styles['not-found__item']} ${styles['not-found__item_figcaption']}`}>{content.author}</p>
    </article>
  );
}

export default NotFound;
