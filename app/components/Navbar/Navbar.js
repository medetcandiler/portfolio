'use client'
import Image from "next/image";
import { useState, startTransition } from "react";
import { useTranslations, useLocale } from "next-intl";

import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

const Navbar = () => {
  const locale = useLocale();
  const [selectedLang, setSelectedLang] = useState(locale);
  const t = useTranslations('Navbar');
  const scrollToSection = (section) => {
    if (typeof document !== "undefined") {
      const workSection = document.getElementById(`${section}`);
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  console.log(locale)
  const handleLocaleChange = (e) => {
    const newLang = e.target.value;
    setSelectedLang(newLang);
    window.location.href = `/${newLang}`
  };

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
        <button onClick={() => scrollToSection('work')} className="link">{t('work')}</button>
        <button onClick={() => scrollToSection('about')} className="link">{t('about')}</button>
        <button onClick={() => scrollToSection('let')} className="link">{t('lets')}</button>
      </div>
      <section className="md:hidden">
        <HamburgerMenu />
      </section>
      <div className="fixed z-50 top-[26px] right-6 md:top-6 md:right-5 lg:right-7 xl:right-16">
        <select className="bg-transparent" value={selectedLang} onChange={handleLocaleChange} name="picker">
          <option value="tr">tr</option>
          <option value="en">en</option>
        </select>
      </div>
    </header>
  )
}

export default Navbar
