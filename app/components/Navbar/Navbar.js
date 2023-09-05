'use client'
import Image from "next/image";
import Link from "next/link";
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
        <Link href='#work' onClick={e => handleSelectLink(e)} className={`link`}>Work</Link>
        <Link href='#about' onClick={e => handleSelectLink(e)} className={`link`}>About</Link>
        <Link href='#contact' onClick={e => handleSelectLink(e)} className={`link`}>Let's talk</Link>
      </div>
      <section className="md:hidden">
        <HamburgerMenu />
      </section>
    </header>
  )
}

export default Navbar
