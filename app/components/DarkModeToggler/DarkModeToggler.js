'use client'
import { useState, useEffect } from 'react';
import { MdLightMode, MdNightlight } from 'react-icons/md';


const DarkModeToggler = () => {
  const [isDark, setIsDark] = useState(false);
  // const [theme, setTheme ] = useState(false ? 'light' : 'dark');
  const theme = isDark ? 'dark' : 'light';
  useEffect(() => {
    const root = window.document.documentElement;
    theme === 'dark' ? root.classList.add('dark') : root.classList.remove('dark');
  }, [theme, isDark])

  console.log(theme)
  const toggle = () => {
    setIsDark(prev => !prev)
  }
  return (
    <button
      onClick={toggle}
      className={`transition duration-300 ease-in hover:-translate-y-[3px] ${isDark ? 'bg-[#6b3e99] hover:bg-[#8a5dbd]' : 'bg-[#8a5dbd] hover:bg-[#9274c4]'
        } p-2 rounded-full`}
    >
      {isDark ? <MdNightlight fill='gray' size={50} /> : <MdLightMode fill='white' size={50} />}
    </button>
  )
}

export default DarkModeToggler
