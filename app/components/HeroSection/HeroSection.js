'use client'
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';


import useIsVisible from '@/app/utils/useIsVisible';
import { setTurnToNav } from '@/app/redux/features/navSlice';

const HeroSection = () => {
  const heroRef = useRef();
  const isVisible = useIsVisible(heroRef);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isVisible) {
      dispatch(setTurnToNav(false));
    } else {
      dispatch(setTurnToNav(true));
    }
  }, [isVisible])


  return (
    <section ref={heroRef} >
      <div className={`container mx-auto flex h-screen-80 px-6 w-full justify-center items-center space-x-4`}>
        <div className={`left w-full text-center flex flex-col space-y-3 md:space-y-6 md:w-3/5 md:text-start transition-all duration-300 ease-in ${isVisible ? 'opacity-1 translate-y-0 md:translate-x-0' : 'opacity-0 -translate-y-5 md:-translate-x-5 md:translate-y-0'}`}>
          <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl'>Medetcan Diler</h1>
          <div className=' flex items-center justify-center space-x-2 text-2xl font-medium md:text-2xl md:justify-start lg:text-4xl -mx-6 md:-mx-0 '>
            <p className='whitespace-nowrap'>I am a</p>
            <span className='text-[#6b3e99]'>
              <Typewriter
                options={{
                  strings: ['Frontend Developer', 'Web Developer', 'Mechanical Engineer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <p className='text-md leading-relaxed md:px-0  md:text-lg '>
            Specializing in frontend development, I deliver efficient solutions with a keen eye for detail and a knack for creative problem-solving. I thrive both independently and in collaborative team settings, dedicated to website development and a commitment to continuous improvement.
          </p>
          <div className='pt-1'>
            <Link
              href='/medetcandilercv.pdf'
              locale={false}
              target='_blank'
            >
              <button className='cvBtn'>Download CV</button>
            </Link>
          </div>
        </div>
        <div className={`hidden right w-2/5 -mt-36 md:flex md:justify-center md:items-center transition-all duration-300 ease-in-out ${isVisible ? 'opacity-1 translate-y-0 md:translate-x-0' : 'opacity-0 -translate-y-5 md:translate-x-5 md:translate-y-0'}`}>
          <Image
            className='rounded'
            src='/images/profile.png'
            width={300}
            height={300}
            alt='profile picture'
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
