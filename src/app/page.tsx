import { Card, BaseCardProps, MenuCardProps } from '@/components/Card/Card';
import styles from './page.module.scss';

import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

export default function Home() {
  const menuCards: MenuCardProps[] = [
    {
      img: styles.breakfast,
      title: 'Breakfast',
      text: 'In the new era of technology we look in the future with certainty and pride for our life.',
      textLink: 'Explore Menu',
    },
    {
      img: styles.dishes,
      title: 'Main Dishes',
      text: 'In the new era of technology we look in the future with certainty and pride for our life.',
      textLink: 'Explore Menu',
    },
    {
      img: styles.drinks,
      title: 'Drinks',
      text: 'In the new era of technology we look in the future with certainty and pride for our life.',
      textLink: 'Explore Menu',
    },
    {
      img: styles.desserts,
      title: 'Desserts',
      text: 'In the new era of technology we look in the future with certainty and pride for our life.',
      textLink: 'Explore Menu',
    },
  ];

  const eventCards: BaseCardProps[] = [
    {
      img: styles.catering,
      title: 'Caterings',
      text: 'In the new era of technology we look in the future with certainty and pride for our life.',
    },
    {
      img: styles.birthdays,
      title: 'Birthdays',
      text: 'In the new era of technology we look in the future with certainty and pride for our life.',
    },
    {
      img: styles.weddings,
      title: 'Weddings',
      text: 'In the new era of technology we look in the future with certainty and pride for our life.',
    },
    {
      img: styles.evetns,
      title: 'Events',
      text: 'In the new era of technology we look in the future with certainty and pride for our life.',
    },
  ];

  return (
    <>
      <Header />
      <main>
        <section className={styles.promo}>
          <div className={styles.promoWrapper}>
            <h1>Best food for your taste</h1>
            <p>
              Discover delectable cuisine and unforgettable moments in our
              welcoming, culinary haven.
            </p>
            <div className={styles.buttonWrapper}>
              <button className={styles.buttonSecondary}>Book A Table</button>
              <button className={styles.button}>Explore Menu</button>
            </div>
          </div>
        </section>
        <section className={styles.menu}>
          <div className={styles.wrapper}>
            <h2 className={styles.header}>Browse Our Menu</h2>
            <div className={styles.layoutGrid}>
              {menuCards.map((card, i) => (
                <Card
                  key={i}
                  img={card.img}
                  title={card.title}
                  text={card.text}
                  textLink={card.textLink}
                />
              ))}
            </div>
          </div>
        </section>
        <section className={styles.services}>
          <div className={styles.wrapper}>
            <h2 className={styles.header}>
              We also offer unique services for your events
            </h2>
            <div className={styles.layoutGrid}>
              {eventCards.map((card, i) => (
                <Card
                  key={i}
                  img={card.img}
                  title={card.title}
                  text={card.text}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
