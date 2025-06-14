'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css";
import { ImHome } from "react-icons/im";
import { RiUserShared2Fill } from "react-icons/ri";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { GrMail } from "react-icons/gr";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { BiMenuAltRight } from 'react-icons/bi'





const Header = () => {
    useEffect(() => {
        AOS.init({
            easing: "ease-in-out",
            duration: 600,
            delay: 0,
            mirror: false,
            anchorPlacement: "top-bottom",
            offset: 80,
        });
        AOS.refresh()
    }, []);

    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }

        window.history.replaceState(null, "", " ");
    };



    return (
        <div className='max-w-screen-2xl mx-auto sticky top-0 z-10'>
            <nav className="... backdrop-filter backdrop-blur-lg ... border-b border-gray-200 ... bg-opacity-30 ">
                <div className=" mx-auto px-1 md:px-10 lg:px-20">
                    <div className="flex items-center justify-between h-14">
                        <Link href="/"><Image className="md:mt-11 mt-8 w-25 lg:w-[120px] md:w-24" width={90} height={100} src="/doblier.png" alt="Doblier" /></Link>
                        <div className="navbar flex-row  space-x-9 text-gray-900 hidden md:block">
                            <Link href={"/"} className=" nav-link text-gray-600 font-sans font-semibold cursor-pointer">Home</Link>
                            <button className=" nav-link text-gray-600 font-sans font-semibold cursor-pointer " onClick={() => handleScroll("about")}>About</button>
                            <button className=" nav-link text-gray-600 font-sans font-semibold cursor-pointer " onClick={() => handleScroll("services")}>Services</button>
                            <button className=" nav-link text-gray-600 font-sans font-semibold cursor-pointer " onClick={() => handleScroll("contact")}>Contact</button>
                        </div>

                        <Sheet>
                            <SheetTrigger className='md:hidden  text-[32px] text-purple-800'>
                                <BiMenuAltRight />
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle className='md:flex-row flex-col flex mt-11'>

                                        <div className=' flex items-center  gap-3 '>
                                            <ImHome />
                                            <Link className='font-sans font-medium py-2 text-xl text-gray-700' href="/">Home</Link>
                                        </div>
                                        <div className=' flex items-center  gap-3 '>
                                            <RiUserShared2Fill />
                                            <Link className='font-sans font-medium py-2 text-xl text-gray-700' href="#about">About</Link>
                                        </div>
                                        <div className=' flex items-center  gap-3 ' >
                                            <MdOutlineMiscellaneousServices />
                                            <Link className='font-sans font-medium py-2 text-xl text-gray-700' href="#services">Services</Link>
                                        </div>
                                        <div className=' flex items-center  gap-3 '>
                                            <GrMail />
                                            <Link className='font-sans font-medium py-2 text-xl text-gray-700' href="#contact">Contact Us</Link>
                                        </div>

                                    </SheetTitle>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>


                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Header
