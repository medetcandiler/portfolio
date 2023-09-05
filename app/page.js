'use client'
import { useSelector } from "react-redux";

import HeroSection from "./components/HeroSection/HeroSection";
import WorksIntro from "./components/WorksIntro/WorksIntro";
import Work from "./components/Work/Work";
import TopButton from "./components/GoToTopButton/TopButton";


export default function Home() {
  const turnToNav = useSelector(state => state.nav.turnToNav)
  return (
    <main className="md:px-12 ">
      <HeroSection />
      <WorksIntro />
      <Work project={'givingly'} text={'Givingly, my capstone project at Recoded, signifies a pivotal milestone in my web development journey. It reflects my growth as a frontend developer and my ability to create user-centric web applications through teamwork, technical proficiency, problem-solving, and continuous learning. Givingly is a crowdfunding platform that aims to connect individuals and projects with a community of potential backers.'} />
      <Work project={'cineverse'} text={'The Movie Database Project is a collaborative effort that aimed to create an engaging and feature-rich movie database website. It involved working closely with a team of skilled developers to build a comprehensive platform for movie enthusiasts and cinephiles. This project allowed us to explore and utilize various technologies and APIs to create a dynamic and user-friendly movie-related experience.'} />
      <Work project={'memegenerator'} text={'Meme Generator, powered by Next.js and the api.imgflip.com API, demonstrates my proficiency in frontend development. This Next.js application lets users create and preview memes by entering text and selecting colors. It showcases my skills in Next.js, API integration, data fetching, state management with Redux Toolkit, and user-friendly interface design. Utilizing Next.js server-side rendering and React Hook Form for efficient form handling, this project provides a fast, responsive, and visually appealing user experience.'} />
      <div className="h-screen"></div>
      {turnToNav && <TopButton />}
    </main>
  )
}
