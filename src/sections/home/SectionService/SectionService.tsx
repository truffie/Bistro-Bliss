import styles from './SectionService.module.scss';

import { FC } from 'react';

import { BaseCardProps, Card } from '@components/Card/Card';
import AnimatedAppear from '@animation/Appearance';

export const SectionService: FC = () => {
  const eventCards: BaseCardProps[] = [
    {
      img: 'catering',
      title: 'Caterings',
      description:
        'In the new era of technology we look in the future with certainty for life.',
    },
    {
      img: 'birthday',
      title: 'Birthdays',
      description:
        'In the new era of technology we look in the future with certainty for life.',
    },
    {
      img: 'wedding',
      title: 'Weddings',
      description:
        'In the new era of technology we look in the future with certainty for life.',
    },
    {
      img: 'event',
      title: 'Events',
      description:
        'In the new era of technology we look in the future with certainty for life.',
    },
  ];
  return (
    <section className={styles.services}>
      <div className={styles.wrapper}>
        <AnimatedAppear>
          <h2 className={styles.header}>
            We also offer unique services for your events
          </h2>
        </AnimatedAppear>
        <div className={styles.cardWrapper}>
          {eventCards.map(({ img, title, description }, i) => (
            <Card
              key={i}
              className={styles.card}
              img={`${styles[img]} ${styles.img}`}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
