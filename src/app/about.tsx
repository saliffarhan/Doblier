import { Cover } from '@/components/ui/cover'
import React from 'react'
import Image from 'next/image'

const about = () => {
  return (
    <div id='about'>
      <div className="w-full lg:h-[70vh] h-auto bg-[#11071F]    py-[20px]  px-4 sm:px-8 md:px-20 ">
        {/* question1 */}
        <h2 className='font-sans font-bold text-3xl py-7 lg:pl-8'> <Cover className='text-neutral-300'>About</Cover> </h2>

        {/* products */}
        <div className="relative max-w-full lg:max-w-[1150px] md:max-w-[900px] sm:max-w-[600px] mx-auto text-stone-300 bg-[#24153b] rounded-2xl">
          {/* input */}
          <input id="faq-toggle" className="absolute peer hidden" type="checkbox" />
          {/* heading */}
          <label
            className="font-bold tracking-[1px] mx-5 sm:mx-8 md:mx-10 h-[60px] flex items-center cursor-pointer"
            htmlFor="faq-toggle"
          >
            What is Doblier ?
          </label>
          {/* arrow */}
          <div className="absolute top-[15px] right-[10px] duration-500 rotate-0 peer-checked:rotate-180">
            <Image width={25} height={20} src="/arrow.png" alt="arrow" />
          </div>
          {/* content */}
          <div className="max-h-0 overflow-hidden peer-checked:max-h-full transition-all duration-500">
            <p className="p-5 sm:p-6 md:p-8 text-sm sm:text-base bg-[#331f50] ">
              Doblier is a decentralized labor and crowd leadership platform that
              connects people and enables them to work together on projects in a
              trustless and transparent way. Our platform is powered by the Doblier
              Leadership Token (DLT), which rewards users for their contributions to
              the network.
            </p>
          </div>
        </div>
        {/* question2 */}
        {/* products */}
        <div className="relative max-w-full my-6 lg:max-w-[1150px] md:max-w-[900px] sm:max-w-[600px] mx-auto text-stone-300 bg-[#24153b]  rounded-2xl">
          {/* input */}
          <input id="faq-toggle2" className="absolute peer hidden" type="checkbox" />
          {/* heading */}
          <label
            className="font-bold tracking-[1px] mx-5 sm:mx-8 md:mx-10 h-[60px] flex items-center cursor-pointer"
            htmlFor="faq-toggle2"
          >
            How does Doblier work ?
          </label>
          {/* arrow */}
          <div className="absolute top-[15px] right-[10px] duration-500 rotate-0 peer-checked:rotate-180">
            <Image width={25} height={20} src="/arrow.png" alt="arrow" />
          </div>
          {/* content */}
          <div className="max-h-0 overflow-hidden peer-checked:max-h-full transition-all duration-500">
            <p className="p-5 sm:p-6 md:p-8 text-sm sm:text-base bg-[#331f50]  ">
              Doblier is built on the Ethereum blockchain and is compatible with the ERC20 token standard. This allows users to create, issue, and manage digital assets, as well as exchange them with other users on the platform. We also provide a user-friendly interface that makes it easy to manage your digital assets.
            </p>
          </div>
        </div>
        {/* question3 */}
        {/* products */}
        <div className="relative max-w-full my-6 lg:max-w-[1150px] md:max-w-[900px] sm:max-w-[600px] mx-auto text-stone-300 bg-[#24153b]  rounded-2xl">
          {/* input */}
          <input id="faq-toggle3" className="absolute peer hidden" type="checkbox" />
          {/* heading */}
          <label
            className="font-bold tracking-[1px] mx-5 sm:mx-8 md:mx-10 h-[60px] flex items-center cursor-pointer"
            htmlFor="faq-toggle3"
          >
            Is Doblier available for use ?
          </label>
          {/* arrow */}
          <div className="absolute top-[15px] right-[10px] duration-500 rotate-0 peer-checked:rotate-180">
            <Image width={25} height={20} src="/arrow.png" alt="arrow" />
          </div>
          {/* content */}
          <div className="max-h-0 overflow-hidden peer-checked:max-h-full transition-all duration-500">
            <p className="p-5 sm:p-6 md:p-8 text-sm sm:text-base bg-[#331f50]  ">
              Yes, the Doblier platform is currently in beta and is available for anyone to use. However, please note that the platform is still under development and is subject to change.
            </p>
          </div>
        </div>
        {/* question4 */}
        {/* products */}
        <div className="relative max-w-full my-6 lg:max-w-[1150px] md:max-w-[900px] sm:max-w-[600px] mx-auto text-stone-300 bg-[#24153b]  rounded-2xl">
          {/* input */}
          <input id="faq-toggle4" className="absolute peer hidden" type="checkbox" />
          {/* heading */}
          <label
            className="font-bold tracking-[1px] mx-5 sm:mx-8 md:mx-10 h-[60px] flex items-center cursor-pointer"
            htmlFor="faq-toggle4"
          >
            Who is behind Doblier ?
          </label>
          {/* arrow */}
          <div className="absolute top-[15px] right-[10px] duration-500 rotate-0 peer-checked:rotate-180">
            <Image width={25} height={20} src="/arrow.png" alt="arrow" />
          </div>
          {/* content */}
          <div className="max-h-0 overflow-hidden peer-checked:max-h-full transition-all duration-500">
            <p className="p-5 sm:p-6 md:p-8 text-sm sm:text-base bg-[#331f50]  ">
              Doblier is developed by a team of experienced developers and is backed by a strong community of supporters. If you would like to contribute to the development of Doblier, please visit our GitHub repository.


            </p>
          </div>
        </div>


      </div>

    </div>
  )
}

export default about
