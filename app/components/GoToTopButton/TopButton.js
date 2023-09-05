import { BiUpArrowAlt } from 'react-icons/bi';
import { useRouter } from 'next/navigation';

const TopButton = () => {
  const { push } = useRouter();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setTimeout(() => {
      push('/')
    }, 300) 
  };
  return (
    <button onClick={scrollToTop} className={`fixed flex items-center justify-center z-90 bottom-4 right-1.5 border-2 w-10 h-10 rounded-full drop-shadow-md  border-[#6b3e99]  text-[#6b3e99] text-2xl ease-in duration-200 hover:-translate-y-[3px] hover:border-[#4a2771] hover:text-[#4a2771] md:bottom-8 md:right-8 md:w-12 md:h-12 md:w-12 `}>
      <BiUpArrowAlt />
    </button>
  )
}

export default TopButton
