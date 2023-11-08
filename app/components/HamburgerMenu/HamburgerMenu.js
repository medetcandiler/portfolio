'use client'
import { useDispatch, useSelector } from "react-redux";
import { setShowMobileNav } from "@/app/redux/features/navSlice";
import { useTranslations } from "next-intl";

import styles from './HamburgerMenu.module.css'

const HamburgerMenu = () => {
  const showMobileNav = useSelector(state => state.nav.showMobileNav);
  const isDark = useSelector(state => state.nav.isDark);
  const dispatch = useDispatch();
  const t = useTranslations('Navbar');
  const handleHamClick = () => {
    dispatch(setShowMobileNav());
  };
  const scrollToSection = (section) => {
    if (typeof document !== "undefined") {
      const workSection = document.getElementById(`${section}`);
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    dispatch(setShowMobileNav())
  };
  return (
    <section className="hamburger">
      <div className={`${styles.container} ${showMobileNav && styles.change}`} onClick={handleHamClick}>
        <div className={`${styles.bar1} ${isDark && 'bg-[#f2f2f2]'}`}></div>
        <div className={`${styles.bar2} ${isDark && 'bg-[#f2f2f2]'}`}></div>
        <div className={`${styles.bar3} ${isDark && 'bg-[#f2f2f2]'}`}></div>
      </div>
      <div className={`absolute ease-in duration-300 left-0 w-full transition-all ${showMobileNav ? 'opacity-100 translaye-y-0' : 'opacity-0 -translate-y-1'}`}>
        {showMobileNav && <div className="flex flex-col items-center text-[14px] space-y-1.5 ">
          <button onClick={e => scrollToSection('work')}>{t('work')}</button>
          <button onClick={e => scrollToSection('about')}>{t('about')}</button>
          <button onClick={e => scrollToSection('let')}>{t('lets')}</button>
        </div>}
      </div>
    </section>
  )
}

export default HamburgerMenu;
