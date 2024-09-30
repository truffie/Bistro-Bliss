import { FC } from 'react';
import styles from './Footer.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.promo}>
            <div className={styles.logo}>
              <div></div>
              <h4>Bistro Bliss</h4>
            </div>
            <p>
              In the new era of technology we look a in the future with
              certainty and pride to for our company and.
            </p>
          </div>
          <div className={styles.nav}>
            <div className={`${styles.pages} ${styles.navItem}`}>
              <h4>Pages</h4>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Pricing</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Delivery</li>
              </ul>
            </div>
            <div className={`${styles.utility} ${styles.navItem}`}>
              <h4>Utility Pages</h4>
              <ul>
                <li>Start Here</li>
                <li>Styleguide</li>
                <li>Password Protected</li>
                <li>404 Not Found</li>
                <li>Licenses</li>
                <li>Changelog</li>
                <li>View More</li>
              </ul>
            </div>
          </div>
          <div className={`${styles.inst} ${styles.navItem}`}>
            <h4>Follow Us On Instagram</h4>
            <div>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
        <p>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
      </div>
    </footer>
  );
};
