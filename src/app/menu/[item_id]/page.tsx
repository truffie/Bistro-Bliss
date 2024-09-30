'use client';

import styles from './MenuItem.module.scss';
import { useParams } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { menuItem, menuItems } from '@storage';
import AnimatedAppear from '@animation/Appearance';
import Link from 'next/link';
import { Button } from '@components/Button/Button';
import { ClipLoader } from 'react-spinners';
import { getStorageValue } from '../../../helpers/getLocalStorage';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { updateCart } from '../../slice/cartSlice';

interface Isize {
  size: string;
  price: number;
  isActive?: boolean;
}

const MenuItem: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

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

  const [isAdded, setIsAdded] = useState<boolean>(false);

  useEffect(() => {
    //fake send to server
    let timer = setTimeout(() => {
      setIsAdded(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [isAdded]);

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
        price: `${initPrice[0]} ${String(
          (+prevPrice * findObj.price).toFixed(2)
        )}`,
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

  function addToOrder() {
    setIsAdded(true);

    const previousCart: menuItem[] = getStorageValue('order', []);

    const cart = previousCart.filter(el => el.id !== item.id);

    localStorage.setItem('order', JSON.stringify([...cart, item]));

    dispatch(updateCart(getStorageValue('order', []).length));
  }

  return (
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
            <Button className={styles.button} onClick={addToOrder}>
              {!isAdded ? (
                'Add to Order'
              ) : (
                <ClipLoader loading={isAdded} size={15} />
              )}
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
  );
};

export default MenuItem;
