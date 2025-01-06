import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div className=''>
            <div className="mx-auto">
              <Navbar></Navbar>
            </div>
            <div className=" py-[12px] mb-10 border-3 border-blue-950"></div>
            <div className="mx-auto border-2 border-green-700">
             <Outlet></Outlet>
            </div>
            <div className="footer mt-5">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;