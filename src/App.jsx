import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Layout from './components/Layout';
import Login from './components/Login'
import { Toaster } from 'react-hot-toast';
import WithLoginRouter from './components/access-control/WithLoginRouter';
import Cart from './components/Cart';


const router = createBrowserRouter([
  {
    path : '/', 
    element : <Layout />
  }, {
    path : '/home' ,

    element : <WithLoginRouter>
                <Home />
              </WithLoginRouter>

  }, {
    path : '/login' ,
    element : <Login />
  } , {
    path  : '/cart', 
    element : <Cart />
  }
])
function App() {
  return (
      <>
        <RouterProvider router = {router} />
        <Toaster position='top-right'/>
      </>
  )
}

export default App
