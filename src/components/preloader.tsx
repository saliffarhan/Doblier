'use client'
import React from 'react'

const Preloader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white fixed top-0 left-0 z-50">
      <svg className="animate-spin h-10 w-10 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
      </svg>
      <span className="ml-3 text-gray-700 font-medium">Loading...</span>
    </div>
  )
}

export default Preloader
