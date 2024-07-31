import { FC } from 'react';
import styles from './Footer.module.scss';
export const Footer: FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <div>
            <div></div>
            <h3>Bistro Bliss</h3>
          </div>
          <p>
            In the new era of technology we look a in the future with certainty
            and pride to for our company and.
          </p>
        </div>
        <div className="footer-nav">
          <div className="footer-list footer-page">
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
          <div className="footer-list footer-utility">
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
          <div className="footer-list footer-instagram">
            <h4>Follow Us On Instagram</h4>
            <div>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <p>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
    </footer>
  );
};
