'use client'
import useIsVisible from "@/utils/useIsVisible"
import { useRef } from "react";
import { useTranslations } from "next-intl";

const Footer = () => {
  const footerRef = useRef();
  const isIntersecting = useIsVisible(footerRef);
  const t = useTranslations('Footer');
  return (
    <footer ref={footerRef} className={`pb-5 pt-10 observerTransition ${isIntersecting ? 'md:opacity-1 md:translate-y-0' : 'md:opacity-0 md:-translate-y-5'}`}>
      <h1 className='text-md font-medium text-center md:text-lg'> Copyright	 &copy; 2023 Medetcan Diler • {t('AllRightsReserved')}</h1>
    </footer>
  )
}

export default Footer
