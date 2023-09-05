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

  const scrollToWorkSection = (e) => {
    if (typeof document !== "undefined") {
      const workSection = document.getElementById(`${e.target.textContent.toLowerCase()}`);
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  return (
    <section className="hamburger">
      <div className={`${styles.container} ${showMobileNav && styles.change}`} onClick={handleHamClick}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>
      <div className={`absolute ease-in duration-200 left-0 w-full transition-all duration-800 ${showMobileNav ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center space-y-1.5 ">
          <button onClick={e => scrollToWorkSection(e)}>Work</button>
          <button onClick={e => scrollToWorkSection(e)}>About</button>
          <button onClick={e => scrollToWorkSection(e)}>Let's talk</button>
        </div>
      </div>
    </section>
  )
}

export default HamburgerMenu;
