import useIsVisible from "@/app/utils/useIsVisible";
import { useRef } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from "react-hook-form";

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required()
}).required()

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => {
    console.log(data)
  }
  const contactRef = useRef();
  const isVisible = useIsVisible(contactRef);

  return (
    <div id="let" ref={contactRef} className={`py-20 flex flex-col space-y-12 justify-center md:h-screen md:flex-row md:space-y-0 md:space-x-12 md:items-center md:py-0 transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <div className="flex justify-center items-center">
        <div className="flex flex-col text-center md:text-start">
          <h1 className="text-xl font-semibold text-transparent bg-gradient-to-r from-[#4a2771]  to-amber-600 bg-clip-text md:text-2xl">Connect With Me</h1>
          <h2 className="text-4xl sm:text-5xl text-transparent bg-gradient-to-r from-[#4a2771]  to-amber-600 bg-clip-text md:text-6xl lg:whitespace-nowrap lg:text-7xl">Let's Collaborate</h2>
        </div>
      </div>
      <div className='right flex justify-center text-center md:w-1/2 md:text-start'>
        <form onSubmit={handleSubmit(onSubmit)} className="border border-[#4a2771] p-12 rounded-3xl shadow-[#4a2771] shadow-xl md:p-14 lg:p-20" >
          <div className="mb-4">
            <label
              htmlFor="password"
              className={`text-md font-semibold block md:text-lg ${errors.name && 'text-[#FF0000]'}`}
            >
              Your Name
            </label>
            <input
              {...register('name')}
              className={`bg-transparent  px-4 py-2 border-b border-black border-opacity-100 focus:outline-none ${errors.name && 'border-[#D40000] text-[#D40000]'}`}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className={`text-md font-semibold block md:text-lg ${errors.email && 'text-[#D40000]'}`}
            >
              Your Email
            </label>
            <input
              {...register('email')}
              className={`bg-transparent  px-4 py-2 border-b border-black border-opacity-100 focus:outline-none ${errors.email && 'border-[#D40000] text-[#D40000]'}`}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className={`text-md font-semibold block md:text-lg ${errors.message && 'text-[#D40000]'}`}
            >
              Your Message
            </label>
            <textarea
              {...register('message')}
              className={`bg-transparent  px-4 py-2 border-b border-black border-opacity-100 focus:outline-none ${errors.message && 'border-[#D40000] text-[#D40000]'}`}
            />
          </div>
          <div>
            <button type="submit" className="cvBtn ">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
