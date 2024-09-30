'use client';

import { Card } from '@components/Card/Card';
import { menuItem } from '@storage';
import { FC, useEffect, useState } from 'react';
import styles from './page.module.scss';
import { getStorageValue } from '../../helpers/getLocalStorage';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { updateCart } from '../slice/cartSlice';

const Cart: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [orderItems, setOrderItems] = useState<menuItem[]>([]);

  useEffect(() => {
    const currentOrder = getStorageValue('order', []);

    setOrderItems(currentOrder);
  }, []);

  function remove(e: any) {
    const previousCart: menuItem[] =
      JSON.parse(localStorage.getItem('order') as string) || [];

    const currentCart = previousCart.filter(
      el => el.id !== Number(e.target.id)
    );

    localStorage.setItem('order', JSON.stringify(currentCart));

    dispatch(updateCart(getStorageValue('order', []).length));

    setOrderItems(currentCart);
  }

  return (
    <>
      <main className={styles.main}>
        <section className={styles.wrapper}>
          <h1>Cart</h1>
          <div className={styles.cardWrapper}>
            {!orderItems.length ? (
              <p>Order your favorite dishes</p>
            ) : (
              orderItems.map(item => (
                <div key={item.id} className={styles.cardHover}>
                  <Card
                    id={item.id}
                    className={`${styles.card}`}
                    img={`${styles.img} ${item.img}`}
                    price={item.price}
                    title={item.title}
                    hover={true}
                    isSettings={true}
                    onClick={remove}
                  />
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Cart;
