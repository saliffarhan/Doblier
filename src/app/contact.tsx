import React from 'react'
import { Cover } from '@/components/ui/cover'

const Contact = () => {
    return (
        <div id='contact'>
            <div className="w-full h-auto bg-[#11071F] pb-28">
                <main className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-24 mx-5 lg:mx-28">
                    {/* left-side */}
                    <div className="w-full max-w-lg lg:w-auto h-auto pt-5">
                        <h2 className="font-sans font-semibold text-3xl lg:text-4xl py-2 text-neutral-300"><Cover className='text-neutral-300'>Contact</Cover></h2>
                        <h3 className="font-sans font-medium text-base py-4 text-neutral-400">Get in touch with Doblier Inc.</h3>
                        <p className="font-sans text-base pb-3 text-neutral-400">
                            We would love to hear from you! Whether you have a question, suggestion, or just want to say hello, were always happy to connect with our community.
                        </p>
                        <p className="font-sans font-semibold py-2 text-neutral-200">
                            Phone <span className="text-neutral-400">+1 628 229 3590</span>
                        </p>
                        <p className="font-sans font-semibold text-neutral-200">
                            Email: <span className="text-neutral-400">info@doblier.io</span>
                        </p>
                        <p className="font-sans font-semibold py-2 text-neutral-400">
                            <span className="text-neutral-200">Address</span>: 1750 Prairie City Rd #130, Folsom, CA 95630, United States
                        </p>
                        <p className="font-sans py-4 text-neutral-400">
                            <span className="font-semibold text-neutral-200">Social media:</span> Follow us on Facebook, Instagram, Twitter, LinkedIn, and Discord to stay up to date on the latest news and updates from Doblier Inc.
                        </p>
                    </div>
                    {/* right-side */}
                    <div className="w-full max-w-lg h-auto pt-5">
                        <h2 className="font-sans font-semibold text-3xl lg:text-4xl py-2 text-neutral-300"><Cover className='text-neutral-300'>Contact Form</Cover></h2>
                        <h3 className="font-sans font-semibold py-4 text-neutral-300">Full Name</h3>
                        <input
                            className="w-full h-[40px] rounded-2xl bg-[#24153b] border border-blue-950 hover:border-violet-950 hover:shadow-2xl border-solid px-2 text-white"
                            type="text"
                            placeholder="Type your name"
                        />
                        <h3 className="font-sans font-semibold py-4 text-neutral-300">Email</h3>
                        <input
                            className="w-full h-[40px] rounded-2xl bg-[#24153b] px-2 text-white"
                            type="email"
                            placeholder="Type your email"
                        />
                        <h3 className="font-sans font-semibold py-4 text-neutral-300">Message</h3>
                        <textarea
                            className="w-full h-[80px] rounded-2xl bg-[#24153b] px-2 text-white"
                            name="message"
                            id="message"
                            placeholder="Type your message"
                        ></textarea>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Contact
