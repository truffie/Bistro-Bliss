import { FC } from 'react';
import styles from './Card.module.scss';
import Link from 'next/link';

export interface BaseCardProps {
  img: string;
  title: string;
  description: string;
  className?: string;
  hover?: boolean;
}

export interface MenuCardProps extends BaseCardProps {
  textLink: string;
}

export interface MealCardProps extends BaseCardProps {
  price: string;
}

type CardProps = MenuCardProps | MealCardProps | BaseCardProps;

function isMenuCard(props: CardProps): props is MenuCardProps {
  return (props as MenuCardProps).textLink !== undefined;
}

function isMealCard(props: CardProps): props is MealCardProps {
  return (props as MealCardProps).price !== undefined;
}

export const Card: FC<CardProps> = (props) => {
  const classes = [styles.card];
  if (props.className) {
    classes.push(props.className);
  }
  if (props.hover) {
    classes.push(styles.hover);
  }

  return (
    <div className={`${styles.card} ${classes.join(' ')}`}>
      <div className={`${props.img}`}></div>
      {isMealCard(props) && <p className={styles.price}>{props.price}</p>}
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      {isMenuCard(props) && <Link href="/menu">{props.textLink}</Link>}
    </div>
  );
};
