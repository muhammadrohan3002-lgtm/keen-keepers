import React from 'react';
import Navber from '../component/Navber';
import { Outlet } from 'react-router';
import Footer from '../component/Footer';

const Layout = () => {
    return (
        <div>
           <Navber/>
           <Outlet/>
           <Footer/>
        </div>
    );
};

export default Layout;