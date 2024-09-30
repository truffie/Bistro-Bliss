import Image from 'next/image';
import { FC } from 'react';
import promo from './assets/promo.png';
import cooking from './assets/cooking.png';
import styles from './page.module.scss';

const page: FC = () => {
  return (
    <main className={styles.main}>
      <section className={styles.colored}>
        <div className={styles.wrapper}>
          <Image
            src={promo}
            alt="Come and visit us W. Marshall Lane Marshalltown, IA 50158, Los Angeles"
            width={649}
            height={616}
            quality={100}
          ></Image>
          <div className={styles.content}>
            <h2>We provide healthy food for your family.</h2>
            <p className={styles.text}>
              Our story began with a vision to create a unique dining experience
              that merges fine dining, exceptional service, and a vibrant
              ambiance. Rooted in city{`'`}s rich culinary culture, we aim to
              honor our local roots while infusing a global palate.
            </p>
            <p className={styles.description}>
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.wrapper}>
          <div className={styles.stats}>
            <h2>A little information for our valuable guest</h2>
            <p>
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>
            <div className={styles.statsBlocks}>
              <div className={styles.BlocksInfo}>
                <h3>3</h3>
                <p>Locations</p>
              </div>
              <div className={styles.BlocksInfo}>
                <h3>1995</h3>
                <p>Founded</p>
              </div>
              <div className={styles.BlocksInfo}>
                <h3>65+</h3>
                <p>Staff Members</p>
              </div>
              <div className={styles.BlocksInfo}>
                <h3>100%</h3>
                <p>Satisfied Customers</p>
              </div>
            </div>
          </div>
          <Image
            src={cooking}
            alt="Come and visit us W. Marshall Lane Marshalltown, IA 50158, Los Angeles"
            width={555}
            height={680}
            quality={100}
          ></Image>
        </div>
      </section>
    </main>
  );
};

export default page;
