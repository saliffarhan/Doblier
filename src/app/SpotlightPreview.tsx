import { Cover } from "@/components/ui/cover";
import React from 'react'

const SpotlightPreview = () => {
    return (
        <div id="1">
            <div className="h-[35rem] w-full  flex flex-col items-center justify-center bg-[#11071F] antialiased bg-grid-white/[0.2] relative overflow-hidden">
                {/* Content */}
                <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-5 md:pt-10 lg:pt-0">
                    {/* Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-40">
                        <Cover className="text-neutral-300">Revolutionizing</Cover> the way you <br className="hidden sm:block" /> work and connect
                    </h1>

                    {/* Paragraph */}
                    <p className="mt-5 sm:mt-7 py-2 font-normal text-sm sm:text-base lg:text-lg text-neutral-400 text-center mx-auto max-w-[70%] sm:max-w-[90%]">
                        Connecting freelancers and businesses in a decentralized network for a more efficient <br className="hidden md:block" /> and effective way to find and offer services
                    </p>
                    <p className="mt-5 sm:mt-7  font-normal text-sm sm:text-base lg:text-base text-neutral-400 text-center mx-auto max-w-[50%] sm:max-w-[40%]">
                        Join our community and take control  of your  professional growth and development.
                    </p>

                    <div className="flex justify-center items-center mt-8 sm:mt-10">
                        <a href="#about"><button className="shiny-cta">
                            <span>Start your journey with Doblier</span>
                        </button></a>
                    </div>
                </div>
            </div >

        </div>
    )
}

export default SpotlightPreview
