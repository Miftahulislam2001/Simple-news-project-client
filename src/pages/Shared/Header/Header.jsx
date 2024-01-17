import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center mt-5">
                <img src={logo} alt="" srcset="" />
                <p className='font-sans text-[#706F6F] text-lg'> Journalism Without Fear or Favour</p>
                <p className='font-sans text-[#706F6F] text-md font-semibold'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;