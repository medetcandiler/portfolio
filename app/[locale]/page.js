'use client'
import { useSelector } from "react-redux";
import { useTranslations } from "next-intl";

import HeroSection from "../components/HeroSection/HeroSection";
import WorksIntro from "../components/WorksIntro/WorksIntro";
import Work from "../components/Work/Work";
import TopButton from "../components/GoToTopButton/TopButton";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";


export default function Home() {
  const turnToNav = useSelector(state => state.nav.turnToNav);
  const t = useTranslations('Home');
  return (
    <main className="md:px-12 ">
      <HeroSection />
      <WorksIntro />
      <Work project={'givingly'} text={t('givingly')} />
      <Work project={'cineverse'} text={t('cineverse')} />
      <Work project={'memegenerator'} text={t('memeGenerator')} />
      <About />
      <Contact />
      {turnToNav && <TopButton />}
    </main>
  )
}
