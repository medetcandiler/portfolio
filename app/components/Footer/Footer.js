'use client'
import useIsVisible from "@/app/utils/useIsVisible"
import { useRef } from "react";
import { useTranslations } from "next-intl";

const Footer = () => {
  const footerRef = useRef();
  const isVisible = useIsVisible(footerRef);
  const t = useTranslations('Footer');
  return (
    <footer ref={footerRef} className={`pb-5 px-8 transition-opacity duration-500 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className='text-md font-medium text-center md:text-lg'> Copyright	 &copy; 2023 Medetcan Diler • {t('AllRightsReserved')}</h1>
    </footer>
  )
}

export default Footer
