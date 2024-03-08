import { memo, useEffect } from 'react';

import styles from './NotFound.module.sass';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { selectTheme } from '../../redux/theme/themeSlice';
import { selectLanguage } from '../../redux/language/languageSlice';
import { ImageState, selectImage, tryToGetImage } from '../../redux/content/imageSlice';
import { useGetContentByComponentQuery } from '../../redux/content/contentSlice';
import SkeletonComponent from '../SkeletonComponent';

const Image = memo((props: { image: ImageState }) => {
  const { image } = props;
  if (image.status === 'succeeded') {
    return (
      <img
        style={{ backgroundImage: `url("${image.photo?.thumb}")` }}
        sizes="(max-width: 320px) 280px, (max-width: 640px) 550px, (max-width: 1280px) 1100px, 1280px"
        srcSet={`${image.photo?.raw}&w=320&crop=entropy&fit=clip 320w,
            ${image.photo?.raw}&auto=format&w=640&crop=entropy&fit=clip 640w,
            ${image.photo?.raw}&auto=format&w=960&crop=entropy&fit=clip 960w,
            ${image.photo?.raw}&auto=format&w=1280&crop=entropy&fit=clip 1280w,
            ${image.photo?.raw}&auto=format&w=1920&crop=entropy&fit=clip 1920w,
            ${image.photo?.raw}&auto=format&w=2560&crop=entropy&fit=clip 2560w`}
        src={`${image.photo?.raw}&w=2560&crop=entropy&fit=clip`}
        alt={(image.photo?.alt_description) ? image.photo?.alt_description : 'must be nature'}
      />
    );
  }
  if (image.status === 'failed') {
    return (
      <img
        style={{ backgroundImage: `url("${image.photo?.thumb}")` }}
        src={image.photo?.raw}
        alt={(image.photo?.alt_description) ? image.photo?.alt_description : 'must be lime'}
      />
    );
  }
  return '';
});

/**
 * A component for a 404 page. Uses Unsplash API for random images
 * Each state contains information: a source link,
 * a photographer's name, a link to him, a link to a photo on Unsplash.
 * Each image is cropped
 * @constructor
 */
const NotFound = memo(() => {
  const theme = useAppSelector(selectTheme);
  const language = useAppSelector(selectLanguage);
  const image = useAppSelector(selectImage);
  const dispatch = useAppDispatch();
  const { data: content, error, isLoading } = useGetContentByComponentQuery({ languageName: language.name, component: 'notFound' });

  useEffect(() => {
    dispatch(tryToGetImage());
  }, []);

  return (
    <article
      className={`${styles.base} ${styles.container}`}
      style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
    >
      <section className={`${styles.base__item} ${styles['not-found-wrapper']}`}>
        <picture className={styles.picture}>
          <Image image={image} />
        </picture>
        <div
          className={styles.filter}
          style={{ backgroundColor: theme.backgroundColor }}
        />
        <div className={styles['not-found']}>
          <h1 className={`${styles.base__item__title}`}>404</h1>
          <p className={styles['not-found__item']}>
            <SkeletonComponent error={error} isLoading={isLoading} content={content?.subtitle_1} />
          </p>
          <p className={styles['not-found__item']}>
            <SkeletonComponent error={error} isLoading={isLoading} content={content?.subtitle_2} />
          </p>
          {
            (image.status === 'pending')
              ? <SkeletonComponent error={error} isLoading={isLoading} content={undefined} />
              : (
                <p className={`${styles['not-found__item']} ${styles['not-found__item_links']}`}>
                  <SkeletonComponent error={error} isLoading={isLoading} content={`${content?.caption_1} `} />
                  <a
                    href={image.photo?.userLink}
                    style={{ color: theme.accentColor }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {image.photo?.author}
                  </a>
                  {(language.name === 'ru') ? '' : ' '}
                  <SkeletonComponent error={error} isLoading={isLoading} content={`${content?.caption_2} `} />
                  <a
                    href={image.photo?.photoLink}
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
});

NotFound.whyDidYouRender = true;

export default NotFound;
