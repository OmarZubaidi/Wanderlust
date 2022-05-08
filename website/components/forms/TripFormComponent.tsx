import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FormEvent } from 'react';
import styles from '../../styles/forms/tripForm.module.css';

export const TripFormComponent: React.FC = () => {
  const router = useRouter();

  const goToFriendsForm = (event: FormEvent) => {
    event.preventDefault();
    router.push('/trip/friends');
  };

  return (
    <section className={styles.tripForm}>
      <h2 className={'titleH2 ' + styles.title}>Plan your trip</h2>
      <form onSubmit={goToFriendsForm}>
        <div className={styles.input_row}>
          <div className={styles.input}>
            <label htmlFor='departure'>Departure</label>
            <input className={styles.input_field} id='departure' type='text' />
          </div>
          <div className={styles.input}>
            <label htmlFor='return'>Return</label>
            <input className={styles.input_field} id='return' type='text' />
          </div>
        </div>
        <div className={styles.input_row}>
          <div className={styles.input}>
            <label htmlFor='destination'>Travel destination</label>
            <input
              className={styles.input_field}
              id='destination'
              type='text'
            />
          </div>
          <div className={styles.button}>
            <input
              type='submit'
              className={'button ' + styles.continue}
              value='Continue'
            />
          </div>
        </div>
      </form>
    </section>
  );
};
