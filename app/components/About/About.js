import Image from "next/image"
import { useRef } from "react"
import Link from "next/link"
import useIsVisible from "@/app/utils/useIsVisible"

const About = () => {
  const aboutRef = useRef();
  const isVisible = useIsVisible(aboutRef)

  return (
    <section ref={aboutRef} className={`py-32 flex flex-col items-center space-y-6 px-6 md:flex-row md:space-y-0 md:space-x-10 transition-opacity ease-in duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <div id="about" className="left text-md flex flex-col text-center space-y-5  leading-relaxed md:text-lg md:w-2/3 md:text-start">
        <h1 className="text-5xl font-semibold" >Hey there! <span className="text-5xl" role="img" aria-label="hello">👋</span></h1>
        <p> I'm a Frontend Developer with a passion for creating captivating web experiences.</p>
        <p>After working as an engineer in the field for several months, I realized that my true calling lay in web development. I've always been drawn to coding, software, and computers, and I decided to make a career change to pursue my passion.
        </p>
        <p>
          I successfully completed a 6-month immersive web development bootcamp at Re:Coded. This comprehensive program equipped me with 500+ hours of hands-on learning and project-based experience, reinforcing my passion for web development.
        </p>
        <p>
          With a background in Mechanical Engineering, I bring a unique perspective to my frontend work. My engineering education has taught me the value of organization, systematic thinking, and effective problem-solving.
        </p>
        <p>You can find me on:</p>
        <div className="logos flex items-center justify-center space-x-6 md:justify-start">
          <Link href='https://github.com/medetcandiler' target="_blank">
            <Image
              src={'/images/github.svg'}
              width={55}
              height={55}
              alt="github"
            />
          </Link>
          <Link href='https://www.linkedin.com/in/medetcandiler/' target="_blank">
            <Image
              src={'/images/linkedin.png'}
              width={60}
              height={60}
              alt="github"
            />
          </Link>
        </div>
        <div>
          <p>.. or send me an email at:
            <a href="mailto:medetdiler1996@gmail.com">medetdiler1996@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="right flex justify-center md:w-1/3">
        <div className="flex flex-col items-center space-y-6">
          <div className="w-[150px] h-[150px]">
            <Image
              src={'/images/medetpp.jpeg'}
              width={220}
              height={220}
              alt="medetcan profile picture"
              className="rounded-lg"
            />
          </div>
          <div className="">
            <Link
              href='/MEDETCANDILERCV.pdf'
              locale={false}
              className="btn"
              target="_blank"
            >
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
