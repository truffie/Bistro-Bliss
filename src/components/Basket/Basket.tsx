'use client';

import { Button } from '@components/Button/Button';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import styles from './Basket.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store/store';
import { getStorageValue } from '../../helpers/getLocalStorage';

const Basket: FC = () => {

  const basketSize: number = useSelector((state: RootState) => state.purchase);

  const [currentSize, setCurrentSize] = useState(0);

  useEffect(() => {
    const order = getStorageValue('order', []);
    setCurrentSize(order.length);
  }, [basketSize]);

  return (
    <Link href="/cart" className={styles.cartWrapper}>
      <Button
        className={
          currentSize > 0 ? `${styles.cart} ${styles.order}` : `${styles.cart}`
        }
      >
        <div className={styles.price}>{currentSize ? currentSize : null}</div>
      </Button>
    </Link>
  );
};

export default Basket;
