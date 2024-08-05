'use client';

import styles from './MenuItem.module.scss';
import { useParams } from 'next/navigation';
import { FC, useEffect, useMemo, useState } from 'react';
import { Header } from '@layout/Header/Header';
import { menuItem, menuItems } from '@storage';
import { Footer } from '@layout/Footer/Footer';
import AnimatedAppear from '@animation/Appearance';
import Link from 'next/link';

const MenuItem: FC = () => {
  const { item_id } = useParams();
  const [item, setItem] = useState<menuItem | undefined>(undefined);

  useEffect(() => {
    const currentItem: menuItem[] = menuItems.filter(
      (item) => item.id === +item_id
    );
    if (!currentItem.length) {
      return;
    }
    setItem(currentItem[0]);
  }, [item_id]);

  const switchNext = useMemo(() => {
    return +item_id === menuItems[menuItems.length - 1].id ? 1 : +item_id + 1;
  }, [item_id]);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <AnimatedAppear duration={1}>
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
          <AnimatedAppear delay={0.5}>
            <div className={styles.content}>
              <h1>{item && item.title}</h1>
              <p>{item && item.description}</p>
              <p className={styles.price}>Total:{item && item.price}</p>
            </div>
          </AnimatedAppear>
          <AnimatedAppear delay={1}>
            <Link href={`/menu/${switchNext}`} scroll={false}>
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
