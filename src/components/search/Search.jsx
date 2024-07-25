import React, { useContext } from 'react'
import AppContext from '../../context/AppContext';
const Search = () => {
    const { searchTerm, updateSearchTerm } = useContext(AppContext);

    const handleSearch = (e)=>{
        const searchValue = e.target.value;
        updateSearchTerm(searchValue);
    }

  return (
    <div className='md:w-[40%]'>
        <input type="text" placeholder='Search retreats by title' value={searchTerm} onChange={handleSearch} className='bg-white text-gray-700 w-full p-2 rounded-md outline-none placeholder-gray-700 border border-gray-400 md:bg-blue-950 md:placeholder-white md:text-white'/>
    </div>
  )
}

export default Search