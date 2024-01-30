'use client'
import Image from "next/image";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import useIsVisible from "@/utils/useIsVisible";

const WorksIntro = () => {
  const isDark = useSelector(state => state.nav.isDark);
  const workRef = useRef();
  const isIntersecting = useIsVisible(workRef);
  const t = useTranslations('WorksIntro');

  const imagesData = [
    { src: "/images/html.svg", className: "resizeImg", alt: "html" },
    { src: "/images/css.svg", className: "resizeImg", alt: "css" },
    { src: "/images/js.svg", className: "resizeImg", alt: "js" },
    { src: 'images/typescript.svg', className: "resizeImg", alt: "ts" },
    { src: `${isDark ? '/images/nextjsdark.svg' : '/images/nextjs.svg'}`, className: "resizeImg", alt: "nextjs" },
    { src: "/images/react.svg", className: "resizeImg", alt: "react" },
    { src: "/images/tailwind.svg", className: "resizeImg", alt: "bootstrap" },
    { src: "/images/firebase.svg", className: "resizeImg", alt: "css3" },
    { src: "/images/redux.svg", className: "resizeImg", alt: "git" },
    { src: "/images/reacthookform.svg", className: "resizeImg", alt: "reacthookform" },
    { src: "/images/zod.svg", className: "resizeImg", alt: "zod" },
    { src: "/images/bootstrap.svg", className: "resizeImg", alt: "html5" },
    { src: "/images/mui.svg", className: "resizeImg", alt: "javascript" }
  ];

  return (
    <section id="work" ref={workRef}>
      <div className={`container mx-auto pt-10 flex flex-col justify-center leading-relaxed text-center pb-28 md:text-start md:text-lg observerTransition ${isIntersecting ? 'md:opacity-1 md:translate-y-0' : 'md:opacity-0 md:-translate-y-5'}`}>
        <h3 className="section-title font-bold pb-4 md:pb-6 ">{t('SomeOfMyWork')}</h3>
        <div className="flex flex-col space-y-4 text-md md:space-y-6">
          <p>{t('firstText')}</p>
          <p>
            {t('secondText')}
          </p>
        </div>
        <div className="py-6">
          <p className="pb-6">{t('thirdText')}</p>
          <div className="flex items-center justify-center flex-wrap gap-10 md:justify-start">
            {imagesData.map((image) => (
              <Image
                key={image.alt}
                className={`${image.className} w-[80px] h-[80px]`}
                src={image.src}
                width={0}
                height={0}
                alt={image.alt}
                priority
              />
            ))}
          </div>
        </div>
        <div>
          <p>{t('fourthText')}</p>
        </div>
      </div>
    </section>
  )
}

export default WorksIntro
