import React from 'react'

const Hero = () => {
    return (
        <section className='bg-hero1 bg-fixed bg-cover bg-center h-[50vh] md:h-[60vh] lg:h-[100vh] relative'> 

           <div className=' text-white font-semibold text-1xl  p-3'>
        <h1>POETRY<span className='text-[#9c5d36]'>ZONE</span></h1>
      </div>     
            <div className="absolute inset-0 bg-black opacity-50"></div>       
            <div className='relative text-center py-10 md:py-20 lg:pt-80 text-white'>
                <h1 className='text-4xl sm:text-1xl md:text-6xl lg:text-9xl '>POETRY ZONE</h1>
                <h2 className='text-lg sm:text-xl md:text-1xl lg:text-2xl mt-2 lg:mt-10'>WHERE WORDS  PAINT PICTURES</h2>
                <div className='flex justify-center pt-5'>
                    <hr className="border-[3px] w-20 sm:w-32 md:w-16 border-white" />
                </div>
            </div>
        </section>
    )
}

export default Hero
