import styles from './SectionMenu.module.scss';

import { FC } from 'react';

import { Card, LinkCardProps } from '@components/Card/Card';
import AnimatedAppear from '@animation/Appearance';

export const SectionMenu: FC = () => {
  const menuCards: LinkCardProps[] = [
    {
      img: 'breakfast',
      title: 'Breakfast',
      description:
        'In the new era of technology we look in the future with certainty and pride for our life.',
      textLink: 'Explore Menu',
    },
    {
      img: 'dishes',
      title: 'Main Dishes',
      description:
        'In the new era of technology we look in the future with certainty and pride for our life.',
      textLink: 'Explore Menu',
    },
    {
      img: 'drinks',
      title: 'Drinks',
      description:
        'In the new era of technology we look in the future with certainty and pride for our life.',
      textLink: 'Explore Menu',
    },
    {
      img: 'desserts',
      title: 'Desserts',
      description:
        'In the new era of technology we look in the future with certainty and pride for our life.',
      textLink: 'Explore Menu',
    },
  ];

  return (
    <section className={styles.menu}>
      <div className={styles.wrapper}>
        <AnimatedAppear moving={true}>
          <h2 className={styles.header}>Browse Our Menu</h2>
        </AnimatedAppear>
        <div className={styles.cardWrapper}>
          {menuCards.map(({ title, img, description, textLink }, i) => (
            <Card
              className={styles.card}
              key={i}
              img={`${styles[img]} ${styles.img}`}
              title={title}
              description={description}
              textLink={textLink}
              hover={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
