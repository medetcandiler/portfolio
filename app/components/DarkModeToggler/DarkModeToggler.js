'use client'
import { useState, useEffect } from 'react';
import { MdLightMode, MdNightlight } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { setIsDark } from '@/app/redux/features/navSlice';


const DarkModeToggler = () => {
  const isDark = useSelector(state => state.nav.isDark);
  const dispatch = useDispatch();
  console.log(isDark)
  const theme = isDark ? 'dark' : 'light';

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme, isDark])

  const toggle = () => {
    dispatch(setIsDark())
  }
  return (
    <button
      onClick={toggle}
      className={`fixed left-10 z-10 bottom-10 transition duration-300 ease-in hover:-translate-y-[3px] text-slate-300 ${isDark ? 'bg-[#6b3e99] hover:bg-[#8a5dbd]' : 'bg-[#8a5dbd] hover:bg-[#9274c4]'
        } p-2 rounded-full`}
    >
      {isDark ? <MdNightlight size={40} /> : <MdLightMode fill='white' size={40} />}
    </button>
  )
}

export default DarkModeToggler
