import { useEffect, useState } from "react"

const useIsVisible = (ref) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [transitionClasses, setTransitionClasses] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, {threshold : 0.1})
    observer.observe(ref.current);
    return () => {
      observer.disconnect()
    }
  }, [ref])

  useEffect(() => {
    const transitions = {
      default: isIntersecting ? "md:opacity-100 md:translate-y-0" : "md:opacity-0 md:-translate-y-5",
      special: isIntersecting ? 'md:opacity-1  md:translate-x-0' : 'md:opacity-0 md:-translate-x-5'
    };
    if (ref.current.classList.contains('special')) {
      setTransitionClasses(transitions.special);
    } else {
      setTransitionClasses(transitions.default);
    }
  }, [isIntersecting])

  return {
    isIntersecting,
    transitionClasses
  };
}

export default useIsVisible
