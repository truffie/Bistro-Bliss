import { Card, BaseCardProps, MenuCardProps } from '@components/Card/Card';
import styles from './page.module.scss';

import { SectionPromo } from '@sections/home/SectionPromo/SectionPromo';
import { Header } from '@layout/Header/Header';
import { Footer } from '@layout/Footer/Footer';
import { SectionMenu } from '@sections/home/SectionMenu/SectionMenu';
import { SectionService } from '@sections/home/SectionService/SectionService';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SectionPromo />
        <SectionMenu />
        <SectionService />
      </main>
      <Footer />
    </>
  );
}
