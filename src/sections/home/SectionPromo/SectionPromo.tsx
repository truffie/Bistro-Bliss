import Link from 'next/link';
import styles from './Promo.module.scss';
import { FC } from 'react';
import AnimatedAppear from '@animation/Appearance';
import { Button } from '@components/Button/Button';

export const SectionPromo: FC = () => {
  return (
    <section className={styles.promo}>
      <div className={styles.promoWrapper}>
        <AnimatedAppear delay={2}>
          <h1>Best food for your taste</h1>
        </AnimatedAppear>
        <p>
          Discover delectable cuisine and unforgettable moments in our
          welcoming, culinary haven.
        </p>
        <div className={styles.buttonWrapper}>
          <Button className={styles.buttonSecondary} colored={true}>
            Book A Table
          </Button>
          <Link href="/menu">
            <Button className={styles.button}>Explore Menu</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
