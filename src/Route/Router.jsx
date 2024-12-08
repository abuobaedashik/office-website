import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import AllReview from '../Pages/AllReview';
import MyReviews from '../Pages/MyReviews';
import AddReview from '../Pages/AddReview';
import WishList from '../Pages/WishList';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import MainLayout from '../Pages/MainLayout';
import PrivateRoute from './PrivateRoute';
import Details from '../Pages/Details';
import { TbError404, TbError404Off } from "react-icons/tb";
import { BiErrorCircle } from "react-icons/bi"
import Update from '../Pages/Update';

const Router =createBrowserRouter([
    {
      path: "/", 
      element: <MainLayout></MainLayout>,
      children:[
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=>fetch('http://localhost:5000/reviews-sort')
        },
        {
          path: "/allreview",
          element:<AllReview></AllReview>,
          loader:()=>fetch('http://localhost:5000/reviews')
        },
        {
          path: "/myreview",
          element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
          loader: ()=>fetch('http://localhost:5000/reviews')
        },
        {
          path: "/addreview",
          element:<PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>,
        },
        {
          path: "/wishlist",
          element: <WishList></WishList>,
          loader:()=>fetch('http://localhost:5000/watchlist')
        },
        {
          path: "/allreview/:id",
          element: <PrivateRoute><Details></Details></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/reviews/${params.id}`)
        },
        {
          path: "/myreview/update/:id",
          element: <Update></Update>,
          loader:({params})=>fetch(`http://localhost:5000/update/${params.id}`)
        },
      ]
    },
    {
      path: "/login",
      element: <Login></Login>,
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