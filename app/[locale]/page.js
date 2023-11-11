'use client'
import { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslations } from "next-intl";

import HeroSection from "../components/HeroSection/HeroSection";
import WorksIntro from "../components/WorksIntro/WorksIntro";
import Work from "../components/Work/Work";
import TopButton from "../components/GoToTopButton/TopButton";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";



export default function Home() {
  const [isMoreClicked, setIsMoreClicked] = useState(false);
  const turnToNav = useSelector(state => state.nav.turnToNav);
  const t = useTranslations('Home');

  const projects = [
    { id: 1, name: 'givingly', text: t('givingly'), tools: [] },
    { id: 2, name: 'cineverse', text: t('cineverse'), tools: [] },
    { id: 3, name: 'memegenerator', text: t('memeGenerator'), tools: [] },
    { id: 4, name: 'shopfinity', text: t('shopfinity'), tools: [] },
    { id: 5, name: 'weatherapp', text: t('weatherapp'), tools: [] },
    { id: 6, name: 'the beatles fan page', text: t('thebeatlesfanpage'), tools: [] },
  ];

  const renderProjects = () => {
    return projects.slice(0, isMoreClicked ? projects.length : 3).map(project => (
      <Work key={project.id} project={project.name} text={project.text} />
    ))
  }

  const handleMoreButton = () => {
    setIsMoreClicked(prev => !prev)
  }

  return (
    <main className="md:px-12 ">
      <HeroSection />
      <WorksIntro isMoreClicked={isMoreClicked} />
      {renderProjects()}
      <button onClick={handleMoreButton} className="w-full mb-20 link">
        {isMoreClicked ? 'Show Less' : 'Show More...'}
      </button>
      <About />
      <Contact />
      {turnToNav && <TopButton />}
    </main>
  )
}