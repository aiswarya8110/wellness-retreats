import { useState, useEffect } from 'react';
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Pagination from './components/pagination/Pagination'
import Retreats from './components/retreats/Retreats'
import AppContext from './context/AppContext'
import { RETREAT_LIMIT } from './constants';
function App() {
  const [currentPage, setCurrentPage ] = useState(1);
  const [ currentPageData, setCurrentPageData] = useState([]);
  const [ allData, setAllData] = useState([]);
  const [ searchTerm , setSearchTerm ] = useState('');
  const [ filterValue, setFilterValue ] = useState('');
  console.log("ALL DATA", allData);

  useEffect(()=>{
    getCurrentPageData();
  },[currentPage, searchTerm, filterValue]);

  useEffect(()=>{
    getAllData();
  },[]);

  const getAllData = async()=>{
    try {
        
      const response = await fetch("https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?")
      const data = await response.json();
      setAllData(data);
    } catch (error) {
      console.log(error)
    }
  }
  
  const getCurrentPageData = async()=>{
      try {
        
        const response1 = await fetch(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${currentPage}&limit=${RETREAT_LIMIT}&search=${searchTerm}&filter=${filterValue}`)

        const response2 = await fetch(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?search=${searchTerm}&filter=${filterValue}`)

        const currentPageData = await response1.json();
        const allData = await response2.json();
        
        setCurrentPageData(currentPageData);
        setAllData(allData);

      } catch (error) {
        console.log(error)
      }
  }

  const updateNextPage = ()=>{
    let newPage = currentPage + 1;
    console.log(allData.length);
    let totalPages = Math.ceil(allData.length / RETREAT_LIMIT);
    if(newPage > totalPages){
      newPage = 1;
    }

    setCurrentPage(newPage);
  }

  const updatePreviousPage = ()=>{
    let newPage = currentPage - 1;
    let totalPages = Math.ceil(allData.length / RETREAT_LIMIT);

    if(newPage < 1){
      newPage = totalPages;
    }

    setCurrentPage(newPage);
  }

  const updateSearchTerm = (searchTerm)=>{
    setSearchTerm(searchTerm);
  }

  const updateFilterValue = (filterValue)=>{
    setFilterValue(filterValue);
  }

  return (
    <AppContext.Provider value={ { getCurrentPageData, currentPageData , currentPage, updateNextPage, updatePreviousPage, updateSearchTerm, searchTerm, updateFilterValue}}>
      <Header />
      <Hero />
      <Retreats />
      <Pagination />
      <Footer />
    </AppContext.Provider>
  )
}

export default App