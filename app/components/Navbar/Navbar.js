'use client'
import Image from "next/image";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

import LanguagePicker from "../LanguagePicker/LanguagePicker";
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

  const handleLocaleChange = (lang) => {
    setSelectedLang(lang);
    window.location.href = `/${lang}`
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

      <LanguagePicker handleLocaleChange={handleLocaleChange} selectedLang={selectedLang} />
    </header>
  )
}

export default Navbar
