import Image from "next/image"


const Contact = () => {
  return (
    <div className="py-20 flex flex-col space-y-12 justify-center md:h-screen md:flex-row md:space-y-0 md:space-x-12 md:items-center md:py-0">
      <div className="flex justify-center items-center">
        <div className="flex flex-col text-center md:text-start">
          <h1 className="text-xl font-semibold text-transparent bg-gradient-to-r from-[#4a2771]  to-amber-600 bg-clip-text md:text-2xl">Connect With Me</h1>
          <h2 className="text-4xl sm:text-5xl text-transparent bg-gradient-to-r from-[#4a2771]  to-amber-600 bg-clip-text md:text-6xl lg:text-7xl">Let's Collaborate</h2>
        </div>
      </div>
      <div className='right flex justify-center text-center md:w-1/2 md:text-start'>
        <form className="border border-[#4a2771] p-12 rounded-3xl shadow-[#4a2771] shadow-xl md:p-14 lg:p-20" >
          <div className="mb-4">
            <label
              htmlFor="password"
              className="text-md font-semibold block md:text-lg"
            >
              Your Name
            </label>
            <input
              className="bg-transparent  px-4 py-2 border-b border-black border-opacity-100 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="text-md font-semibold block md:text-lg "
            >
              Your Email
            </label>
            <input
              className="bg-transparent  px-4 py-2 border-b border-black border-opacity-100 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="text-md font-semibold block md:text-lg "
            >
              Your Message
            </label>
            <textarea
              className="bg-transparent  px-4 py-2 border-b border-black border-opacity-100 focus:outline-none"
            />
          </div>
          <div>
            <button className="cvBtn ">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact