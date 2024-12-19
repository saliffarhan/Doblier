import { Cover } from '@/components/ui/cover'
import Image from 'next/image'
import React from 'react'

const services = () => {
    return (
        <div id='services'>
            <div className="w-full h-auto bg-[#11071F] py-[50px] px-4 sm:px-8 md:px-20 ">
                {/* question1 */}
                <h2 className='font-sans font-bold text-3xl py-7 lg:pl-8'> <Cover className='text-neutral-300'>Services</Cover> </h2>
                {/* products */}
                <div className="relative max-w-full lg:max-w-[1150px] md:max-w-[900px] sm:max-w-[600px] mx-auto text-stone-300 bg-[#24153b]  rounded-2xl">
                    {/* input */}
                    <input id="toggle1" className="absolute peer hidden" type="checkbox" />
                    {/* heading */}
                    <label
                        className="font-bold tracking-[1px] mx-5 sm:mx-8 md:mx-10 h-[60px] flex items-center cursor-pointer"
                        htmlFor="toggle1"
                    >
                        What services does Doblier offer ?

                    </label>
                    {/* arrow */}
                    <div className="absolute top-[15px] right-[10px] duration-500 rotate-0 peer-checked:rotate-180">
                        <Image width={25} height={20} src="/arrow.png" alt="arrow" />
                    </div>
                    {/* content */}
                    <div className="max-h-0 overflow-hidden peer-checked:max-h-full transition-all duration-500">
                        <p className="p-5 sm:p-6 md:p-8 text-sm sm:text-base bg-[#331f50]  ">
                            Doblier is a decentralized platform that connects people and enables them to work together on projects in a trustless and transparent way. Our platform is powered by the Doblier Leadership Token (DLT), which rewards users for their contributions to the network.


                        </p>
                    </div>
                </div>
                {/* question2 */}
                {/* products */}
                <div className="relative max-w-full my-6 lg:max-w-[1150px] md:max-w-[900px] sm:max-w-[600px] mx-auto text-stone-300 bg-[#24153b]  rounded-2xl">
                    {/* input */}
                    <input id="toggle2" className="absolute peer hidden" type="checkbox" />
                    {/* heading */}
                    <label
                        className="font-bold tracking-[1px] mx-5 sm:mx-8 md:mx-10 h-[60px] flex items-center cursor-pointer"
                        htmlFor="toggle2"
                    >
                        How can Doblier help me?

                    </label>
                    {/* arrow */}
                    <div className="absolute top-[15px] right-[10px] duration-500 rotate-0 peer-checked:rotate-180">
                        <Image width={25} height={20} src="/arrow.png" alt="arrow" />
                    </div>
                    {/* content */}
                    <div className="max-h-0 overflow-hidden peer-checked:max-h-full transition-all duration-500">
                        <p className="p-5 sm:p-6 md:p-8 text-sm sm:text-base bg-[#331f50]  ">
                            Whether you are a freelancer looking for new opportunities or a business owner seeking talented professionals to help with your project, Doblier can help you connect with the right people. Our platform allows you to find and hire top-quality talent from around the world, or to offer your own skills and expertise to others.


                        </p>
                    </div>
                </div>
                {/* question3 */}
                {/* products */}
                <div className="relative max-w-full my-6 lg:max-w-[1150px] md:max-w-[900px] sm:max-w-[600px] mx-auto text-stone-300 bg-[#24153b]  rounded-2xl">
                    {/* input */}
                    <input id="toggle3" className="absolute peer hidden" type="checkbox" />
                    {/* heading */}
                    <label
                        className="font-bold tracking-[1px] mx-5 sm:mx-8 md:mx-10 h-[60px] flex items-center cursor-pointer"
                        htmlFor="toggle3"
                    >
                        What sets Doblier apart from other platforms ?

                    </label>
                    {/* arrow */}
                    <div className="absolute top-[15px] right-[10px] duration-500 rotate-0 peer-checked:rotate-180">
                        <Image width={25} height={20} src="/arrow.png" alt="arrow" />
                    </div>
                    {/* content */}
                    <div className="max-h-0 overflow-hidden peer-checked:max-h-full transition-all duration-500">
                        <p className="p-5 sm:p-6 md:p-8 text-sm sm:text-base bg-[#331f50]  ">
                            Doblier is built on the Ethereum blockchain and is compatible with the ERC20 token standard. This allows us to offer a secure and transparent platform for connecting people and working together on projects. Our user-friendly interface and easy-to-use tools make it easy to manage your digital assets and collaborate with others.


                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default services


