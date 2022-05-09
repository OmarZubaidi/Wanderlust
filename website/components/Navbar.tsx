import React, { useState } from 'react';
import styles from '../styles/Navbar.module.scss';
import { logged } from '../mockAuth';
import Link from 'next/link';

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const show = open ? 'show' : undefined;

  return (
    <div className={styles.navbar_container}>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>
          <Link href={'/'}>
            <a>Wanderlust</a>
          </Link>
        </h1>
        {logged ? (
          <div className='buttons'>
            <div className={`avatar_dropdown ${show}`}>
              <Link href={'/'}>
                <a>Account</a>
              </Link>
              <Link href={'/'}>
                <a id='logout_button'>Logout</a>
              </Link>
            </div>
            <button
              onClick={() => setOpen((prev) => !prev)}
              className='avatar'
            ></button>
          </div>
        ) : (
          <div className='buttons'>
            <button className={'login_button button'}>
              <a href='/api/auth/login'>Login</a>
            </button>
            <button className={'button signup_button'}>
              <a href='/api/auth/signup'>Register</a>
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};
