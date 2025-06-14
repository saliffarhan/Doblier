import React from 'react'
import { FaDiscord, FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Fotter = () => {
  return (
    <div >
        <div className='bg-slate-00 mt-7 py-2 text-center md:text-base text-sm text-gray-600 border-t border-gray-300'>
            <div className='flex md:hidden flex-row justify-center my-4 gap-5'>
                                      <a target='main' href="https://www.facebook.com/doblier.io/"><FaFacebookSquare className='text-2xl  text-gray-500 hover:text-orange-400 duration-200' /> </a>
                                      <a target='main' href="https://www.instagram.com/doblier.io"><FaInstagramSquare className='text-2xl text-gray-500 hover:text-orange-400 duration-200' /> </a>
                                      <a target='main' href="https://twitter.com/doblier_io"><FaSquareXTwitter className='text-2xl text-gray-500  hover:text-orange-400 duration-200' /></a>
                                      <a target='main' href="https://www.linkedin.com/company/doblier/"><FaLinkedin className='text-2xl text-gray-500 hover:text-orange-400 duration-200 ' />  </a>
                                      <a target='main' href="https://discord.gg/asNxTjHD"><FaDiscord className='text-2xl text-gray-500  hover:text-orange-400 duration-200 ' /></a>
                                  </div>
            <h3 className='font-sans font-semibold text-gray-700'>Copyright © Doblier Inc. 2025</h3>
        </div>
      
    </div>
  )
}

export default Fotter
