import { memo } from 'react';
import { useMatch } from 'react-router-dom';

import type { ReactElement } from 'react';
import type { ExtendedCSS } from '../../types';

import styles from './Bottom.module.sass';
import { useAppSelector } from '../../../redux/app/hooks';
import { selectTheme } from '../../../redux/theme/themeSlice';

const Bottom = memo((props: { bgColor: string, children: Array<ReactElement> }) => {
  const root = document.querySelector('#root')!;
  const theme = useAppSelector(selectTheme);
  const isMain = useMatch('/');
  const { bgColor, children } = props;

  return (
    <div
      className={styles.bottom}
      style={{
        color: theme.backgroundColor,
        backgroundColor: bgColor,
        '--hover-color': theme.color,
        '--hover-bg-color': theme.backgroundColor,
        '--focus-color': (theme.name === 'dark') ? theme.accentColor : theme.color,
      } as ExtendedCSS}
    >
      <p className={styles.bottom__text}>
        <span>{children[0]}</span>
        {' '}
        <span>{children[1]}</span>
        {' '}
        <span>{children[2]}</span>
      </p>
      {
        (isMain) ? (
          <a
            className={`${styles.button} ${styles.bottom__button}`}
            href={`https://${import.meta.env.VITE_APP_LINK_TELEGRAM}`}
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
        ) : (
          <button
            className={`${styles.button} ${styles.bottom__button}`}
            type="button"
            onClick={() => root.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
          >
            {children[3]}
          </button>
        )
}
    </div>
  );
});

Bottom.whyDidYouRender = true;

export default Bottom;
