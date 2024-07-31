import { FC } from 'react';
import styles from './Card.module.scss';

export interface BaseCardProps {
  img: string;
  title: string;
  text: string;
  imgSizes?: string;
  className?: string;
}

export interface MenuCardProps extends BaseCardProps {
  textLink: string;
}

export interface MealCardProps extends BaseCardProps {
  price: string;
}

type CardProps = MenuCardProps | MealCardProps | BaseCardProps;

function isMenuCard(card: CardProps): card is MenuCardProps {
  return (card as MenuCardProps).textLink !== undefined;
}

function isMealCard(card: CardProps): card is MealCardProps {
  return (card as MealCardProps).price !== undefined;
}

export const Card: FC<CardProps> = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>
      <div className={`${props.img} ${props.imgSizes}`}></div>
      {isMealCard(props) && <p>$ {props.price}</p>}
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      {isMenuCard(props) && <a href="#">{props.textLink}</a>}
    </div>
  );
};
