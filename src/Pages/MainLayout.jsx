import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div className=''>
            <div className="mx-auto mb-4 ">
              <Navbar></Navbar>
            </div>
            <div className="mx-auto w-11/12">
             <Outlet></Outlet>
            </div>
            <div className="footer mt-5">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;