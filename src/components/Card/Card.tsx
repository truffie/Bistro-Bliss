'use client';

import { FC } from 'react';
import styles from './Card.module.scss';
import Link from 'next/link';

export interface BaseCardProps {
  id?: any;
  img: string;
  title: string;
  description?: string;
  className?: string;
  hover?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  isSettings?: boolean;
}

export interface ActionCardProps extends BaseCardProps {
  textAction: string;
}

export interface LinkCardProps extends BaseCardProps {
  textLink: string;
  link?: string;
}

export interface MealCardProps extends BaseCardProps {
  price: string;
}

type CardProps =
  | ActionCardProps
  | LinkCardProps
  | MealCardProps
  | BaseCardProps;

function isMenuCard(props: CardProps): props is LinkCardProps {
  return (props as LinkCardProps).textLink !== undefined;
}

function isMealCard(props: CardProps): props is MealCardProps {
  return (props as MealCardProps).price !== undefined;
}

function isActionCard(props: CardProps): props is ActionCardProps {
  return (props as ActionCardProps).textAction !== undefined;
}
export const Card: FC<CardProps> = props => {
  const classes = [styles.card];
  if (props.className) {
    classes.push(props.className);
  }
  if (props.hover) {
    classes.push(styles.hover);
  }

  return (
    <>
      <div className={`${classes.join(' ')}`}>
        <div className={`${props.img}`}></div>
        {isMealCard(props) && <p className={styles.price}>{props.price}</p>}
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        {isMenuCard(props) && (
          <Link href={props.link || '/menu'}>{props.textLink}</Link>
        )}
        {isActionCard(props) && <p>{props.textAction}</p>}
      </div>
      {props.isSettings ? (
        <div className={styles.cardHoverSettings}>
          <Link href={`/menu/${props.id}`}>
            <div className={styles.burger}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Link>
          <div
            className={styles.remove}
            onClick={props.onClick}
            id={props.id}
          ></div>
        </div>
      ) : null}
    </>
  );
};
