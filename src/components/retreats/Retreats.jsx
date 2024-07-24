import React from 'react'
import RetreatCards from '../RetreatCards/RetreatCards'

const Retreats = () => {
  return (
    <div className='p-4 md:py-0'>
        <div className='flex flex-col gap-3 md:flex-row md:my-6 md:justify-between'>
            <div className='flex flex-col md:flex-row gap-3'>
                <select name="date" className='bg-slate-300 px-4 py-2 outline-none cursor-pointer text-gray-700 rounded-none md:bg-blue-950 md:text-white md:rounded-md'>
                    <option value="">Filter by date</option>
                    <option value="">2023-2024</option>
                    <option value="">2024-2025</option>
                </select>
                <select name="type" className='bg-slate-300 px-4 py-2 outline-none cursor-pointer text-gray-700 rounded-none md:bg-blue-950 md:text-white md:rounded-md'>
                    <option value="">Filter by Type</option>
                    <option value="yoga">Yoga</option>
                    <option value="meditaion">Meditation</option>
                    <option value="detox">Detox</option>
                </select>
            </div>
            <div className='md:w-[40%]'>
                <input type="text" placeholder='Search retreats by title' className='bg-white text-gray-700 w-full p-2 rounded-md outline-none placeholder-gray-700 border border-gray-400 md:bg-blue-950 md:placeholder-white md:text-white'/>
            </div>
        </div>
        <RetreatCards />
    </div>
  )
}

export default Retreats