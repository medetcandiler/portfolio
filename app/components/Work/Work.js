'use client'
import useIsVisible from "@/app/utils/useIsVisible";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";


const Work = ({ text, project }) => {
  const [imageSrc, setImageSrc] = useState('');
  const [tools, setTools] = useState(null);
  const [href, setHref] = useState('');
  const firstRef = useRef();
  const isVisible = useIsVisible(firstRef);

  useEffect(() => {
    if (project === 'givingly') {
      setImageSrc('givingly.jpeg');
      setTools([
        <Image
          key='nextjs'
          src={'/images/nextjs.svg'}
          width={80}
          height={80}
          alt="nextjs logo"
        />,
        <Image
          key='react'
          src={'/images/react.svg'}
          width={80}
          height={80}
          alt="react logo"
        />,
        <Image
          key='tailwind'
          src={'/images/tailwind.svg'}
          width={80}
          height={80}
          alt="tailwind logo"
        />,
        <Image
          key='redux'
          src={'/images/redux.svg'}
          width={80}
          height={80}
          alt="redux logo"
        />,
        <Image
          key='firebase'
          src={'/images/firebase.png'}
          width={80}
          height={80}
          alt="firebase logo"
        />,
      ]);
      setHref('https://crowdfunding-app-team-9-akej.vercel.app/')
    } else if (project === 'cineverse') {
      setImageSrc('movie.svg');
      setTools([
        <Image
          key='js'
          src={'/images/js.svg'}
          width={80}
          height={80}
          alt="js logo"
        />,
        <Image
          key='tailwind'
          src={'/images/tailwind.svg'}
          width={80}
          height={80}
          alt="tailwind logo"
        />,
        <Image
          key='api'
          src={'/images/api.svg'}
          width={80}
          height={80}
          alt="api logo"
        />,
        <Image
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
          key='nextjs'
          src={'/images/nextjs.svg'}
          width={80}
          height={80}
          alt="nextjs logo"
        />,
        <Image
          key='react'
          src={'/images/react.svg'}
          width={80}
          height={80}
          alt="react logo"
        />,
        <Image
          key='tailwind'
          src={'/images/tailwind.svg'}
          width={80}
          height={80}
          alt="tailwind logo"
        />,
        <Image
          key='redux'
          src={'/images/redux.svg'}
          width={80}
          height={80}
          alt="redux logo"
        />,
        <Image
          key='reacthookform'
          src={'/images/reacthookform.svg'}
          width={80}
          height={80}
          alt="reacthookform logo"
        />,
      ]);
      setHref('https://meme-generator-git-main-medetcandiler.vercel.app/');
    }
  }, [project])


  return (
    <div ref={firstRef} className={`container mx-auto leading-relaxed text-md md:text-lg`}>
      <div className="border-t border-[#020202] py-24 px-6">
        <div className={`flex flex-col space-y-7 transition-opacity   ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="flex flex-col space-y-3 items-center md:items-start">
            <div className="flex items-center space-x-4">
              <Image
                src={`/images/${imageSrc}`}
                width={60}
                height={60}
                alt="first work"
                className="rounded-lg bg-black"
              />
              <h1 className="text-2xl font-bold capitalize md:text-4xl">{project}</h1>
            </div>
            <div className="flex items-center space-x-1 text-lg">
              <p className="whitespace-nowrap">Visit at</p>
              <p>:</p>
              <Link className="link lowercase" href={href} target="blank">www.{project}.com</Link>
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
