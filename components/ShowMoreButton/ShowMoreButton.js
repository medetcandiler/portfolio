import { useRef } from "react";
import useIsVisible from "@/utils/useIsVisible";
import { MdExpandLess } from 'react-icons/md';
import { TfiMoreAlt } from 'react-icons/tfi';


const ShowMoreButton = ({ isMoreClicked, setIsMoreClicked }) => {
  const buttonRef = useRef();
  const isVisible = useIsVisible(buttonRef);
  const handleMoreButton = () => {
    setIsMoreClicked(prev => !prev)
  }
  return (
    <div ref={buttonRef} className={`-mt-5  text-center `} >
      <button onClick={handleMoreButton} className={`text-4xl animate-bounce observerTransition ${isVisible ? 'opacity-100' : 'opacity-0'} hover:opacity-70`}>
        {isMoreClicked ? <MdExpandLess /> : <TfiMoreAlt />}
      </button>
    </div>
  )
}

export default ShowMoreButton
