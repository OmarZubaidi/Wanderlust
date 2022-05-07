import Link from 'next/link';
import React from 'react';
import styles from '../../../styles/dashboard/SideBar.module.css';

export const SideBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.trips_header}>
        <h3 className='titleH3'>Trips</h3>
        <button className={styles.add_trip}></button>
      </div>
      <input type='text' className={styles.trip_search} />
      <ul className={styles.trips}>
        <li>
          <Link href={'/'}>
            <a className={styles.trip}>Fake trip</a>
          </Link>
        </li>
        <li>
          <Link href={'/'}>
            <a className={styles.trip}>Fake trip</a>
          </Link>
        </li>
        <li>
          <Link href={'/'}>
            <a className={styles.trip}>Fake trip</a>
          </Link>
        </li>
        <li>
          <Link href={'/'}>
            <a className={styles.trip}>Fake trip</a>
          </Link>
        </li>
        <li>
          <Link href={'/'}>
            <a className={styles.trip}>Fake trip</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
