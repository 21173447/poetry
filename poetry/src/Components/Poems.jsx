import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../images/76988900-5fd5-4757-a0b0-e14a16f1bbd0.png'
import img2 from '../images/14efcb65-f401-4362-8eb5-adef80648fa8.png'
import img3 from '../images/132c7a25-bb47-4d21-a694-64acd7331203.png'
import img4 from '../images/I thought I was baf15c4d-23b4-4f17-bae3-80580eb4921c.png'

const Poems = () => {
  return (
    <section className='bg-[#251308] bg-texture lg:h-[40vh] md:h-[90vh] md:pt-10 lg:pt-9'>
        
      <div className='text-white text-3xl pt-10 text-center'>
        <h1>Poems</h1>
        <div className='flex justify-center py-2'>
          <hr className="border-[3px] w-20 flex border-white md:w-16" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 sm:py-20 md:py-1 lg:px-56 lg:pt-36 items-center justify-center" >

        <Link to="/explore/skybound-serenity" className='w-[250px] h-[350px]'>
          <div className='shadow-2xl bg-[#2c1c13] rounded-[30px] overflow-hidden text-white transition-all duration-300 hover:bg-[#3b2a20] hover:scale-105'>
            <img className='w-full h-56 object-cover' src={img1} alt="Skybound Serenity" />
            <div className='flex justify-center pt-3'>
              <hr className="border-[2px] w-16 flex border-white" />
            </div>
            <div className='text-2xl text-center p-7'>
              <h1>Skybound Serenity</h1>
            </div>
          </div>
        </Link>

        <Link to="/explore/melodic-echoes" className='w-[250px] h-[350px]'>
          <div className='shadow-2xl bg-[#2c1c13] rounded-[30px] overflow-hidden text-white transition-all duration-300 hover:bg-[#3b2a20] hover:scale-105'>
            <img className='w-full h-56 object-cover' src={img2} alt="Melodic Echoes" />
            <div className='flex justify-center pt-3'>
              <hr className="border-[2px] w-16 flex border-white" />
            </div>
            <div className='text-2xl text-center p-10'>
              <h1>Melodic Echoes</h1>
            </div>
          </div>
        </Link>

        <Link to="/explore/writers-club" className='w-[250px] h-[350px]'>
          <div className='shadow-2xl bg-[#2c1c13] rounded-[30px] overflow-hidden text-white transition-all duration-300 hover:bg-[#3b2a20] hover:scale-105'>
            <img className='w-full h-56 object-cover' src={img3} alt="Writers Club" />
            <div className='flex justify-center pt-3'>
              <hr className="border-[2px] w-16 flex border-white" />
            </div>
            <div className='text-2xl text-center p-10'>
              <h1>Writers Club</h1>
            </div>
          </div>
        </Link>

        <Link to="/explore/Journey Through Dusk and Dawn" className='w-[250px] h-[350px]'>
          <div className='shadow-2xl bg-[#2c1c13] rounded-[30px] overflow-hidden text-white transition-all duration-300 hover:bg-[#3b2a20] hover:scale-105'>
            <img className='w-full h-56 object-cover' src={img4} alt="Journey Through Dusk and Dawn" />
            <div className='flex justify-center pt-3'>
              <hr className="border-[2px] w-16 flex border-white" />
            </div>
            <div className='text-2xl text-center p-6'>
              <h1>Journey Through Dusk and Dawn</h1>
            </div>
          </div>
        </Link>

      </div>
    </section>
  )
}

export default Poems;
