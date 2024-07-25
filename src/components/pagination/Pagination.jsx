import React, { useContext} from 'react';
import AppContext from '../../context/AppContext';

const Pagination = () => {
  const { updateNextPage, updatePreviousPage } = useContext(AppContext);
  return (
    <div className='flex justify-center gap-3 pb-14 md:pb-0 mt-0 md:mt-2'>
        <button onClick={updatePreviousPage} className='px-6 py-3 text-white rounded-3xl md:rounded-md bg-blue-950 outline-none'>
            Previous
        </button>
        <button onClick={updateNextPage} className='px-6 py-3 text-white rounded-3xl md:rounded-md bg-blue-950 outline-none'>
            Next
        </button>
    </div>
  )
}

export default Pagination