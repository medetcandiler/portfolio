'use client'
import Image from "next/image";

import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

const Navbar = () => {
  const scrollToWorkSection = (e) => {
    if (typeof document !== "undefined") {
      const workSection = document.getElementById(`${e.target.textContent.toLowerCase()}`);
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth" });
      }
    }
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
        <button onClick={e => scrollToWorkSection(e)}>Work</button>
        <button onClick={e => scrollToWorkSection(e)}>About</button>
        <button onClick={e => scrollToWorkSection(e)}>Let's talk</button>
      </div>
      <section className="md:hidden">
        <HamburgerMenu />
      </section>
    </header>
  )
}

export default Navbar
