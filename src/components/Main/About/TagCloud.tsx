import { useMemo } from 'react';
import uniqid from 'uniqid';
import tags from '../../Content/tagCloud';
import styles from './About.module.sass';

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
function TagCloud(props: { themeName: 'light' | 'dark' }) {
  const { themeName } = props;
  const colors: Array<string> = (themeName === 'dark') ? ['#FFCF48', '#78B856'] : ['#FFBA00', '#78B856'];

  return useMemo(() => (
    <div className={styles.wrapper}>
      <ul className={styles['tag-cloud']}>
        {shuffleArray(tags).map((item) => (
          <li
            className={styles['tag-cloud__item']}
            key={id()}
            style={{ color: `${(Math.random() < 0.5) ? colors[0] : colors[1]}` }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  ), []);
}

export default TagCloud;
