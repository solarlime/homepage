import { memo, useMemo } from 'react';
import uniqid from 'uniqid';

import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { SerializedError } from '@reduxjs/toolkit';

import tags from '../../content/tagCloud.json';
import styles from './About.module.sass';
import { useAppSelector } from '../../redux/app/hooks';
import { selectTheme } from '../../redux/theme/themeSlice';
import SkeletonComponent from '../SkeletonComponent';

const id = uniqid;

/**
 * A function for array shuffling.
 * A Fisher–Yates shuffle algorithm (implemented by Durstenfeld) is used.
 * Source: https://javascript.info/task/shuffle
 * @param array - array for shuffling
 */
export const shuffleArray = <T extends Array<string> | Array<number>>(array: T): T => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    // Выбираем индекс случайным образом (от 0 до i)
    const j = Math.floor(Math.random() * (i + 1));
    // eslint-disable-next-line no-param-reassign
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const randomArray = (length: number) => [...Array(length)].map(() => Math.random());

/**
 * A component for rendering a tag cloud in random order.
 * @constructor
 */
const TagCloud = memo((props: {
  isLoading: boolean, error: FetchBaseQueryError | SerializedError | undefined,
}) => {
  const { isLoading, error } = props;
  const theme = useAppSelector(selectTheme);

  const shuffledTags = useMemo(() => shuffleArray(tags), []);
  const colorsRandom = useMemo(() => randomArray(tags.length), []);

  if (isLoading || error) {
    return (
      <div className={styles.wrapper}>
        <ul className={styles['tag-cloud']}>
          {
            Array(5).fill('*').map(() => (
              <li className={styles['tag-cloud__item']} key={id()}>
                <SkeletonComponent error={error} isLoading={isLoading} content={undefined} />
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
  return (
    <div className={styles.wrapper}>
      <ul className={styles['tag-cloud']}>
        {shuffledTags.map((item, i) => (
          <li
            className={styles['tag-cloud__item']}
            key={id()}
            style={{ color: `${(colorsRandom[i] < 0.5) ? theme.extraColor : theme.accentColor}` }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

TagCloud.whyDidYouRender = true;

export default TagCloud;
