import React from 'react'

const Pagination = () => {
  return (
    <div className='flex justify-center gap-3 pb-14 md:pb-0 mt-0 md:mt-2'>
        <button className='px-6 py-3 text-white rounded-3xl md:rounded-md bg-blue-950 outline-none'>
            Previous
        </button>
        <button className='px-6 py-3 text-white rounded-3xl md:rounded-md bg-blue-950 outline-none'>
            Next
        </button>
    </div>
  )
}

export default Pagination