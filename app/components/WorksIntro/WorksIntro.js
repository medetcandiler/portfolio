'use client'
import Image from "next/image";
import useIsVisible from "@/app/utils/useIsVisible";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";

const WorksIntro = () => {
  const isDark = useSelector(state => state.nav.isDark);
  const workRef = useRef();
  const isVisible = useIsVisible(workRef)
  const t = useTranslations('WorksIntro');
  return (
    <section id="work" ref={workRef}>
      <div className={`container mx-auto mt-[1px] pt-12 flex flex-col justify-center leading-relaxed text-center pb-28 px-6 observerTransition ${isVisible ? "opacity-100 md:translaye-y-0" : "opacity-0 md:-translate-y-5"}  md:text-start md:text-lg`}>
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
            <Image className="resizeImg" src="/images/html.svg" alt="js" width={80} height={80} />
            <Image className="resizeImg" src="/images/css.svg" alt="js" width={80} height={80} />
            <Image className="resizeImg" src="/images/js.svg" alt="js" width={80} height={80} />
            <Image className="resizeImg" src='images/typescript.svg' alt="ts" width={80} height={80} />
            <Image className="resizeImg" src={isDark ? "/images/nextjsdark.svg" : "/images/nextjs.svg"} alt="nextjs" width={80} height={80} />
            <Image className="resizeImg" src="/images/react.svg" alt="react" width={80} height={80} />
            <Image className="resizeImg" src="/images/tailwind.svg" alt="bootstrap" width={80} height={80} />
            <Image className="resizeImg" src="/images/firebase.svg" alt="css3" width={80} height={80} />
            <Image className="resizeImg" src="/images/redux.svg" alt="git" width={80} height={80} />
            <Image className="resizeImg" src="/images/reacthookform.svg" alt="reacthookform" width={80} height={80} />
            <Image className="resizeImg" src="/images/zod.svg" alt="zod" width={80} height={80} />
            <Image className="resizeImg" src="/images/bootstrap.svg" alt="html5" width={80} height={80} />
            <Image className="resizeImg" src="/images/mui.svg" alt="javascript" width={80} height={80} />
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
