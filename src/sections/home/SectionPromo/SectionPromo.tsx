import styles from './Promo.module.scss';
import { FC } from 'react';

export const SectionPromo: FC = () => {
  return (
    <section className={styles.promo}>
      <div className={styles.promoWrapper}>
        <h1>Best food for your taste</h1>
        <p>
          Discover delectable cuisine and unforgettable moments in our
          welcoming, culinary haven.
        </p>
        <div className={styles.buttonWrapper}>
          <button className={styles.buttonSecondary}>Book A Table</button>
          <button className={styles.button}>Explore Menu</button>
        </div>
      </div>
    </section>
  );
};
