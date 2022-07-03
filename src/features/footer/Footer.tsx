import React, { useContext } from 'react';
import styles from './Footer.module.sass';
import { ThemeContext } from '../../Theme';

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={styles.footer}
      style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
    >
      Menu
    </footer>
  );
}

export default Footer;
