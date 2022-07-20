import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.sass';
import { ThemeContext } from '../../Theme';

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={styles.footer}
      style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
    >
      <div>
        <button className={`${styles.button} ${styles.footer__item}`} type="button">Menu</button>
        <nav className={styles.footer__item}>
          <Link className={`${styles.button} ${styles['button-link']} ${styles.navigation__item}`} to="/">Main</Link>
          <Link className={`${styles.button} ${styles['button-link']} ${styles.navigation__item}`} to="/projects">Projects</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
