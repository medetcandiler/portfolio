'use client'
import useIsVisible from "@/app/utils/useIsVisible"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"

const FirstWork = () => {
  const firstRef = useRef();
  const isVisible = useIsVisible(firstRef);

  return (
    <div ref={firstRef} className={`container mx-auto leading-relaxed`}>
      <div className="border-t border-[#020202]  py-24">
        <div className={`flex flex-col space-y-7 transition-opacity   ease-in duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="flex flex-col space-y-3 items-center md:items-start">
            <div className="flex items-center space-x-4">
              <Image
                src={'/images/givingly.jpeg'}
                width={60}
                height={60}
                alt="first work"
                className="rounded-lg"
              />
              <h1 className="text-4xl font-bold">Givingly </h1>
            </div>
            <div className="flex items-center space-x-1 text-lg">
              <p>Visit at</p>
              <p>:</p>
              <Link href="https://crowdfunding-app-team-9-akej.vercel.app/">www.givingly.com/</Link>
            </div>
          </div>
          <div>
            <p className="text-center md:text-start">
              This project aims to create a robust crowdfunding platform that connects passionate individuals and innovative projects with a community of potential backers. The website provides a user-friendly and secure space where project creators can showcase their ideas, raise funds, and engage with supporters. With a focus on transparency and impact, our platform empowers individuals, nonprofits, and startups to bring their visions to life through collective financial contributions.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 justify-center space-x-6 md:justify-start">
            <Image
              src={'/images/nextjs.svg'}
              width={80}
              height={80}
              alt="nextjs logo"
            />
            <Image
              src={'/images/tailwind.svg'}
              width={80}
              height={80}
              alt="nextjs logo"
            />
            <Image
              src={'/images/redux.svg'}
              width={80}
              height={80}
              alt="nextjs logo"
            />
            <Image
              src={'/images/firebase.png'}
              width={80}
              height={80}
              alt="nextjs logo"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstWork
