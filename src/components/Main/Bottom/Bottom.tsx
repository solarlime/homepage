import { useContext } from 'react';
import { useMatch } from 'react-router-dom';
import styles from './Bottom.module.sass';
import { ThemeContext } from '../../../redux/Theme';
import { ExtendedCSS } from '../../types';

function Bottom(props: { content: {
  text1: string, text2: string, text3: string, button: string,
}, bgColor: string }) {
  const { theme } = useContext(ThemeContext);
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
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
          >
            {button}
          </button>
        )
}
    </div>
  );
}

export default Bottom;
