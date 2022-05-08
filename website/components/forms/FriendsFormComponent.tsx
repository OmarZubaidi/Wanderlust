import Link from 'next/link';
import React from 'react';
import styles from '../../styles/forms/friendsForm.module.css';

export const FriendsFormComponent: React.FC = () => {
  return (
    <section className={styles.friendsForm}>
      <Link href='/trip'>
        <a>
          <img className={styles.goBack} src='/assets/arrow.svg' alt='' />
        </a>
      </Link>
      <div className={styles.left}>
        <h2 className={'titleH2 ' + styles.title}>Add your friends</h2>
        <form>
          <div className={styles.input}>
            <label htmlFor='friend'>Add your friend by email</label>
            <input type='text' id='firend' className={styles.input_field} />
          </div>
          <p className={styles.submit_description}>
            Create the trip with the current status or continue expanding the
            trip details with flights.
          </p>
          <div className={styles.submit}>
            <input
              type='submit'
              value='Finalize'
              className={'button ' + styles.finalize}
            />
            <button type='submit' className={styles.continue}>
              Continue to Flights
              <div className={styles.arrow}></div>
            </button>
          </div>
        </form>
      </div>
      <div className={styles.right}>
        <h4 className={styles.friends_title}>Added friends</h4>
        <ul className={styles.userList}>
          <li className={styles.user}>
            <div className={styles.avatar}></div>Daniele
          </li>
          <li className={styles.user}>
            <div className={styles.avatar}></div>Gabriele
          </li>
          <li className={styles.user}>
            <div className={styles.avatar}></div>Omar
          </li>
          <li className={styles.user}>
            <div className={styles.avatar}></div>Stefan
          </li>
        </ul>
      </div>
    </section>
  );
};
