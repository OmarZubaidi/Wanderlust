import React from 'react';
import styles from '../../../styles/landingPageStyle/sections.module.css';
import appleStore from '../../assets/AppStore.png';
import Image from 'next/image';

export const LandingPageSections: React.FC = () => {
  return (
    <section className={styles.sections}>
      <section className={styles.section}>
        <article className={styles.section_text}>
          <h2 className='titleH2'>Discover your Wanderlust</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut autem
            ab saepe molestiae magnam blanditiis facere qui eum distinctio fugit
            dolorum quaerat enim, maiores culpa commodi, necessitatibus earum.
            Esse, fugit?
          </p>
          <div className={styles.sign_buttons}>
            <button className='button login_button'>Login</button>
            <button className='button signup_button'>Register</button>
          </div>
        </article>
        <article className={styles.pin_img}></article>
      </section>
      <section className={styles.section}>
        <article className={styles.phone_img}></article>
        <article className={styles.section_text}>
          <h2 className='titleH2'>Download the companion app</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo saepe
            nulla, qui inventore blanditiis illo perspiciatis ex at quo, facilis
            sint incidunt molestias voluptas quia fugit repellendus maxime,
            dolorum natus!
          </p>
          <div className={styles.store_buttons}>
            <button>
              <Image
                width={100}
                height={100}
                src='/assets/AppStore.png'
                alt='app store'
              />
            </button>
            <button>
              <Image
                width={80}
                height={80}
                src='/assets/GooglePlayStore.png'
                alt='app store'
              />
            </button>
          </div>
        </article>
      </section>
    </section>
  );
};
