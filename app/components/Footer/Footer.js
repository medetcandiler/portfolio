'use client'
import useIsVisible from "@/app/utils/useIsVisible"
import { useRef } from "react";

const Footer = () => {
  const footerRef = useRef();
  const isVisible = useIsVisible(footerRef)
  return (
    <footer ref={footerRef} className={`pb-5 px-8 transition-opacity duration-700 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className='text-md font-medium text-center md:text-lg'> Copyright	 &copy; 2023 Medetcan Diler • All rights reserved</h1>
    </footer>
  )
}

export default Footer
