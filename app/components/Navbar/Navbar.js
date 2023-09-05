'use client'
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

import { setSelectedLink } from "@/app/redux/features/navSlice";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

const Navbar = () => {
  const selectedLink = useSelector(state => state.nav.selectedLink);
  const dispatch = useDispatch();

  const handleSelectLink = (e) => {
    dispatch(setSelectedLink(e.target.textContent))
  }

  return (
    <header className="container mx-auto flex justify-between items-center h-[80px] z-50">
      <div className="left">
        <Image
          className="cursor-pointer"
          src='/images/logo.png'
          width={82}
          height={82}
          alt="logo"
        />
      </div>
      <div className="hidden right  space-x-12 text-lg font-semibold md:flex">
        <button onClick={e => handleSelectLink(e)} className={`${selectedLink === 'Work' ? 'selectedLink' : ''} link`}>Work</button>
        <button onClick={e => handleSelectLink(e)} className={`${selectedLink === 'About' ? 'selectedLink' : ''} link`}>About</button>
        <button onClick={e => handleSelectLink(e)} className={`${selectedLink === 'Let\'s talk' ? 'selectedLink' : ''} link`}>Let's talk</button>
      </div>
      <section className="md:hidden">
        <HamburgerMenu />
      </section>
    </header>
  )
}

export default Navbar
