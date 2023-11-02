import useIsVisible from "@/app/utils/useIsVisible";
import { useRef, useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";

import { db } from "@/app/firebase/config";
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
  const onSubmit = async (data) => {
    try {
      setIsSending(true)
      await addDoc(collection(db, 'messages'), {
        data
      });
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
  const isVisible = useIsVisible(contactRef);

  return (
    <div id="let" ref={contactRef} >
      <div className={`relative py-28 flex flex-col space-y-12 justify-center md:h-screen md:flex-row md:space-y-0 md:space-x-12 md:items-center md:py-0`}>
        <div className={`flex justify-center items-center transition-all duration-500 ease-in ${isVisible ? 'opacity-1 md:translate-x-0' : 'opacity-0 -translate-y-5 md:-translate-x-5'}`}>
          <div className="flex flex-col text-center md:text-start">
            <h1 className="text-xl font-semibold text-transparent bg-gradient-to-r from-[#4a2771]  to-amber-600 bg-clip-text md:text-2xl">Connect With Me</h1>
            <h2 className="text-4xl sm:text-5xl text-transparent bg-gradient-to-r from-[#4a2771]  to-amber-600 bg-clip-text md:text-6xl lg:whitespace-nowrap lg:text-7xl">Let's Collaborate</h2>
          </div>
        </div>
        <div className={`right flex justify-center text-center md:w-1/2 md:text-start transition-all duration-500 ease-in ${isVisible ? 'opacity-1 md:translate-x-0' : 'opacity-0 -translate-y-5 md:translate-x-5'}`}>
          <form onSubmit={handleSubmit(onSubmit)} className="border border-[#4a2771] p-10 rounded-3xl shadow-[#4a2771] shadow-xl md:p-14 lg:p-20" >
            <div className="mb-4">
              <label
                htmlFor="name"
                className={`text-md font-semibold block md:text-lg ${errors.name && 'text-[#D40000]'}`}
              >
                Your Name
              </label>
              <input
                id="name"
                {...register('name')}
                className={`bg-transparent  px-4 py-2 border-b border-black border-opacity-100 focus:outline-none ${errors.name && 'border-[#D40000] text-[#D40000]'}`}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className={`text-md font-semibold block md:text-lg ${errors.email && 'text-[#D40000]'}`}
              >
                Your Email
              </label>
              <input
                id="email"
                {...register('email')}
                className={`bg-transparent  px-4 py-2 border-b border-black border-opacity-100 focus:outline-none ${errors.email && 'border-[#D40000] text-[#D40000]'}`}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className={`text-md font-semibold block md:text-lg ${errors.message && 'text-[#D40000]'}`}
              >
                Your Message
              </label>
              <textarea
                id="message"
                {...register('message')}
                className={`bg-transparent  px-4 py-2 border-b border-black border-opacity-100 focus:outline-none ${errors.message && 'border-[#D40000] text-[#D40000]'}`}
              />
            </div>
            <div className="flex justify-center md:justify-start">
              <button type="submit" className="cvBtn flex items-center ">
                {isSending && <Spinner />} Send Message
              </button>
            </div>
          </form>
          <Toast message={'Message delivered successfully.'} isShowToast={isShowToast} setIsShowToast={setIsShowToast} />
        </div>
      </div>
    </div>
  )
}

export default Contact
