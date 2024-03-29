'use client'
import Image from "next/image"
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useSelector } from "react-redux";
import useIsVisible from "@/utils/useIsVisible";

const Work = ({ text, project }) => {
  const isDark = useSelector(state => state.nav.isDark);
  const [imageSrc, setImageSrc] = useState('');
  const [tools, setTools] = useState([]);
  const [href, setHref] = useState('');
  const firstRef = useRef();
  const isIntersecting = useIsVisible(firstRef);
  const t = useTranslations('Work');

  const workConfig = {
    givingly: {
      image: 'givingly.jpeg',
      tools: [isDark ? 'nextjsdark' : 'nextjs', 'react', 'tailwind', 'redux', 'firebase'],
      href: 'https://crowdfunding-app-team-9-akej.vercel.app/',
    },
    dilersigorta: {
      image: isDark ? 'dilersigortawhite.png' : 'dilersigorta.png',
      tools: [isDark ? 'nextjsdark' : 'nextjs', 'react', 'tailwind'],
      href: 'https://www.dilersigorta.com/'
    },
    memegenerator: {
      image: 'meme.png',
      tools: [isDark ? 'nextjsdark' : 'nextjs', 'react', 'tailwind', 'redux', 'reacthookform'],
      href: 'https://meme-generator-git-main-medetcandiler.vercel.app/',
    },
    shopfinity: {
      image: 'shopfinity.jpg',
      tools: [isDark ? 'nextjsdark' : 'nextjs', 'react', 'tailwind', 'redux', 'reactquery'],
      href: 'https://shopfinity.vercel.app/',
    },
    weatherapp: {
      image: 'weather.svg',
      tools: ['react', 'css', 'restapi', 'redux', 'axios'],
      href: 'https://weather-app-with-react-js-omega.vercel.app/',
    },
    cineverse: {
      image: 'movie.svg',
      tools: ['js', 'tailwind', 'api', 'css'],
      href: 'https://github.com/202303-PRM-TR-FEW/movie-project-aybike-berkay-medetcan',
    },
    theBeatles: {
      image: 'beatles.jpeg',
      tools: ['html', 'css', 'js', 'tailwind'],
      href: 'https://your-favorite-band.vercel.app/',
    }
  }

  useEffect(() => {
    const projectConfig = workConfig[project];
    setImageSrc(projectConfig.image);
    setHref(projectConfig.href);
    setTools(projectConfig.tools);
  }, [project, isDark]);

  return (
    <div ref={firstRef} className={`container mx-auto leading-relaxed text-md md:text-lg`}>
      <div className="border-t border-[#020202] py-16 px-3 md:px-6 dark:border-slate-100">
        <div className={`flex flex-col space-y-7 observerTransition ${isIntersecting ? 'md:opacity-1 md:translate-y-0' : 'md:opacity-0 md:-translate-y-5'}`}>
          <div className="flex flex-col space-y-3 items-center md:items-start">
            <div className="flex items-center space-x-4">
              {imageSrc && (
                <Image
                  src={`/images/${imageSrc}`}
                  width={60}
                  height={60}
                  alt={imageSrc}
                  className="rounded-lg w-[60px] h-[60px]"
                  priority
                />
              )}
              <h1 className="text-2xl font-bold capitalize md:text-4xl ">{project === 'dilersigorta' ? 'Diler Sigorta' : project}</h1>
            </div>
            <div className="flex items-center space-x-1 text-lg">
              <p className="whitespace-nowrap">{t('VisitAt')}</p>
              <p>:</p>
              <Link className="link lowercase" href={href} target="blank" rel="noopener noreferrer" >www.{project}.com</Link>
            </div>
          </div>
          <div>
            <p className="text-center md:text-start ">
              {text}
            </p>
          </div>
          <div className="flex flex-wrap gap-5 justify-center space-x-6 md:justify-start">
            {tools.map((tool, index) => (
              <Image
                key={index}
                src={`/images/${tool}.svg`}
                className="w-[80px] h-[80px]"
                height={0}
                width={0}
                alt={tool}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
