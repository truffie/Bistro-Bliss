'use client';
import styles from './page.module.scss';
import { Footer } from '@layout/Footer/Footer';
import { Header } from '@layout/Header/Header';
import { menuItems } from '@storage';
import { Card } from '@components/Card/Card';
import AnimatedAppear from '@animation/Appearance';
import Link from 'next/link';

const MenuPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.wrapper}>
          <div className={styles.content}>
            <AnimatedAppear moving={true} position="y">
              <h1>Our Menu</h1>
              <p>
                We consider all the drivers of change gives you the components
                you need to change to create a truly happens.
              </p>
            </AnimatedAppear>
          </div>
          <AnimatedAppear delay={1}>
            <div className={styles.cardWrapper}>
              {menuItems.map(({ id, img, price, title, description }) => (
                <Link href={`/menu/${id}`} key={id}>
                  <Card
                    className={`${styles.card}`}
                    img={`${styles.img} ${img}`}
                    price={price}
                    title={title}
                    description={description}
                    hover={true}
                  />
                </Link>
              ))}
            </div>
          </AnimatedAppear>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MenuPage;
