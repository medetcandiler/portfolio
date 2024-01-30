import { BiUpArrowAlt } from 'react-icons/bi';

const TopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed z-50 flex bg-transparentPurple items-center justify-center bottom-8 right-4 border-2 w-10 h-10 rounded-full drop-shadow-md border-[#6b3e99] text-[#6b3e99] text-2xl ease-in duration-200 hover:-translate-y-[3px] hover:border-purple-700 hover:text-purple-700 hover:bg-hoverPurple md:bottom-10 md:right-10 dark:border-[#8a5dbd] dark:text-[#8a5dbd] transition-all`}
      >
      <BiUpArrowAlt />
    </button>
  );
};

export default TopButton;
