import React from 'react'
import RetreatCard from '../RetreatCard/RetreatCard'

const RetreatCards = () => {
  return (
    <div className='grid grid-cols-auto-fit-300 py-4 gap-5'>
       <RetreatCard />
       <RetreatCard />
       <RetreatCard />
    </div>
  )
}

export default RetreatCards