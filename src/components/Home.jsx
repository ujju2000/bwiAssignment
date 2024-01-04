
import React  , {useState , useEffect} from 'react'
import { useContext } from 'react';
import { User } from '../context/Context';
import Card from './Card';
import CartFilter from './CartFilter';
import { FaShoppingCart } from 'react-icons/fa';
import Login from './Login';
import Layout from './Layout';
import { Link } from 'react-router-dom';

export default function Home() {
    const {cart , products , handleSearch } = useContext(User);
    
   const handleSearchInput = (e) => {
        handleSearch(e.target.value);
   }
   
  return (
    <Layout>
        <div className = 'w-full bg-slate-50 h-full flex '>
                <CartFilter />
            <div className= ''>
                <div className = 'search w-full h-[70px] flex items-center justify-center'>
                    <input type="text" name="" id="" placeholder='Search for product...'
                        className='w-1/2 p-2 rounded-md outline-none shadow-lg bg-inherit border-black border-2 '
                        onChange = {handleSearchInput}
                    />
                </div>
            <div className = 'p-2 grid md:grid-cols-3 gap-4 justify-center items-center '>
                {
                    products.length === 0 ? 
                        <>No products found!</>
                    : products.map(prod => {
                        return (
                            <Card key = {prod.id} prod = {prod} />
                        )
                    })
                }
            </div>
            </div>
            <div className = 'h-[70px] relative basis-[100px] flex  '>
            <Link  to = '/bwiAssignment/cart'>
                <FaShoppingCart size = {30} color = 'green' className='m-4 mr-3'
                    
                />
            </Link>
            <span class="absolute bottom-4 right-4  w-6 h-6 bg-gray-100 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                {cart.length}
            </span>
            </div>
        </div>
    </Layout>
  )
}
