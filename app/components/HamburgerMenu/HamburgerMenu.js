'use client'
import { useDispatch, useSelector } from "react-redux";
import { setShowMobileNav, setSelectedLink } from "@/app/redux/features/navSlice";
import Link from "next/link";

import styles from './HamburgerMenu.module.css'

const HamburgerMenu = () => {
  const selectedLink = useSelector(state => state.nav.selectedLink)
  const showMobileNav = useSelector(state => state.nav.showMobileNav);
  const dispatch = useDispatch();
  const handleHamClick = () => {
    dispatch(setShowMobileNav());
  }
  const handleSelectLink = (e) => {
    dispatch(setSelectedLink(e.target.textContent));
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
          <Link href='#work' onClick={e => handleSelectLink(e)} className={`link`}>Work</Link>
          <Link href='#about' onClick={e => handleSelectLink(e)} className={`link`}>About</Link>
          <Link href='#contact' onClick={e => handleSelectLink(e)} className={`link`}>Let's talk</Link>
        </div>
      </div>
    </section>
  )
}

export default HamburgerMenu;
