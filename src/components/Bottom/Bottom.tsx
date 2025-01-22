import { memo, useState, useEffect } from 'react';
import { useMatch } from 'react-router-dom';

import type { ReactElement } from 'react';
import type { ExtendedCSS } from '../types';

import styles from './Bottom.module.sass';
import { useAppSelector } from '../../redux/app/hooks';
import { selectTheme } from '../../redux/theme/themeSlice';

const Bottom = memo(
  (props: { bgColor: string; children: Array<ReactElement> }) => {
    const theme = useAppSelector(selectTheme);
    const isMain = useMatch('/');
    const { bgColor, children } = props;
    // Tests cannot find root element via simple
    // const root = document.querySelector('#root')!;
    // useState, useEffect & parentElement fix it
    const init: { root: null | Element } = { root: null };
    const [root, setRoot] = useState(init.root);

    useEffect(() => {
      setRoot(document.querySelector('div.app')!.parentElement!);
    });

    return (
      <div
        className={styles.bottom}
        data-testid="bottom"
        style={
          {
            color: theme.backgroundColor,
            backgroundColor: bgColor,
            '--hover-color': theme.color,
            '--hover-bg-color': theme.backgroundColor,
            '--focus-color':
              theme.name === 'dark' ? theme.accentColor : theme.color,
          } as ExtendedCSS
        }
      >
        <p className={styles.bottom__text}>
          <span>{children[0]}</span> <span>{children[1]}</span>{' '}
          <span>{children[2]}</span>
        </p>
        {isMain ? (
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
            onClick={() => {
              if (root) root.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}
          >
            {children[3]}
          </button>
        )}
      </div>
    );
  },
);

Bottom.whyDidYouRender = true;

export default Bottom;
