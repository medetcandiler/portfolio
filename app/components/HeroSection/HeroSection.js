'use client'
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslations, useLocale } from 'next-intl';

import useIsVisible from '@/app/utils/useIsVisible';
import { setTurnToNav } from '@/app/redux/features/navSlice';

const HeroSection = () => {
  const heroRef = useRef();
  const { transitionClasses, isIntersecting } = useIsVisible(heroRef);
  const dispatch = useDispatch();
  const t = useTranslations('HeroSection');
  const locale = useLocale();
  useEffect(() => {
    if (isIntersecting) {
      dispatch(setTurnToNav(false));
    } else {
      dispatch(setTurnToNav(true));
    }
  }, [isIntersecting]);

  return (
    <section ref={heroRef} className='herosection' >
      <div className={`container mx-auto flex flex-col-reverse gap-4 h-screen-80 px-6 w-full  justify-center md:flex-row md:items-center md:space-x-4 md:pb-[80px]`}>
        <div className={`left w-full text-center flex flex-col space-y-3 md:space-y-6 md:w-3/5 md:text-start observerTransition  ${transitionClasses}`}>
          <h1 className='text-4xl font-bold lg:text-5xl xl:text-7xl whitespace-nowrap'>Medetcan Diler</h1>
          <div className=' flex items-center justify-center space-x-2 font-medium md:justify-start text-2xl lg:text-4xl -mx-6 md:-mx-0 '>
            <p className='whitespace-nowrap'>{t('I am a')}</p>
            <span className='text-[#6b3e99] dark:text-[#9274c4] whitespace-nowrap'>
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
            <a
              href={locale === 'tr' ? '/medetcandilercvtr.pdf' : '/medetcandilercv.pdf'}
              download
              target='_blank'
            >
              <button className='cvBtn'>{t('Download CV')}</button>
            </a>
          </div>
        </div>
        <div className={`right flex justify-center md:w-2/5 md:h-auto md:-mt-36 observerTransition ${isIntersecting ? 'md:opacity-1  md:translate-x-0' : 'md:opacity-0 md:translate-x-5'}`}>
          <Image
            className='rounded-full h-[150px] w-[150px] md:w-auto md:h-auto'
            src='/images/pp.png'
            width={400}
            height={400}
            alt='profile picture'
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
