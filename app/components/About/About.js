'use client'
import Image from "next/image"
import { useRef } from "react"
import Link from "next/link"
import useIsVisible from "@/app/utils/useIsVisible"
import { useTranslations, useLocale } from "next-intl";
import { useSelector } from "react-redux"

const About = () => {
  const isDark = useSelector(state => state.nav.isDark);
  const aboutRef = useRef();
  const { isIntersecting, transitionClasses } = useIsVisible(aboutRef);
  const t = useTranslations('About');
  const locale = useLocale();
  return (
    <section>
      <div ref={aboutRef} className={`about flex flex-col items-center py-10 space-y-6 px-6 md:flex-row md:space-y-0 md:space-x-10 `}>
        <div id="about" className={`left text-md flex flex-col text-center space-y-5 leading-relaxed md:text-lg md:w-2/3 md:text-start observerTransition ${transitionClasses} `}>
          <h1 className="section-title font-semibold " >{t('HeyThere')} <span className="section-title" role="img" aria-label="hello">👋</span></h1>
          <p>{t('firstText')}</p>
          <p>{t('secondText')}</p>
          <p>{t('thirdText')}</p>
          <p>{t('fourthText')}</p>
          <p>{t('YouCanFindMeOn')}</p>
          <div className="logos flex items-center justify-center space-x-7 md:justify-start">
            <Link href='https://github.com/medetcandiler' target="_blank">
              <Image
                className="duration-300 ease-in hover:scale-110 text-red-300"
                src={isDark ? '/images/githubwhite.png' : '/images/github.svg'}
                width={55}
                height={55}
                alt="github"
              />
            </Link>
            <Link href='https://www.linkedin.com/in/medetcandiler/' target="_blank">
              <Image
                className="duration-300 ease-in hover:scale-110"
                src='/images/linkedin.png'
                width={60}
                height={60}
                alt="github"
              />
            </Link>
          </div>
          <div className="font-medium">
            <p>
              <span>{t('OrSendMeAnEmailAt')}</span>{' '}
              :{' '}
              <Link className="text-transparent bg-gradient-to-r from-[#4a2771] to-amber-600 bg-clip-text duration-300 ease-in hover:translate-y-[-3px] hover:opacity-80 dark:from-[#6b3e99] dark:to-amber-400" href="mailto:medetdiler1996@gmail.com">
                medetdiler1996@gmail.com
              </Link>
            </p>{' '}
          </div>
        </div>
        <div className={`right flex justify-center md:w-1/3 transition duration-500 ease-in ${isIntersecting ? 'md:opacity-1 md:translate-x-0' : 'md:opacity-0 md:translate-x-5'}`}>
          <div className="flex flex-col items-center space-y-6">
            <div className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px]">
              <Image
                src={'/images/medetpp.jpeg'}
                width={250}
                height={250}
                alt="medetcan profile picture"
                className="rounded-lg"
              />
            </div>
            <div className="">
              <a
                href={locale === 'tr' ? '/medetcandilercvtr.pdf' : '/medetcandilercv.pdf'}
                download
                target="_blank"
              >
                <button className="cvBtn">{t('DownloadCV')}</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default About;
