import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import MainLayout from '../Pages/MainLayout';
import PrivateRoute from './PrivateRoute';
import { TbError404, TbError404Off } from "react-icons/tb";
import { BiErrorCircle } from "react-icons/bi"
import About from '../Components/About';


const Router =createBrowserRouter([
    {
      path: "/", 
      element: <MainLayout></MainLayout>,
      children:[
        {
          path: "/",
          element: <Home></Home>,
        },
    
      ]
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/about",
      element: <About></About>,
    },
    {
      path:"/register",
      element:<Register></Register>
    },
    {
        path:'*',
        element:<h2 className="text-4xl font-bold min-h-screen flex items-center justify-center text-red-700 flex-col gap-4">
          <p className=' text-5xl text-[#131313]'> 
            <TbError404Off></TbError404Off></p>
            <p>Page Not Found</p>
          <p className=' text-5xl text-[#131313]'> 
          <BiErrorCircle></BiErrorCircle>  
         </p>
        </h2>
    }
  ]);
export default Router;