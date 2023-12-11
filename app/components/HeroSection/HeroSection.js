'use client'
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslations, useLocale } from 'next-intl';

import useIsVisible from '@/app/utils/useIsVisible';
import { setTurnToNav } from '@/app/redux/features/navSlice';

const HeroSection = () => {
  const heroRef = useRef();
  const isVisible = useIsVisible(heroRef);
  const dispatch = useDispatch();
  const t = useTranslations('HeroSection');
  const locale = useLocale();
  useEffect(() => {
    if (isVisible) {
      dispatch(setTurnToNav(false));
    } else {
      dispatch(setTurnToNav(true));
    }
  }, [isVisible]);

  return (
    <section ref={heroRef} >
      <div className={`container mx-auto flex flex-col-reverse gap-2 h-screen-80 px-6 w-full  justify-center md:flex-row md:items-center md:space-x-4`}>
        <div className={`left w-full text-center flex flex-col space-y-3 md:space-y-6 md:w-3/5 md:text-start transition duration-500 ease-in ${isVisible ? 'opacity-1  md:translate-x-0' : 'opacity-0 md:-translate-x-5'}`}>
          <h1 className='text-4xl font-bold whitespace-nowrap lg:text-5xl xl:text-7xl'>Medetcan Diler</h1>
          <div className=' flex items-center justify-center space-x-2 font-medium md:justify-start text-2xl lg:text-4xl -mx-6 md:-mx-0 '>
            <p className='whitespace-nowrap'>{t('I am a')}</p>
            <span className='text-[#bea6d5] dark:text-[#9274c4]'>
              <Typewriter
                options={{
                  strings: [t('Frontend Developer'), t('Web Developer'), t('Mechanical Engineer')],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <p className='text-md leading-relaxed md:px-0  md:text-lg '>
            {t('heroSectionText')}
          </p>
          <div className='pt-1'>
            <Link
              href={locale === 'tr' ? '/medetcandilercvtr.pdf' : '/medetcandilercv.pdf'}
              locale={false}
              target='_blank'
            >
              <button className='cvBtn'>{t('Download CV')}</button>
            </Link>
          </div>
        </div>
        <div className={`right md:w-2/5 md:h-auto md:-mt-36 flex justify-center transition duration-500 ease-in-out ${isVisible ? 'opacity-1 md:translate-x-0' : 'opacity-0 md:translate-x-5'}`}>
          <Image
            className='rounded-full h-[130px] w-[130px] md:w-auto md:h-auto'
            src='/images/pp.png'
            width={400}
            height={400}
            alt='profile picture'
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
