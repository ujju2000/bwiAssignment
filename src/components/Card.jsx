
import React from 'react'
import { useContext , useState} from 'react';
import { User } from '../context/Context';


export default function Card({prod}) {
    const {products , cart , setCart} = useContext(User);
    const {id , title , description , price , images } = prod;
    const firstImg = images[0];
    const [add, setAdd] = useState(true);
    const handleAddCart = (id) => {
        const item = products.find(prod => prod.id === id);
        setAdd(false);
        
        setCart(prev => [...prev , item]);
    }
    const handleRemoveCart = (id) => {
        const newCart = cart.filter(prod => prod.id !== id);
        setAdd(true)
        setCart(newCart);
    }
  return (
<div className = "max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src= {firstImg} alt="" />
    </a>
    <div className = "p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className = "mb-3 font-normal text-gray-700 dark:text-gray-400"> {description}</p>
        <p className = "mb-3 font-bold text-white dark:text-gray-400 "> ₹{price}</p>    
        {
            add  ?
            <button className = 'mb-3 bg-blue-600 text-white p-2 rounded-md '
            onClick={() => handleAddCart(id)}> Add to cart
            </button>
            : 
            <button className = 'mb-3 bg-red-600 text-white p-2 rounded-md '
            onClick={() => handleRemoveCart(id)}> Remove from Cart
            </button>
        }
        
    </div>
</div>

  )
}

