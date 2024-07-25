import React, { useContext } from 'react'
import AppContext from '../../context/AppContext';
import RetreatCard from '../RetreatCard/RetreatCard'
const RetreatCards = () => {
  const { currentPageData } = useContext(AppContext);
  return (
    <div className='grid grid-cols-auto-fit-300 py-4 gap-5'>
       {
        currentPageData?.map((data)=> <RetreatCard retreatData={data} key={data.id}/>)
       }
    </div>
  )
}

export default RetreatCards