'use client'
import Image from "next/image";
import useIsVisible from "@/app/utils/useIsVisible";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";

const imagesData = [
  { src: "/images/html.svg", className: "resizeImg", alt: "html" },
  { src: "/images/css.svg", className: "resizeImg", alt: "css" },
  { src: "/images/js.svg", className: "resizeImg", alt: "js" },
  { src: 'images/typescript.svg', className: "resizeImg", alt: "ts" },
  { src: "/images/nextjs.svg", className: "resizeImg", alt: "nextjs" },
  { src: "/images/react.svg", className: "resizeImg", alt: "react" },
  { src: "/images/tailwind.svg", className: "resizeImg", alt: "bootstrap" },
  { src: "/images/firebase.svg", className: "resizeImg", alt: "css3" },
  { src: "/images/redux.svg", className: "resizeImg", alt: "git" },
  { src: "/images/reacthookform.svg", className: "resizeImg", alt: "reacthookform" },
  { src: "/images/zod.svg", className: "resizeImg", alt: "zod" },
  { src: "/images/bootstrap.svg", className: "resizeImg", alt: "html5" },
  { src: "/images/mui.svg", className: "resizeImg", alt: "javascript" }
];


const WorksIntro = () => {
  const isDark = useSelector(state => state.nav.isDark);
  const workRef = useRef();
  const { transitionClasses } = useIsVisible(workRef)
  const t = useTranslations('WorksIntro');
  return (
    <section id="work" ref={workRef}>
      <div className={`container mx-auto mt-[1px] pt-10 flex flex-col justify-center leading-relaxed text-center pb-28 px-6 observerTransition ${transitionClasses}  md:text-start md:text-lg`}>
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
                className={image.className}
                src={image.src}
                width={80}
                height={80}
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
