import { Header } from '@layout/Header/Header';
import { FC } from 'react';
//import styles from "./page.module.css"
const page: FC = () => {
  return (
    <>
      <Header />
      <section>
        <div></div>
        <div>
          <h2>We provide healthy food for your family.</h2>
          <p>
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance. Rooted in city{`'`}s rich culinary culture, we aim to
            honor our local roots while infusing a global palate.
          </p>
          <p>
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
        </div>
      </section>
      <section></section>
    </>
  );
};

export default page;

