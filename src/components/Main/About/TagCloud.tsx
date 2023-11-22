import React, { useMemo } from 'react';
import uniqid from 'uniqid';
import tags from '../../Content/tagCloud.json';
import styles from './About.module.sass';
import { Theme } from '../../../context/contextTypes';

const id = uniqid;

type T = string | Array<string>;

/**
 * A function for array shuffling.
 * A Fisher–Yates shuffle algorithm (implemented by Durstenfeld) is used.
 * Source: https://javascript.info/task/shuffle
 * @param array - array for shuffling
 */
export const shuffleArray = (array: Array<T>): Array<T> => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    // Выбираем индекс случайным образом (от 0 до i)
    const j = Math.floor(Math.random() * (i + 1));
    // eslint-disable-next-line no-param-reassign
    [array[i], array[j]] = [(array[j] as string), (array[i] as string)];
  }
  return array;
};

/**
 * A component for rendering a tag cloud in random order.
 * @param props - themeName: a theme name (light or dark)
 * @constructor
 */
function TagCloud(props: { theme: Theme }): React.ReactElement {
  const { theme } = props;

  const shuffledTags = useMemo(() => shuffleArray(tags), []);

  return (
    <div className={styles.wrapper}>
      <ul className={styles['tag-cloud']}>
        {shuffledTags.map((item) => (
          <li
            className={styles['tag-cloud__item']}
            key={id()}
            style={{ color: `${(Math.random() < 0.5) ? theme.extraColor : theme.accentColor}` }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TagCloud;
