import React, {useState , useEffect} from 'react'
import { useContext } from 'react';
import { User } from '../context/Context';
import toast from 'react-hot-toast';
import Layout from './Layout';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();
    const {fetchLoginDetails , setIsUser} = useContext(User);
    function  handleClick () {
        fetchLoginDetails(username , password)
        .then(res => {
            if(res) {
               toast.success('login successully');
               setIsUser(true);
               navigate('/home' ,{replace :true})
           }
           else {
               toast.error('invalid credentials');
               setUsername("");
               setPassword("");
           }
       });
       
    }
  return (
    <Layout>
    <div className = 'mt-10 flex justify-center items-center '>
        <div className = 'flex flex-col '>
            <input type="text" name="" id="" className = 'border-2 border-black my-4  ' 
            value = {username} onChange={(e) => setUsername(e.target.value)} />
            <input type="text" name="" id="" onChange={(e) => setPassword(e.target.value)} 
            value = {password} className = 'border-2 border-black '/>
            
            <button onClick={handleClick}
                className = 'bg-green-500 text-white my-4 font-bold rounded-md cursor:pointer '
            >LOGIN</button>
        </div>
    </div>
    </Layout>
  )
}
