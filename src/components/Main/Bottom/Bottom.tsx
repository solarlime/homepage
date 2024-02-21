import { useMatch } from 'react-router-dom';

import type { ExtendedCSS } from '../../types';

import styles from './Bottom.module.sass';
import { useAppSelector } from '../../../redux/app/hooks';
import { selectTheme } from '../../../redux/themeSlice';

function Bottom(props: { content: {
  text1: string, text2: string, text3: string, button: string,
}, bgColor: string }) {
  const root = document.querySelector('#root')!;
  const theme = useAppSelector(selectTheme);
  const isMain = useMatch('/');
  const {
    content: {
      text1, text2, text3, button,
    },
    bgColor,
  } = props;

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
        <span>{text1}</span>
        {' '}
        <span>{text2}</span>
        {' '}
        <span>{text3}</span>
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
            {button}
          </button>
        )
}
    </div>
  );
}

Bottom.whyDidYouRender = true;

export default Bottom;
