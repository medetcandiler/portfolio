'use client'
import { useDispatch, useSelector } from "react-redux";
import { setShowMobileNav } from "@/app/redux/features/navSlice";

import styles from './HamburgerMenu.module.css'

const HamburgerMenu = () => {
  const showMobileNav = useSelector(state => state.nav.showMobileNav);
  const dispatch = useDispatch();
  const handleHamClick = () => {
    dispatch(setShowMobileNav());
  }


  const scrollToSection = (e) => {
    const section = e.target.textContent.split(`'`)[0].toLowerCase();
    if (typeof document !== "undefined") {
      const workSection = document.getElementById(`${section}`);
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    dispatch(setShowMobileNav())
  }

  return (
    <section className="hamburger">
      <div className={`${styles.container} ${showMobileNav && styles.change}`} onClick={handleHamClick}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>
      <div className={`absolute ease-in duration-300 left-0 w-full transition-all ${showMobileNav ? 'opacity-100 translaye-y-0' : 'opacity-0 -translate-y-1'}`}>
        <div className="flex flex-col items-center space-y-1.5 ">
          <button onClick={e => scrollToSection(e)}>Work</button>
          <button onClick={e => scrollToSection(e)}>About</button>
          <button onClick={e => scrollToSection(e)}>Let's talk</button>
        </div>
      </div>
    </section>
  )
}

export default HamburgerMenu;
