'use client';
import { SectionPromo } from '@sections/home/SectionPromo/SectionPromo';
import { SectionMenu } from '@sections/home/SectionMenu/SectionMenu';
import { SectionService } from '@sections/home/SectionService/SectionService';
import AnimatedAppear from '@animation/Appearance';

export default function HomePage() {
  return (
    <>
      <AnimatedAppear delay={1} moving={false}>
        <main>
          <SectionPromo />
          <SectionMenu />
          <SectionService />
        </main>
      </AnimatedAppear>
    </>
  );
}
