import { FC, ReactNode } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
  colored?: boolean;
  children: ReactNode;
  className?: string;
}

const baseButton = `${styles.button}`;
const coloredButton = `${styles.button} ${styles.buttonSecondary}`;

export const Button: FC<ButtonProps> = ({ className, children, colored = false }) => {
  return (
    <button className={`${colored ? coloredButton : baseButton} ${className}`}>{children}</button>
  );
};

{
  /* <button className={styles.buttonSecondary}>Book A Table</button>
          <button className={styles.button}>Explore Menu</button> */
}
