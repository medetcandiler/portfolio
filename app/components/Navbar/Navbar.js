'use client'
import Image from "next/image";
import { startTransition } from "react";
import { useTranslations } from "next-intl";

import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

const Navbar = () => {
  const t = useTranslations('Navbar');
  const scrollToSection = (e) => {
    const section = e.target.textContent.split(`'`)[0].toLowerCase();
    if (typeof document !== "undefined") {
      const workSection = document.getElementById(`${section}`);
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
  return (
    <header className="relative container mx-auto flex justify-between items-center h-[80px] z-50">
      <div className="left">
        <Image
          className="cursor-pointer"
          src='/images/logo.png'
          width={82}
          height={82}
          alt="logo"
        />
      </div>
      <div className="hidden right  space-x-8 text-[17px] font-semibold md:flex">
        <button onClick={e => scrollToSection(e)} className="link">{t('work')}</button>
        <button onClick={e => scrollToSection(e)} className="link">{t('about')}</button>
        <button onClick={e => scrollToSection(e)} className="link">{t('lets')}</button>
      </div>
      <section className="md:hidden">
        <HamburgerMenu />
      </section>
      <div className="absolute left-1/2 flex space-x-3">
        <button onClick={(e) => {
          console.log(e.target.textContent);
          startTransition(() => {
            window.location.href = `/${e.target.textContent}`
          })
        }}>tr</button>
        <button onClick={(e) => {
            startTransition(() => {
              window.location.href = `/${e.target.textContent}`
            })
        }}>en</button>
      </div>
    </header>
  )
}

export default Navbar
