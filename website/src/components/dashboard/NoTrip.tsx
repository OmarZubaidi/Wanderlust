import React from 'react';
import styles from '../../../styles/dashboard/noTrip.module.css';

export const NoTrip: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className='titleH2'>No trips yet</h2>
      <div>Click this button to create your first trip</div>
      <button className={styles.add_trip}></button>
    </div>
  );
};
