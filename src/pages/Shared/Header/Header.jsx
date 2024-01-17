import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <div className='my-container'>
            <div className="flex flex-col justify-center items-center gap-3">
                <img src={logo} alt="" srcset="" />
                <p className='font-sans text-[#706F6F] text-lg'> Journalism Without Fear or Favour</p>
                <p className='font-sans text-[#706F6F] text-md font-semibold'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>

            <div className='flex bg-base-200 my-5 rounded'>
                <button className="btn btn-error text-[#f5f2f2] font-semibold">Latest</button>
                <Marquee gradient={200}>
                    I can be a React component, multiple React components, or just some text.... I can be a React component, multiple React components, or just some text.... I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

            <div className="navbar bg-base-100 rounded">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Item 2</a>
                                {/* <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul> */}
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold text-md text-[#706F6F]">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Career</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="w-10 mr-3">
                        <img className='rounded-full object-cover' alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                    <a className="btn btn-sm bg-gray-600 rounded-none text-white font-bold px-6">Login</a>
                </div>


                
            </div>



            <div className="my-container">
                <div className="grid lg:grid-cols-4 gap-4 text-center">

                    <div className="">
                        left side
                    </div>
                    <div className="col-span-2 ">
                        center section
                    </div>
                    <div className="">
                        Right side section
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Header;