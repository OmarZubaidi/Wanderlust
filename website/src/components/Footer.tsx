import React from 'react';
import styles from '../../styles/Footer.module.css';
import { logged } from '../../mockAuth';

export const Footer: React.FC = () => {
  let footerPosition = logged ? 'footerPosition' : undefined;

  return (
    <footer className={styles.footer + ' ' + footerPosition}>
      <h2 className={styles.footer_title}>Wanderlust ©2022</h2>
      <ul className={styles.footer_links}>
        <li>
          <a href='#' className={styles.footer_link}>
            Data policy
          </a>
        </li>
        <li>
          <a href='#' className={styles.footer_link}>
            Imprint
          </a>
        </li>
        <li>
          <a href='#' className={styles.footer_link}>
            AGB
          </a>
        </li>
      </ul>
    </footer>
  );
};
