import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div className=' max-w-[1920px] mx-auto'>
            <div className="mx-auto">
              <Navbar></Navbar>
            </div>
            <div className=" py-[12px] bg-[#66D2CE] md:pb-10 pb-5 border-3 border-blue-400"></div>
            <div className="mx-auto ">
             <Outlet></Outlet>
            </div>
            <div className="footer  bg-[#131313]  max-w-full flex items-center justify-center ">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;