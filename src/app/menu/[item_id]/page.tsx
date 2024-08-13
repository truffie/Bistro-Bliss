'use client';

import styles from './MenuItem.module.scss';
import { useParams } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { Header } from '@layout/Header/Header';
import { menuItem, menuItems, orderCart } from '@storage';
import { Footer } from '@layout/Footer/Footer';
import AnimatedAppear from '@animation/Appearance';
import Link from 'next/link';
import { Button } from '@components/Button/Button';

interface Isize {
  size: string;
  price: number;
  isActive?: boolean;
}

const MenuItem: FC = () => {
  const { item_id } = useParams();

  const [item, setItem] = useState<menuItem>({
    img: '',
    price: '',
    title: '',
    description: '',
  });

  const [initPrice, setInitPrice] = useState('');

  const [dishSizes, setDizhSizes] = useState<Isize[]>([
    { size: 'S', price: 1, isActive: true },
    { size: 'M', price: 2, isActive: false },
    { size: 'L', price: 3, isActive: false },
    { size: 'XL', price: 4, isActive: false },
  ]);

  useEffect(() => {
    const [currentItem] = menuItems.filter(item => item.id === +item_id);

    if (!currentItem) {
      throw new Error('cant get menu item');
    }

    setItem(currentItem);
    setInitPrice(currentItem.price);
  }, [item_id]);

  const hasNext = +item_id < menuItems.length;
  const current_id = hasNext ? +item_id + 1 : 1;

  function calculatePosition(e: React.MouseEvent<HTMLElement>) {
    const size = e.currentTarget.id;

    const findObj = dishSizes.find(el => el.size === size);

    if (!findObj) {
      throw new Error('unknown size');
    }

    setItem(prev => {
      // initPrice is string: "$ x.xx"
      const prevPrice = initPrice.slice(2);

      return {
        ...prev,
        price: `${initPrice[0]} ${String(+prevPrice * findObj.price)}`,
      } as menuItem;
    });

    setDizhSizes(prev => {
      return prev.map(el =>
        el.size === size
          ? { ...el, isActive: true }
          : { ...el, isActive: false }
      );
    });
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <AnimatedAppear>
            <div className={styles.imgWrapper}>
              <div
                className={
                  item ? `${styles[item.img]} ${styles.img}` : `${styles.img}`
                }
              ></div>
              <div className={styles.imgDescription}>
                <p>22 / 35 / 63</p>
                <p>{item?.description}</p>
              </div>
            </div>
          </AnimatedAppear>
          <AnimatedAppear>
            <div className={styles.content}>
              <h1>{item && item.title}</h1>
              <p>{item && item.description}</p>
              <p>Size</p>
              <div className={styles.sizeItemWrapper}>
                {dishSizes.map(size => (
                  <div
                    key={size.size}
                    id={size.size}
                    className={`${styles.sizeItem} ${
                      size.isActive ? `${styles.active}` : ''
                    }`}
                    onClick={e => calculatePosition(e)}
                  >
                    <p>{size.size}</p>
                    <p>{size.price}s</p>
                  </div>
                ))}
              </div>
              <div className={styles.price}>
                <p>Total:</p>
                <p>{item && item.price}</p>
              </div>
              <Button
                onClick={() => console.log('hello')}
                className={styles.button}
              >
                Add to Order
              </Button>
            </div>
          </AnimatedAppear>
          <AnimatedAppear delay={1}>
            <Link href={`/menu/${current_id}`} scroll={false}>
              <div className={styles.arrow}></div>
            </Link>
          </AnimatedAppear>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MenuItem;
