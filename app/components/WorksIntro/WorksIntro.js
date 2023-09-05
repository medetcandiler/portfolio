'use client'
import Image from "next/image"
import useIsVisible from "@/app/utils/useIsVisible"
import { useRef } from "react"

const WorksIntro = () => {
  const workRef = useRef();
  const isVisible = useIsVisible(workRef)
  return (
    <div id="work" ref={workRef} className={`container mx-auto mt-[0.5px] flex flex-col justify-center leading-relaxed text-center pb-28 px-6 transition-opacity ease-in duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}  md:text-start md:h-screen`}>
      <h3 className="text-4xl font-bold pb-10 md:text-6xl">Some of my work.</h3>
      <div className="flex flex-col space-y-6 text-md">
        <p>I'm thrilled about the creative process of bringing ideas to life through web development. With a background in mechanical engineering, I bring a unique perspective to frontend work, emphasizing organization, systematic thinking, and effective problem-solving.</p>
        <p>
          Specializing in React and Next.js, I craft captivating user interfaces, utilizing a wide array of modern web technologies. In my work as a web developer, my strongest quality is my open-mindedness and curiosity, which I bring to every project. These qualities drive me to analyze and solve complex problems with technology.
        </p>
      </div>
      <div className="py-10">
        <p className="pb-5">Here are some of the technologies I'm passionate about:</p>
        <div className="flex items-center justify-center flex-wrap gap-5 md:justify-start">
          <Image src="/images/nextjs.svg" alt="nextjs" width="80" height="80" />
          <Image src="/images/react.svg" alt="react" width="80" height="80" />
          <Image src="/images/js.svg" alt="git" width="80" height="80" />
          <Image src="/images/tailwind.svg" alt="bootstrap" width="80" height="80" />
          <Image src="/images/firebase.png" alt="css3" width="80" height="80" />
          <Image src="/images/redux.svg" alt="git" width="80" height="80" />
          <Image src="/images/bootstrap.svg" alt="html5" width="80" height="80" />
          <Image src="/images/mui.svg" alt="javascript" width="80" height="80" />
        </div>
      </div>
      <div>
        <p>Below, you'll find descriptions and links to some of the projects I've had the pleasure of working on. Each section will specify whether it's a personal project or one I've developed as part of the technology company I co-founded, SomethingNew.</p>
      </div>
    </div>
  )
}

export default WorksIntro
