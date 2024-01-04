
import React from 'react'
import { useContext , useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { User } from '../context/Context';
import Card from './Card';

export default function Cart() {
    const [count , setCount] = useState(1);
    const [subTotal , setSubTotal] = useState(0);

    const {cart} = useContext(User);

    useEffect(() => {
        const sum = cart.reduce((acc, curr) => acc += curr.price, 0);
        setSubTotal(sum);
    } ,[cart])
  return (
    <div className="bg-gray-100 h-screen py-8">
    <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
                <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-left font-semibold">Product</th>
                                <th className="text-left font-semibold">Price</th>
                               
                                <th className="text-left font-semibold">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map(c => {
                                return (
                                <tr>
                                <td className="py-4">
                                    <div className="flex items-center">
                                        <img className="h-16 w-16 mr-4" src= {c.images[0]} alt="Product image" />
                                        <span className="font-semibold">{c.name}</span>
                                    </div>
                                </td>
                                <td className="py-4">{c.price}</td>
                                {/* <td className="py-4"> */}
                                    {/* <div className="flex items-center">
                                        <button className="border rounded-md py-2 px-4 mr-2"
                                            onClick={() => setCount(prev => prev-1)}
                                            >-</button>
                                        <span className="text-center w-8">{count} </span>
                                        <button className="border rounded-md py-2 px-4 ml-2"
                                            onClick = {() => setCount(prev => prev+1)}
                                        >+</button>
                                    </div> */}
                                {/* </td> */}
                                <td className="py-4">{c.price}</td>
                            </tr>

                            )}
                        )
                        }
                           
                        
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="md:w-1/4">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Summary</h2>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>{subTotal}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Taxes</span>
                        <span>199</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>$0.00</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between mb-2">
                        <span className="font-semibold">Total</span>
                        <span className="font-semibold">{subTotal + 199}</span>
                    </div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
                        onClick  = {() => <Navigate to = '/' />}
                    >Checkout</button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
