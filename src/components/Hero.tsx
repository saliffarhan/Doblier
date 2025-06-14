import Image from "next/image"
import Link from "next/link"

function Hero() {
  return (
    <div>
      <div className="lg:h-[35rem] md:h-[30rem] lg:px-20   md:py-0  py-20 w-full max-w-screen-2xl mx-auto flex flex-col items-center justify-center  ">
        {/* Content */}
        {/* Heading */}
        <h1  className="text-center  lg:text-[65px] xl:text-[81px] font-black md:font-bold text-zinc-700 font-sans md:text-5xl text-[38px] leading-11 lg:leading-20 md:leading-14 md:pt-14">
          <span className="relative inline-block">
            Revolutionizing
            <Image
              src="/Vector.png"
              width={150}
              height={100}
              alt="brush-stroke"
              className="absolute xl:-bottom-5 lg:-bottom-2 md:-bottom-2 -bottom-1 lg:left-8 md:left-4 left-1.5 min-w-full h-auto"
            />
          </span>
          <span > the way you <br className="hidden sm:block" /> work and connect</span >
        </h1>

        {/* Paragraph */}
        <div className="px-[25px]">
          <p className=" text-center mt-4 sm:mt-7 py-1 font-medium text-gray-600 text-base md:text-[15px] sm:text-base lg:text-xl sm:max-w-[100%]">
            Connecting <span className='btn-shine'>freelancers</span> and <span className='btn-shine'>businesses</span> in a decentralized network for a more efficient <br className="hidden md:block" /> and effective way to find and offer services
          </p>
          <p className="text-center mt-4 sm:mt-7 font-medium text-base text-gray-600 sm:text-base md:text-s lg:text-lg mx-auto sm:max-w-[70%]">
            Join our community and take control  of your  professional growth and development.
          </p>
        </div>
        {/* button */}
        <Link href="#contact">
          <div className="flex justify-center items-center mt-8 sm:mt-10" >
            <div className="relative inline-flex items-center justify-center gap-4 group">
              <div
                className="absolute  inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-2xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"
              ></div>
              <a
                role="button"
                className="group relative inline-flex items-center justify-center text-base lg:text-base rounded-xl bg-gray-800 lg:px-8 md:px-4 md:py-2 px-9 lg:py-3 py-[8px] font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
              >Start your journey with Doblier<svg
                aria-hidden="true"
                viewBox="0 0 10 10"
                height="10"
                width="10"
                fill="none"
                className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
              >
                  <path
                    d="M0 5h7"
                    className="transition opacity-0 group-hover:opacity-100"
                  ></path>
                  <path
                    d="M1 1l4 4-4 4"
                    className="transition group-hover:translate-x-[3px]"
                  ></path>
                </svg>
              </a>
            </div>


          </div>
        </Link>

      </div >

    </div>
  )
}

export default Hero
