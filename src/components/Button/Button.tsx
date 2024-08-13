import { FC, ReactNode } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
  colored?: boolean;
  children?: ReactNode;
  className?: string;
  onClick?: any;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  colored = false,
  onClick,
}) => {
  const classes = [styles.button, className];

  if (colored) {
    classes.push(styles.buttonSecondary);
  }

  return (
    <button onClick={onClick} className={classes.join(' ')}>
      {children}
    </button>
  );
};

{
  /* <button className={styles.buttonSecondary}>Book A Table</button>
          <button className={styles.button}>Explore Menu</button> */
}
