import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='h-[30vh]  bg-[#251308] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-content-center gap-10 px-6 sm:px-11 pt-10 space-y-6 sm:space-y-1 text-white'>

      <div className='space-y-2 text-center'>
        <h1 className='font-semibold sm:text-sm text-lg'>EXPLORE</h1>
        <h3 className='sm:text-[14px] text-sm'> Dive Into the World of Words—Get in Touch for the Best Poetry!</h3>
        <button className='bg-[#99725a] text-sm rounded text-white p-2'>READ MORE</button>
      </div>

      <div className='space-y-2 text-center'>
        <h1 className='text-lg font-semibold sm:text-sm'>CONNECT</h1>
        <h3 className='sm:text-[14px] text-sm'> Let’s Connect & Unravel the Beauty of Poetry Together!</h3>
        <div className='grid grid-flow-col place-content-center gap-4 lg:text-5xl sm:text-4xl'>
          <FaGithub className='border-[1px] border-white rounded-full p-2' />
          <IoLogoWhatsapp className='border-[1px] border-white rounded-full p-2'/>
          <FaLinkedin className='border-[1px] border-white rounded-full p-2' />
        </div>
      </div>

      <div className='space-y-2 text-center'>
        <h1 className='text-lg sm:text-sm font-semibold'>SUBSCRIBE</h1>
        <h3 className='sm:text-[14px] text-sm'> Receive regular updates with our newsletter</h3>
        <button className='bg-[#99725a] sm:text-sm text-sm rounded text-white p-2'>LEARN MORE</button>
      </div>
    </section>
  )
}

export default Footer;
