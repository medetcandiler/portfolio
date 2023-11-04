'use client'
import Image from "next/image";
import { startTransition } from "react";
import { useState } from "react";
import { useTranslations } from "next-intl";

import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import LanguagePicker from "../LanguagePicker/Picker";

const Navbar = () => {
  const [selectedLang, setSelectedLang] = useState('en');
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

  const handleLocaleChange = (lang) => {
    setSelectedLang(lang);
    startTransition(() => {
      window.location.href = `/${lang}`
    })
  }
  return (
    <header className="relative container mx-auto px-8 flex justify-between items-center h-[80px] z-50 md:px-0">
      <div className="left">
        <Image
          className="cursor-pointer"
          src='/images/logo.png'
          width={82}
          height={82}
          alt="logo"
        />
      </div>
      <div className="hidden right  space-x-8 text-[16px] font-semibold md:flex">
        <button onClick={e => scrollToSection(e)} className="link">{t('work')}</button>
        <button onClick={e => scrollToSection(e)} className="link">{t('about')}</button>
        <button onClick={e => scrollToSection(e)} className="link">{t('lets')}</button>
      </div>
      <section className="md:hidden">
        <HamburgerMenu />
      </section>
      <LanguagePicker selectedLang={selectedLang} handleLocaleChange={handleLocaleChange} />
    </header>
  )
}

export default Navbar
