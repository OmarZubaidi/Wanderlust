import React from 'react';
import styles from '../../styles/Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.footer_title}>Wanderlust</h2>
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
