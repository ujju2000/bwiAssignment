
import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Link, Router, Routes } from 'react-router-dom'
import { User, UserProvider } from '../context/Context'
import Login from './Login'
import Navbar from './Navbar'

export default function Layout({children}) {
  const {isUser , setIsUser} = useContext(User);
  const handleClick = () => {
    setIsUser(false);
    localStorage.removeItem('token');
  }
  return (
    <div className=''>
      <div className = 'w-full bg-black p-4 flex items-center justify-around text-white cursor:pointer'>
          <Link to = '/bwiAssignment/home'>Home</Link>
          {
            isUser ? <Link to = '/bwiAssignment/' onClick = {handleClick}>Logout </Link>
            : 
            <Link  to  = '/bwiAssignment/login'>Login</Link>
          }
      </div>
      {children}
     { !isUser && <>
      <p className = 'font-bold uppercase text-2xl p-4 underline underline-offset-2'>A short assignment of React E-Commerce App Implementation with Authentication, Product Display, and Cart Management :-</p>
        <ul className = 'list-disc flex flex-col justify-center p-8 font-semibold text-xl  '>
          <li>Login: Authenticate users using <a className = 'underline underline-offset-2 '>https://dummyjson.com/docs/auth</a>, store the token on successful login.</li>
          <li>
          Save Token: Securely store the authentication token for future use.
          (saved it in the localStorage)
          </li>
          <li>
          Protected Home: Create a protected React Router route for the home page based on token presence.
          </li>
          <li>
          Fetch Products: Fetch products from <a className = 'underline underline-offset-2 '>https://dummyjson.com/docs/products</a>, update UI
          </li>
          <li>
          Search Products: Implement name-based product search, dynamically update U
          </li>
          <li>
          Filter by Price: Allow price-based product filtering, update UI accordingly.
          </li>
          <li>
          Cart Management: Implement cart functionality, show count and total amount.
          </li>
          <li>
          Add to Cart: Add selected products to the cart state, update count and total.
          </li>

          <li>
            sample Username :- atuny0
          </li>
          <li>
            sample password :- 9uQFF1Lh
          </li>
        </ul>
      </>
      }
      
    </div>
  )
}
