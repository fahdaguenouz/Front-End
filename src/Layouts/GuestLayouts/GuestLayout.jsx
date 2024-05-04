import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Pages/common/header/Header';
// import Header from '../../Pages/Header';
// import Footer from '../../Pages/Footer';
import Footer from './../../Pages/common/footer/Footer';

const GuestLayout = () => {
    return (
        <div>
            <div>
                <Header/>
            </div>
        <div>
            <Outlet/>
        </div>
        <div>
            <Footer/>
        </div>
        </div>
    );
}

export default GuestLayout;
