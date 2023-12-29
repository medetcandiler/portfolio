'use client'
import { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslations } from "next-intl";
import Background from "../Background/Background";

import styles from './HamburgerMenu.module.css'

const HamburgerMenu = () => {
  const [showMobileNav, setShowMobileNav] = useState(false)
  const isDark = useSelector(state => state.nav.isDark);
  const t = useTranslations('Navbar');

  const toggleBodyOverflow = () => {
    if (!showMobileNav) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }
  const handleHamClick = () => {
    setShowMobileNav(prev => !prev)
    toggleBodyOverflow()
  };

  const scrollToSection = (section) => {
    toggleBodyOverflow()
    if (typeof document !== "undefined") {
      const workSection = document.getElementById(`${section}`);
      if (workSection) {
        workSection.scrollIntoView({
          behavior: 'smooth',
          block: "start"
        });
      }
    }
    setShowMobileNav(prev => !prev)
  };
  return (
    <section className="hamburger md:hidden">
      <div onClick={handleHamClick} className={`${showMobileNav ? styles.change : ''} mr-2 cursor-pointer`}>
        <div className={`${styles.bar1} ${isDark && 'bg-[#f2f2f2]'}`}></div>
        <div className={`${styles.bar2} ${isDark && 'bg-[#f2f2f2]'}`}></div>
        <div className={`${styles.bar3} ${isDark && 'bg-[#f2f2f2]'}`}></div>
      </div>
      {showMobileNav && (
        <div className={`fixed left-0 top-0 w-full -z-10`}>
          <Background />
          <div className={`flex flex-col h-screen pb-[80px] w-full justify-center items-center text-[16px] font-bold space-y-20 bg-darkPurple px-8 py-1.5 ${isDark ? 'text-white' : 'text-black'}`}>
            <button className="text-4xl" onClick={e => scrollToSection('work')}>{t('work')}</button>
            <button className="text-4xl" onClick={e => scrollToSection('about')}>{t('about')}</button>
            <button className="whitespace-nowrap text-4xl" onClick={e => scrollToSection('let')}>{t('lets')}</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default HamburgerMenu;
