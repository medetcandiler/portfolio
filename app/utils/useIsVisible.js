'use client'
import { useEffect, useState } from "react"

const useIsVisible = (ref) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [transitionClasses, setTransitionClasses] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    })
    observer.observe(ref.current);
    return () => {
      observer.disconnect()
    }
  }, [ref])

  useEffect(() => {
    if (ref.current.classList.contains('herosection') || ref.current.classList.contains('about') || ref.current.classList.contains('contact') ) {
      setTransitionClasses(isIntersecting ? 'md:opacity-1  md:translate-x-0' : 'md:opacity-0 md:-translate-x-5')
    } else {
      setTransitionClasses(isIntersecting ? "md:opacity-100 md:translate-y-0" : "md:opacity-0 md:-translate-y-5")
    }
  }, [isIntersecting])

  return {
    isIntersecting,
    transitionClasses
  };
}

export default useIsVisible
