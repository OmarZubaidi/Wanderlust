import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react';
import styles from '../../styles/forms/tripForm.module.scss';

export const TripFormComponent: React.FC = () => {
  const router = useRouter();
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [destination, setDestination] = useState<string>('');

  const goToFriendsForm = (event: FormEvent) => {
    event.preventDefault();
    const trip = { startDate, endDate, destination };
    if (!startDate || !endDate || !destination) return;
    router.push({ pathname: '/trip/friends', query: trip });
  };

  const handleChange = (input: string, value: string) => {
    switch (input) {
      case 'startDate':
        setStartDate(value);
        break;
      case 'endDate':
        setEndDate(value);
        break;
      case 'destination':
        setDestination(value);
        break;
      default:
        return;
    }
  };

  return (
    <section className={styles.tripForm}>
      <h2 className={'titleH2 ' + styles.title}>Plan your trip</h2>
      <form onSubmit={goToFriendsForm}>
        <div className={styles.input_row}>
          <div className={styles.input}>
            <label htmlFor='departure'>Departure</label>
            <input
              required
              className={styles.input_field}
              id='departure'
              type='date'
              value={startDate}
              onChange={(e) => handleChange('startDate', e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <label htmlFor='return'>Return</label>
            <input
              required
              className={styles.input_field}
              id='return'
              type='date'
              value={endDate}
              onChange={(e) => handleChange('endDate', e.target.value)}
            />
          </div>
        </div>
        <div className={styles.input_row}>
          <div className={styles.input}>
            <label htmlFor='destination'>Travel destination</label>
            <input
              required
              className={styles.input_field}
              id='destination'
              type='text'
              value={destination}
              onChange={(e) => handleChange('destination', e.target.value)}
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
