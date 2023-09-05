'use client'
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
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

  const handleDownload = () => {
    const cvUrl = '/pdf/cv.pdf';
    const anchor = document.createElement('a');
    anchor.href = cvUrl;
    anchor.target = '_blank';
    anchor.download = 'cv.pdf';
    anchor.click();
  }

  return (
    <section ref={heroRef} className={`container mx-auto flex h-screen pb-[80px] px-6 w-full justify-center items-center space-x-4 transition-opacity ease-in duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <div className='left w-full text-center flex flex-col space-y-4 sm:space-y-6 md:w-3/5 md:text-start'>
        <h1 className='text-5xl font-bold md:text-6xl lg:text-7xl '>Medetcan Diler</h1>
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
        <div>
          <button onClick={handleDownload} className='text-start bg-[#6b3e99] px-4 py-3 rounded duration-300 ease-linear transform  text-[#fafafa] hover:bg-[#4a2771] hover:-translate-y-[3px]'>
            Download CV
          </button>
        </div>
      </div>
      <div className='hidden right w-2/5 -mt-36 md:flex md:justify-center md:items-center'>
        <Image
          className='rounded'
          src='/images/profile.png'
          width={300}
          height={300}
          alt='profile picture'
        />
      </div>
    </section>
  )
}

export default HeroSection
