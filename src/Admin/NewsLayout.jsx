import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import RightSideBar from '../pages/Shared/RightSide/RightSideBar';


const NewsLayout = () => {
    return (
        <div className='my-container'>
            <Header/>
            <div className="grid lg:grid-cols-4 gap-4">

                    <div className="col-span-2 ">
                        <Outlet/>
                    </div>
                    <div className="">
                        <RightSideBar/>
                    </div>

                </div>
            <Footer/>
        </div>
    );
};

export default NewsLayout;