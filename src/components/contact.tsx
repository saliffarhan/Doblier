"use client"

import React, { useState } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FiPhoneCall } from 'react-icons/fi'
import { TbMailDown } from 'react-icons/tb'
import { FaDiscord, FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';




const ContactUS = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        category: 'general',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (result.success) {
                setFormData({ name: '', email: '', category: 'general', message: '' });
            }
        } catch {
            alert('Something went wrong.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id='contact'>
            {/* Loader*/}
            {loading && (
                <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-70 flex items-center justify-center z-50">
                    <div className="loader JS_on">
                        <span className="binary"></span>
                        <span className="binary"></span>
                        <span className="getting-there">SENDING MESSAGE...</span>
                    </div>

                </div>
            )}
            <main className='w-[100%] h-auto max-w-screen-2xl mx-auto'>

                <h3 className="font-bold md:text-2xl text-xl text-center py-4">Lets <span className="inline-block mb-2 -rotate-6 bg-purple-200 md:bg-purple-300 rounded-2xl px-5 animate-pulse ">Get in</span> Touch</h3>

                <section className='lg:px-20 md:px-11 px-3 md:gap-10 lg:gap-14 gap-5 flex flex-col md:flex-row justify-between items-center py-2 lg:py-3'>

                    {/* left-side */}
                    <div className='lg:w-[50%] md:w-[65%]' data-aos="fade-right">
                        <h2 className='py-2 text-base font-medium text-zinc-600'>Get in touch with <span className='border-b-2 font-semibold border-purple-400'>Doblier</span> Inc.</h2>
                        <p className='py-2 text-gray-700 text-[15px]'>We would love to hear from you! Whether you have a question, suggestion, or just want to say hello, we are always happy to connect with our community.</p>
                        <form onSubmit={handleSubmit}>
                            <label className='block my-2 mt-5 text-gray-600 md:text-base text-sm' htmlFor="name">Full Name</label>
                            <input

                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full p-3 py-2 border border-zinc-400 rounded-lg"
                                required
                            />
                            <label className='block my-2 md:text-base text-sm text-gray-600' htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"

                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full p-3 py-2 border border-zinc-400 rounded-lg "
                                required
                            />
                            <label className='block my-2 md:text-base text-sm text-gray-600' htmlFor="category">Category</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full p-2 text-gray-500 py-2 border border-zinc-400 rounded-lg "
                                required
                            >
                                <option value="General Questions">General Questions</option>
                                <option value="Sales Inquiries">Sales Inquiries</option>
                                <option value="Help/Support">Help/Support</option>
                                <option value="Patnerships">Patnerships</option>
                                <option value="Press">Press</option>
                                <option value="other">Other</option>
                            </select>
                            <label className='block my-2 md:text-base text-sm text-gray-600' htmlFor="message">I would like to know about you</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 md:text-base text-sm py-2 border border-zinc-400 rounded-lg "
                                placeholder='Type your message here....'
                                rows={5}
                                required
                            />
                            <button
                                type="submit"
                                className="group relative inline-flex mt-3.5 cursor-pointer items-center justify-center text-base lg:text-base rounded-xl bg-gray-800 lg:px-15 md:px-4  md:py-2 px-11 lg:py-2 py-2 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                    {/* right-side */}
                    <div className='mt-10 md:mt-0' data-aos="fade-up">

                        <DotLottieReact
                        className='h-full  lg:w-[110%] mx-auto'
                            src="https://lottie.host/318c9cd0-d5da-4ff2-a0dc-6433646e1877/0OJsQZBLiD.lottie"
                            loop
                            autoplay
                        />

                        <div className='flex flex-row gap-7 mt-10 '>
                            <FiPhoneCall className='text-xl text-gray-700 ' />
                            <p className='text-gray-800 text-sm '>+1 628 229 3590</p>
                        </div>
                        <div className='flex flex-row md:gap-8  gap-7 py-3'>
                            <TbMailDown className='text-xl text-gray-700 ' />
                            <a
                                href="mailto:info@doblier.io"
                                className="text-gray-800 text-sm"
                            >
                                info@doblier.io
                            </a>
                        </div>
                        <div className='flex flex-row gap-8 '>
                            <IoLocationSharp className='text-gray-700 text-lg' />
                            <p className='text-gray-800 text-sm'>1750 Prairie City Rd #130, Folsom, CA 95630, United States</p>
                        </div>
                        <div className="hidden md:flex flex-row gap-5 mt-5">
                            {[
                                { href: "https://www.facebook.com/doblier.io/", icon: <FaFacebookSquare /> },
                                { href: "https://www.instagram.com/doblier.io", icon: <FaInstagramSquare /> },
                                { href: "https://twitter.com/doblier_io", icon: <FaSquareXTwitter /> },
                                { href: "https://www.linkedin.com/company/doblier/", icon: <FaLinkedin /> },
                                { href: "https://discord.gg/asNxTjHD", icon: <FaDiscord /> },
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    target="main"
                                    href={item.href}
                                    className="text-2xl text-gray-600 hover:text-gray-700 transform hover:scale-125 transition duration-300 ease-in-out "
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>


                    </div>
                </section>
            </main>

        </div>
    )
}

export default ContactUS

