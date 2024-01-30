'use client'
import { useSelector, useDispatch } from "react-redux";
import { setShowMobileNav } from "@/redux/features/navSlice";
import { useTranslations } from "next-intl";

import styles from './HamburgerMenu.module.css'

const HamburgerMenu = () => {
  const isDark = useSelector(state => state.nav.isDark);
  const showMobileNav = useSelector(state => state.nav.showMobileNav);
  const dispatch = useDispatch();
  const t = useTranslations('Navbar');

  const toggleBodyOverflow = () => {
    if (!showMobileNav) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }
  const handleHamClick = () => {
    dispatch(setShowMobileNav())
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
    dispatch(setShowMobileNav())
  };
  return (
    <section className="hamburger md:hidden">
      <div onClick={handleHamClick} className={`${showMobileNav ? styles.change : ''} mr-3 cursor-pointer`}>
        <div className={`${styles.bar1} ${isDark || showMobileNav ? 'bg-[#f2f2f2]' : ''}`}></div>
        <div className={`${styles.bar2} ${isDark || showMobileNav ? 'bg-[#f2f2f2]' : ''}`}></div>
        <div className={`${styles.bar3} ${isDark || showMobileNav ? 'bg-[#f2f2f2]' : ''}`}></div>
      </div>
      {showMobileNav && (
        <div className={`fixed left-0 top-0 w-full -z-10`}>
          <div className={`flex flex-col h-screen w-full justify-center items-center text-[16px] font-bold space-y-20 bg-darkPurple px-8 py-1.5 text-white`}>
            <div className="area z-0">
              <ul className="circles navCircle">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div >
            <button className="link text-4xl z-10" onClick={e => scrollToSection('work')}>{t('work')}</button>
            <button className="link text-4xl z-10" onClick={e => scrollToSection('about')}>{t('about')}</button>
            <button className="link whitespace-nowrap text-4xl z-10" onClick={e => scrollToSection('let')}>{t('lets')}</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default HamburgerMenu;
