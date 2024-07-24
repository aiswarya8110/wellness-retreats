import React from 'react'
import coverImage from '../../assets/Hero-cover.jpg';
const Hero = () => {
  return (
    <div className='hidden p-4 bg-white text-gray-700 md:block'>
        <div className='flex flex-col gap-2 px-4 py-2 bg-slate-300 shadow-lg rounded-md'>
          <img src={coverImage} alt="Cover Image" className='w-full h-[300px] object-cover rounded-md'/>
          <h3 className='font-semibold text-base text-black'>Discover Yout Inner Peace</h3>
          <p className='mb-3'>Join us for a series of wellness retreats designed to help you to find tranquility and rejuvenation</p>
        </div>
    </div>
  )
}

export default Hero