import styles from './SectionMenu.module.scss';

import { FC } from 'react';

import { Card, MenuCardProps } from '@components/Card/Card';

export const SectionMenu: FC = () => {
  const menuCards: MenuCardProps[] = [
    {
      img: styles.breakfast,
      title: 'Breakfast',
      text: 'In the new era of technology we look in the future with certainty and pride for our life.',
      textLink: 'Explore Menu',
    },
    {
      img: styles.dishes,
      title: 'Main Dishes',
      text: 'In the new era of technology we look in the future with certainty and pride for our life.',
      textLink: 'Explore Menu',
    },
    {
      img: styles.drinks,
      title: 'Drinks',
      text: 'In the new era of technology we look in the future with certainty and pride for our life.',
      textLink: 'Explore Menu',
    },
    {
      img: styles.desserts,
      title: 'Desserts',
      text: 'In the new era of technology we look in the future with certainty and pride for our life.',
      textLink: 'Explore Menu',
    },
  ];

  return (
    <section className={styles.menu}>
      <div className={styles.wrapper}>
        <h2 className={styles.header}>Browse Our Menu</h2>
        <div className={styles.cardWrapper}>
          {menuCards.map((card, i) => (
            <Card
              key={i}
              imgSizes={styles.img}
              img={card.img}
              title={card.title}
              text={card.text}
              textLink={card.textLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
