import React from 'react'
import RetreatCards from '../RetreatCards/RetreatCards'
import Filters from '../filters/Filters'
import Search from '../search/Search'

const Retreats = () => {
  return (
    <div className='p-4 md:py-0'>
        <div className='flex flex-col gap-3 md:flex-row md:my-6 md:justify-between'>
            <Filters />
            <Search />
        </div>
        <RetreatCards />
    </div>
  )
}

export default Retreats