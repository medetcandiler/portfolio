'use client'
import Image from "next/image";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useSelector } from "react-redux";

import LanguagePicker from "../LanguagePicker/LanguagePicker";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { scrollToSection } from "@/app/utils/scrollToSection";

const Navbar = () => {
  const isDark = useSelector(state => state.nav.isDark);
  const locale = useLocale();
  const [selectedLang, setSelectedLang] = useState(locale);
  const t = useTranslations('Navbar');

  const handleLocaleChange = (lang) => {
    setSelectedLang(lang);
    window.location.href = `/${lang}`
  };

  return (
    <header className="relative container mx-auto px-6 flex justify-between items-center h-[80px] z-50 md:px-0">
      <div className="left">
        <Image
          className="cursor-pointer -ml-3 md:-ml-0"
          src={isDark ? '/images/logowhite.svg' : '/images/logo.png'}
          width={isDark ? 100 : 82}
          height={isDark ? 100 : 82}
          alt="logo"
          priority
        />
      </div>
      <div className="hidden right  space-x-8 text-[16px] font-semibold md:flex">
        <button onClick={() => scrollToSection('work')} className="link">{t('work')}</button>
        <button onClick={() => scrollToSection('about')} className="link">{t('about')}</button>
        <button onClick={() => scrollToSection('let')} className="link">{t('lets')}</button>
      </div>
      <HamburgerMenu />
      <LanguagePicker handleLocaleChange={handleLocaleChange} selectedLang={selectedLang} />
    </header>
  )
}

export default Navbar
