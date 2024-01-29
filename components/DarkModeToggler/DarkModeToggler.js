'use client'
import { useEffect } from 'react';
import { MdLightMode, MdNightlight } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { setIsDark } from '@/redux/features/navSlice';

const DarkModeToggler = () => {
  const isDark = useSelector(state => state.nav.isDark);
  const dispatch = useDispatch();
  const theme = isDark ? 'dark' : 'light';

  useEffect(() => {
    const storedIsDark = JSON.parse(localStorage.getItem('isDark'));
    dispatch(setIsDark(storedIsDark !== null ? storedIsDark : true));
  }, [])

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('isDark', JSON.stringify(isDark));
  }, [theme, isDark])

  const toggle = () => {
    if (isDark === true) {
      dispatch(setIsDark(false))
    } else {
      dispatch(setIsDark(true))
    }
  }

  return (
    <button
      onClick={toggle}
      className={`fixed z-50 left-4 bottom-8 transition duration-300 ease-in hover:-translate-y-[3px] text-white  ${isDark ? ' bg-[#8a5dbd] hover:bg-[#9274c4]' : 'bg-[#6b3e99] hover:bg-[#8a5dbd]'
        } p-3 rounded-full md:left-10 md:bottom-10 opacity-60`}
    >
      {isDark ? <MdNightlight size={35} /> : <MdLightMode size={35} />}
    </button>
  )
}

export default DarkModeToggler
