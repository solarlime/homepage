import React, { useContext } from 'react';
import styles from './Main.module.sass';
import { ThemeContext } from '../../Theme';

function Main() {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={styles.main}
      style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
    >
      <article>
        Side 1
      </article>
      <article>
        Side 2
      </article>
    </main>
  );
}

export default Main;
