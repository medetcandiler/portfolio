'use client'
import Image from "next/image"
import useIsVisible from "@/app/utils/useIsVisible";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Work = ({ text, project, usedTools }) => {
  const [imageSrc, setImageSrc] = useState('');
  const [tools, setTools] = useState(null);
  const [href, setHref] = useState('');
  const firstRef = useRef();
  const isVisible = useIsVisible(firstRef);


  const t = useTranslations('Work');

  useEffect(() => {
    if (project === 'givingly') {
      setImageSrc('givingly.jpeg');
      setTools([
        <Image
          className="resizeImg"
          key='nextjs'
          src={'/images/nextjs.svg'}
          width={80}
          height={80}
          alt="nextjs logo"
        />,
        <Image
          className="resizeImg"
          key='react'
          src={'/images/react.svg'}
          width={80}
          height={80}
          alt="react logo"
        />,
        <Image
          className="resizeImg"
          key='tailwind'
          src={'/images/tailwind.svg'}
          width={80}
          height={80}
          alt="tailwind logo"
        />,
        <Image
          className="resizeImg"
          key='redux'
          src={'/images/redux.svg'}
          width={80}
          height={80}
          alt="redux logo"
        />,
        <Image
          className="resizeImg"
          key='firebase'
          src={'/images/firebase.png'}
          width={80}
          height={80}
          alt="firebase logo"
        />,
      ]);
      setHref('https://crowdfunding-app-team-9-akej.vercel.app/');
    } else if (project === 'cineverse') {
      setImageSrc('movie.svg');
      setTools([
        <Image
          className="resizeImg"
          key='js'
          src={'/images/js.svg'}
          width={80}
          height={80}
          alt="js logo"
        />,
        <Image
          className="resizeImg"
          key='tailwind'
          src={'/images/tailwind.svg'}
          width={80}
          height={80}
          alt="tailwind logo"
        />,
        <Image
          className="resizeImg"
          key='api'
          src={'/images/api.svg'}
          width={80}
          height={80}
          alt="api logo"
        />,
        <Image
          className="resizeImg"
          key='css'
          src={'/images/css.svg'}
          width={80}
          height={80}
          alt="css logo"
        />,
      ]);
      setHref('https://github.com/202303-PRM-TR-FEW/movie-project-aybike-berkay-medetcan');
    } else {
      setImageSrc('meme.png');
      setTools([
        <Image
          className="resizeImg"
          key='nextjs'
          src={'/images/nextjs.svg'}
          width={80}
          height={80}
          alt="nextjs logo"
        />,
        <Image
          className="resizeImg"
          key='react'
          src={'/images/react.svg'}
          width={80}
          height={80}
          alt="react logo"
        />,
        <Image
          className="resizeImg"
          key='tailwind'
          src={'/images/tailwind.svg'}
          width={80}
          height={80}
          alt="tailwind logo"
        />,
        <Image
          className="resizeImg"
          key='redux'
          src={'/images/redux.svg'}
          width={80}
          height={80}
          alt="redux logo"
        />,
        <Image
          className="resizeImg"
          key='reacthookform'
          src={'/images/reacthookform.svg'}
          width={80}
          height={80}
          alt="reacthookform logo"
        />,
      ]);
      setHref('https://meme-generator-git-main-medetcandiler.vercel.app/');
    }
  }, [project]);

  return (
    <div ref={firstRef} className={`container mx-auto leading-relaxed text-md md:text-lg`}>
      <div className="border-t border-[#020202] py-24 px-6 dark:border-slate-100">
        <div className={`flex flex-col space-y-7 transition  duration-500 ease-in ${isVisible ? "opacity-100 md:translate-y-0" : "opacity-0 md:-translate-y-5"}`}>
          <div className="flex flex-col space-y-3 items-center md:items-start">
            <div className="flex items-center space-x-4">
              <Image
                src={`/images/${imageSrc}`}
                width={60}
                height={60}
                alt="first work"
                className="rounded-lg bg-black"
              />
              <h1 className="text-2xl font-bold capitalize md:text-4xl ">{project}</h1>
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
            {tools}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
