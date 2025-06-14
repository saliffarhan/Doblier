'use client'

import Image from 'next/image'
import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className=' w-[100%] max-w-screen-2xl mx-auto h-screen  flex flex-col justify-center items-center'>
            <Image width={400} height={400} src="/404-page.jpg" alt="pagenotfound" />
            <h2 className='font-sans font-semibold md:text-2xl text-xl pt-4 text-gray-800'>Something went wrong!</h2>
            <p className='font-sans md:text-base text-sm text-center text-gray-700 pt-3'>Sorry, the page you are looking for could not be found .</p>
            <button className='md:px-6 cursor-pointer px-4 py-1 mt-3  md:mt-5 md:py-2 border-[1px] border-purple-500 rounded-xl hover:bg-purple-400 hover:text-white hover:rounded-none duration-300'
                onClick={
                    () => {
                        reset();
                    }
                }
            >
                Go to Homepage
            </button>
        </div>
    )
}