import React from 'react'

const RetreatCard = () => {
  return (
    <div className='bg-slate-300 rounded-md px-4 py-2 border border-gray-300'>
        <img src="https://cdn.midjourney.com/a287f9bc-d0fb-4e78-a0fa-e8136d3c408a/0_0.jpeg" alt="Card Image" className='mb-2 w-full md:w-[60%] object-cover h-[160px] rounded-2xl'/>
        <h3 className='font-semibold text-lg text-black mb-4'>Forest</h3>
        <p className='text-gray-700 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit accusamus sed eveniet nemo aut repellat cum. Commodi vero fuga pariatur atque, quaerat labore modi eum, cum sequi quam vitae?</p>
        <p>Date: 20:20:2024</p>
    </div>
  )
}

export default RetreatCard