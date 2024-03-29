'use client'
import { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslations } from "next-intl";

import HeroSection from "../../components/HeroSection/HeroSection";
import WorksIntro from "../../components/WorksIntro/WorksIntro";
import Work from "../../components/Work/Work";
import TopButton from "../../components/GoToTopButton/TopButton";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import ShowMoreButton from "../../components/ShowMoreButton/ShowMoreButton";

export default function Home() {
  const [isMoreClicked, setIsMoreClicked] = useState(false);
  const turnToNav = useSelector(state => state.nav.turnToNav);
  const t = useTranslations('Home');

  const projects = [
    { id: 1, name: 'givingly', text: t('givingly') },
    { id: 2, name: 'dilersigorta', text: t('dilersigorta') },
    { id: 3, name: 'memegenerator', text: t('memeGenerator') },
    { id: 4, name: 'shopfinity', text: t('shopfinity') },
    { id: 5, name: 'weatherapp', text: t('weatherapp') },
    { id: 6, name: 'cineverse', text: t('cineverse') },
    { id: 7, name: 'theBeatles', text: t('thebeatlesfanpage') },
  ];

  const renderProjects = () => {
    return projects.slice(0, isMoreClicked ? projects.length : 3).map(({ id, name, text }) => (
      <Work key={id} project={name} text={text} />
    ))
  }

  return (
    <>
      <div className="bg-container">
        <div className="area" >
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div >
      </div>
      <main className="container mx-auto flex flex-col items-center w-full md:px-10">
        <HeroSection />
        <WorksIntro isMoreClicked={isMoreClicked} />
        {renderProjects()}
        <ShowMoreButton isMoreClicked={isMoreClicked} setIsMoreClicked={setIsMoreClicked} />
        <About />
        <Contact />
        {turnToNav && <TopButton />}
      </main>
    </>
  )
}