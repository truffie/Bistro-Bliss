import styles from './SectionService.module.scss';

import { FC } from 'react';

import { BaseCardProps, Card } from '@components/Card/Card';

export const SectionService: FC = () => {
  const eventCards: BaseCardProps[] = [
    {
      img: styles.catering,
      title: 'Caterings',
      text: 'In the new era of technology we look in the future with certainty and pride for our life.',
    },
    {
      img: styles.birthday,
      title: 'Birthdays',
      text: 'In the new era of technology we look in the future with certainty and pride for our life.',
    },
    {
      img: styles.wedding,
      title: 'Weddings',
      text: 'In the new era of technology we look in the future with certainty and pride for our life.',
    },
    {
      img: styles.event,
      title: 'Events',
      text: 'In the new era of technology we look in the future with certainty and pride for our life.',
    },
  ];
  return (
    <section className={styles.services}>
      <div className={styles.wrapper}>
        <h2 className={styles.header}>
          We also offer unique services for your events
        </h2>
        <div className={styles.cardWrapper}>
          {eventCards.map((card, i) => (
            <Card
              key={i}
              className={styles.card}
              imgSizes={styles.img}
              img={card.img}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
