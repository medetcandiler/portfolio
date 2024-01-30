import useIsVisible from "@/utils/useIsVisible";
import { useRef, useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import emailjs from '@emailjs/browser';

import Spinner from "../Spinner/Spinner";
import Toast from "../Toast/Toast";

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required()
}).required()

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [isShowToast, setIsShowToast] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  emailjs.init('49EQMlcq2BdXR7HqC');

  const onSubmit = async (data) => {
    try {
      setIsSending(true)
      await emailjs.send("service_jd6yire", "portfolio-form", data);
      setIsShowToast(true);
    } catch (error) {
      console.log(error.message);
    } finally {
      reset();
      setIsSending(false);
      setTimeout(() => {
        setIsShowToast(false)
      }, 5000)
    }

  }
  const contactRef = useRef();
  const isIntersecting = useIsVisible(contactRef);
  const t = useTranslations('Contact');
  return (
    <section ref={contactRef} id="let" className={`special relative py-10 flex flex-col space-y-8 justify-center lg:flex-row lg:space-y-0 md:space-x-12 md:items-center md:py-36`}>
      <div className={`flex justify-center items-center observerTransition ${isIntersecting
        ? `md:opacity-1 md:translate-y-0`
        : `md:opacity-0 md:-translate-y-5`}`}>
        <div className="flex flex-col text-center lg:text-start">
          <h1 className="text-xl font-semibold gradientText  md:text-2xl">{t('ConnectWithMe')}</h1>
          <h2 className="text-4xl sm:text-5xl gradientText md:text-6xl whitespace-nowrap lg:text-7xl">{t('LetsCollaborate')}</h2>
        </div>
      </div>  
      <div className={`right flex text-md justify-center text-start md:w-1/2 md:text-start observerTransition ${isIntersecting ? 'md:opacity-1 md:translate-y-0' : 'md:opacity-0 md:-translate-y-5'}`}>
        <form onSubmit={handleSubmit(onSubmit)} className="border border-[#4a2771] p-14  rounded-3xl shadow-[#4a2771] shadow-xl lg:p-20 lg:py-24 dark:shadow-[#8a5dbd] dark:border-[#8a5dbd]" >
          <div className="relative z-0 w-full md:w-[200px] mb-10 group">
            <input
              type="text"
              id="name"
              className={`block py-2.5 px-0 w-full md:w-[200px] bg-transparent border-b appearance-none focus:outline-none focus:ring-0 peer ${errors.name ? 'border-[#D40000] dark:border-[#FF8080]' : 'border-black dark:border-slate-100'
                }`}
              placeholder=" "
              {...register("name")}
            />
            <label
              htmlFor="name"
              className={`peer-focus:font-medium pl-2 absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6  ${errors.name && "peer-focus:text-[#D40000] text-[#D40000] dark:peer-focus:text-[#FF8080] dark:text-[#FF8080]"
                }`}
            >
              {t('YourName')}
            </label>
          </div>
          <div className="relative z-0 w-full mb-10 group">
            <input
              type="text"
              id="email"
              className={`block py-2.5 px-0 w-full  bg-transparent border-b appearance-none   focus:outline-none focus:ring-0  peer ${errors.email ? 'border-[#D40000] dark:border-[#FF8080]' : 'border-black dark:border-slate-100'
                }`}
              placeholder=" "
              {...register("email")}
            />
            <label
              htmlFor="email"
              className={`peer-focus:font-medium pl-2 absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6  ${errors.email && "peer-focus:text-[#D40000] text-[#D40000] dark:peer-focus:text-[#FF8080] dark:text-[#FF8080]"
                }`}
            >
              {t('YourEmail')}
            </label>
          </div>
          <div className="relative z-0 w-full mb-10 group">
            <input
              type="text"
              id="message"
              className={`block py-2.5 px-0 w-full  bg-transparent border-b appearance-none   focus:outline-none focus:ring-0  peer ${errors.message ? 'border-[#D40000] dark:border-[#FF8080]' : 'border-black dark:border-slate-100'
                }`}
              placeholder=" "
              {...register("message")}
              autoComplete="off"
            />
            <label
              htmlFor="message"
              className={`peer-focus:font-medium pl-2 absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6  ${errors.message && "peer-focus:text-[#D40000] text-[#D40000] dark:peer-focus:text-[#FF8080] dark:text-[#FF8080]"
                }`}
            >
              {t('YourMessage')}
            </label>
          </div>
          <div className="flex justify-center md:justify-start">
            <button type="submit" className="cvBtn flex items-center z-50">
              {isSending && <Spinner />} {t('SendMessage')}
            </button>
          </div>
        </form>
        <div>
          <Toast message={'Message delivered successfully.'} isShowToast={isShowToast} setIsShowToast={setIsShowToast} />
        </div>
      </div>
    </section>
  )
}

export default Contact;