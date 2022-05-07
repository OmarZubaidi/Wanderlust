import React from 'react';
import styles from '../../styles/Navbar.module.css';

export const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar_container}>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>Wanderlust</h1>
        <div>
          <button className={'login_button button'}>Login</button>
          <button className={'button signup_button'}>Register</button>
        </div>
      </nav>
    </div>
  );
};
