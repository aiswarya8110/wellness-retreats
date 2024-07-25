import React, { useContext } from 'react'
import AppContext from '../../context/AppContext';
const Filters = () => {
   const { updateFilterValue } = useContext(AppContext);
  return (
        <div className='flex flex-col md:flex-row gap-3'>
            <select name="date"  className='bg-slate-300 px-4 py-2 outline-none cursor-pointer text-gray-700 rounded-none md:bg-blue-950 md:text-white md:rounded-md'>
                <option value="">Filter by date</option>
                <option value="">2023-2024</option>
                <option value="">2024-2025</option>
            </select>
            <select name="type" onChange={(e)=> updateFilterValue(e.target.value)} className='bg-slate-300 px-4 py-2 outline-none cursor-pointer text-gray-700 rounded-none md:bg-blue-950 md:text-white md:rounded-md'>
                <option value="">Filter by Type</option>
                <option value="yoga">Yoga</option>
                <option value="meditation">Meditation</option>
                <option value="detox">Detox</option>
            </select>
        </div>
  )
}

export default Filters