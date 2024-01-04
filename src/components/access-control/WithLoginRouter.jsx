
import React from 'react'
import { useContext } from 'react'
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import { User } from '../../context/Context'

export default function WithLoginRouter({children}) {
    const {isUser}  = useContext(User);
    if(isUser) {
        <Navigate to = '/home' />
        return children;
    }
    else {
        toast.error('Please login to proceed!');
        return <Navigate to= '/' />
    }

    
}
