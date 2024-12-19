import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (


        <main className="sticky top-0 z-50">
            <section className="bg-[#11071F] h-[80px] pt-4 text-white">
                <div className="flex justify-between items-center mx-auto px-3 gap-4 sm:gap-7 bg-[#24153b] max-w-[90%] sm:max-w-[70%] md:max-w-[65%] lg:max-w-[40%] h-[50px] rounded-3xl">
                    {/* Home Link */}
                    <Link href="/" className="font-sans font-medium text-sm md:text-base hover:text-neutral-300">
                        Home
                    </Link>
                    {/* About Link */}
                    <Link href="#about" className="font-sans font-medium text-sm md:text-base hover:text-neutral-300">
                        About
                    </Link>
                    {/* Logo */}
                    <Image
                        className="w-16 h-auto md:w-20"
                        src="/doblier.png"
                        alt="Doblier Logo"
                        width={100}
                        height={100}
                    />
                    {/* Services Link */}
                    <Link href="#services" className="font-sans font-medium text-sm md:text-base hover:text-neutral-300 ">
                        Services
                    </Link>
                    {/* Contact Link */}
                    <Link href="#contact" className="font-sans font-medium text-sm md:text-base hover:text-neutral-300">
                        Contact
                    </Link>
                </div>
            </section>
        </main>


    )
}

export default Navbar
