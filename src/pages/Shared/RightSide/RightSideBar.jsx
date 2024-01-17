import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from '../Q-Zone/Qzone';
import bg_Img from "../../../assets/bg1.png"

const RightSideBar = () => {
    return (
        <div>
            <div>
                <h2 className='text-xl font-bold mb-4'>Log in With</h2>
                <div className='flex flex-col gap-2'>
                    <button className="btn btn-outline btn-info"> <FaGoogle /> Login with google</button>
                    <button className="btn btn-outline"> <FaGithub /> Login with GitHub</button>
                </div>
            </div>
            <div className='mt-8'>
                <h2 className='text-xl font-bold mb-4'>Find Us On</h2>
                <div className='flex flex-col gap-2'>
                    <button className="btn btn-outline"> <FaFacebook className='text-blue-600 text-xl' /> Login with google</button>
                    <button className="btn btn-outline"> <FaTwitter className='text-blue-400 text-xl' /> Login with GitHub</button>
                    <button className="btn btn-outline"> <FaInstagram className='text-red-900 text-xl' /> Login with GitHub</button>
                </div>
            </div>
            <QZone />

            <div className="card object-cover">
                <img className='object-cover' src={bg_Img} />
                <div>
                    <h2 className="card-title">Create an Amazing Newspaper</h2>
                    <p><small>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</small></p>
                   <div className='text-center'>
                   <button className="btn btn-error rounded-none px-6 text-white">Learn More</button>
                   </div>
                </div>
            </div>


        </div>
    );
};

export default RightSideBar;