import React, { useContext } from 'react';
import styles from './Bottom.module.sass';
import { ThemeContext } from '../../context/Theme';
import { ExtendedCSS } from '../types';

function Bottom(props: { content: {
  text1: string, text2: string, text3: string, button: string,
} }): React.ReactElement {
  const { theme } = useContext(ThemeContext);
  const {
    content: {
      text1, text2, text3, button,
    },
  } = props;

  return (
    <div
      className={styles.bottom}
      style={{
        color: theme.backgroundColor,
        backgroundColor: (theme.name === 'dark') ? theme.extraColor : theme.accentColor,
        '--hover-color': theme.color,
        '--hover-bg-color': theme.backgroundColor,
      } as ExtendedCSS}
    >
      <p className={styles.bottom__text}>
        <span>{text1}</span>
        {' '}
        <span>{text2}</span>
        {' '}
        <span>{text3}</span>
      </p>
      <button className={`${styles.button} ${styles.bottom__button}`} type="button" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>{button}</button>
    </div>
  );
}

export default Bottom;
