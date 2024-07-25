import React from 'react'
import convertToDate from '../../utils/convertToDate';

const RetreatCard = ({ retreatData }) => {
  const { title, description, date, image } = retreatData;
  return (
    <div className='bg-slate-300 rounded-md px-4 py-2 border border-gray-300'>
        <img src={image} alt="Card Image" className='mb-2 w-full md:w-[60%] object-cover h-[160px] rounded-2xl'/>
        <h3 className='font-semibold text-lg text-black mb-4'>{title}</h3>
        <p className='text-gray-700 mb-2'>
          {description}
        </p>
        <p>Date:{convertToDate(date)}</p>
    </div>
  )
}

export default RetreatCard