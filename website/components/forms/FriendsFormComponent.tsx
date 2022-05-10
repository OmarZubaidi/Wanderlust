import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
  createTrip,
  createUsersOnTrips,
  getUserByEmail,
} from '../../services/dbService';
import { User } from '../../types/user.type';
import styles from '../../styles/forms/friendsForm.module.scss';
import {
  cacheAddedFriends,
  CacheTrip,
  cacheTrip,
  deleteCachedAddedFriends,
  deleteCachedTrip,
  getCachedAddedFriends,
  getCachedTrip,
} from '../../utils/localStorage';

export const FriendsFormComponent: React.FC = () => {
  const router = useRouter();

  const [trip, setTrip] = useState<CacheTrip>(router.query as CacheTrip);
  const [emailFriend, setEmailFriend] = useState<string>('');
  const [addedFriends, setAddedFriends] = useState<User[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    cacheTrip(router.query as CacheTrip);
    setTrip(getCachedTrip());
    const friendsFromLocalStorage = getCachedAddedFriends();
    if (friendsFromLocalStorage && friendsFromLocalStorage.length > 0) {
      setAddedFriends(friendsFromLocalStorage);
    }
    console.log('TRIP', trip);
    console.log('FRIENDs', addedFriends);
  }, []);

  useEffect(() => {
    cacheAddedFriends(addedFriends);
  }, [addedFriends]);

  const addFriend = async (e: Event) => {
    e.preventDefault();
    if (emailFriend.length === 0) {
      setError('Please add an email');
      return;
    }
    const user = await getUserByEmail(emailFriend);
    if (typeof user === 'string') {
      setError('No user with this email, please try again');
    } else {
      if (addedFriends.length >= 10) {
        setError('You already reached the maximum');
        setEmailFriend('');
        return;
      }
      setAddedFriends((prev) => {
        if (!prev.map((u) => u.email).includes(emailFriend)) {
          return [...prev, user];
        } else {
          return prev;
        }
      });
      setEmailFriend('');
      setError('');
    }
  };

  const finalizeTrip = async () => {
    const newTrip = await createTrip(trip!);
    return newTrip.id ? newTrip : false;
  };

  const finalizeGroup = async (tripId: number) => {
    addedFriends
      .map((u) => u.id)
      .forEach(async (id) => {
        await createUsersOnTrips(tripId, id!);
      });
  };

  const finalize = async () => {
    const newTrip = await finalizeTrip();
    if (newTrip && newTrip.id) {
      const usersOnTrips = await finalizeGroup(newTrip.id);
      if (typeof usersOnTrips !== 'string') {
        deleteCachedAddedFriends();
        deleteCachedTrip();
        return newTrip;
      }
    }
    setError('Something went wrong...');
    return false;
  };

  const finalizeAndGoToDashboard = async () => {
    const newTrip = await finalize();
    if (newTrip) router.push(`/dashboard/map/${newTrip.id}`);
  };

  const finalizeAndGoToFlight = async () => {
    const newTrip = await finalize();
    if (newTrip) router.push(`/trip/flight/${newTrip.id}`);
  };

  return (
    <section className={styles.friendsForm}>
      <Link href='/trip'>
        <a>
          <img className={styles.goBack} src='/assets/arrow.svg' alt='' />
        </a>
      </Link>
      <div className={styles.left}>
        <h2 className={'titleH2 ' + styles.title}>Add your friends</h2>

        <form className={styles.addFriendForm}>
          <div className={styles.input}>
            <label htmlFor='friend'>
              Add your friend by email{' '}
              <span className={styles.maxPeople}> Max 10</span>
            </label>
            <input
              type='text'
              id='friend'
              placeholder='Email'
              onChange={(e) => setEmailFriend(e.target.value)}
              value={emailFriend}
              className={styles.input_field}
            />
          </div>
          <button
            onClick={(e: any) => {
              addFriend(e);
            }}
            type='submit'
            className={styles.addFriend}
          ></button>
        </form>
        <p className='error'>{error}</p>

        <p className={styles.submit_description}>
          Create the trip with the current status or continue expanding the trip
          details with flights.
        </p>

        <div className={styles.submit}>
          <input
            type='submit'
            value='Finalize'
            className={'button ' + styles.finalize}
            onClick={finalizeAndGoToDashboard}
          />
          <button
            onClick={finalizeAndGoToFlight}
            type='submit'
            className={styles.continue}
          >
            Continue to Flights
            <div className={styles.arrow}></div>
          </button>
        </div>
      </div>
      <div className={styles.right}>
        <h4 className={styles.friends_title}>Added friends</h4>
        <ul className={styles.userList}>
          {addedFriends
            .filter((x) => x.id)
            .map((user) => (
              <li key={user.id} className={styles.user}>
                <div
                  className={styles.avatar}
                  style={{
                    backgroundImage: `url(${user.pictureUrl})`,
                    backgroundSize: 'contain',
                  }}
                ></div>
                {user.username}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
