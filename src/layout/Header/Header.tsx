import styles from './Header.module.scss';
import Link from 'next/link';
import { Button } from '@components/Button/Button';
import { orderCart } from '@storage';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.contact}`}>
        <div className={styles.wrapper}>
          <div className={styles.communication}>
            <Link href="">
              <p>(414) 857 - 0107</p>
            </Link>
            <Link href="">
              <p>yummy@bistrobliss</p>
            </Link>
          </div>
          <div className={styles.socialMedia}>
            <Link href="#">
              <div>X</div>
            </Link>
            <Link href="#">
              <div>Facebook</div>
            </Link>
            <Link href="#">
              <div>Instagram</div>
            </Link>
            <Link href="#">
              <div>Github</div>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <div></div>
            <p>Bistro Bliss</p>
          </div>
          <nav className={styles.nav}>
            <Link href="/">
              <Button className={styles.navItem}>Home</Button>
            </Link>
            <Link href="/about">
              {' '}
              <Button className={styles.navItem}>About</Button>
            </Link>
            <Link href="/menu">
              <Button className={styles.navItem}>Menu</Button>
            </Link>
          </nav>
          <Link href="/basket">
            <Button
              className={
                orderCart
                  ? `${styles.basket} ${styles.order}`
                  : `${styles.basket}`
              }
            ></Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
