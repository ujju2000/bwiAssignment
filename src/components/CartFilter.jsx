
import React from 'react'
import { useContext , useState } from 'react'
import { User } from '../context/Context'

export default function CartFilter() {
  const [sortingOption , setSortingOption] = useState('');
  const {sortByAscending  , sortByDescending , fetchProducts} = useContext(User);
  function handleAscending () {

    setSortingOption('ascending');
    sortByAscending();
  }
  function handleDescending () {
    setSortingOption('descending');
    sortByDescending();
  }
  const handleClearSearch = () => {
    setSortingOption('');
    fetchProducts();
  }

  return (
    <div className = 'p-3 text-xl w-1/5 h-screen bg-blue-900 flex md:flex-col text-white font-bold'> 
        <h2>Filter Products</h2>

        <div className='flex items-center gap-4 my-3'>
              <input type="radio" name="sorting" id="" className = 'ml-3'
                onClick = {handleAscending}
                checked = {sortingOption === 'ascending'}
              />
            <label htmlFor="" >
              Ascending
            </label>
        </div>

        <div className='flex items-center gap-4 my-5 '>
            <input type="radio" name="sorting" id=""  className='ml-3 '
              onClick  = {handleDescending}
              checked = {sortingOption === 'descending'}
            />  
            <label htmlFor="">Descending</label>    
        </div>

        <button className = 'my-10 w-11/12 mx-auto bg-white p-2 text-center text-black rounded-md '
          onClick={handleClearSearch}
          
        >Clear Searches</button>
    </div>
  )
}
