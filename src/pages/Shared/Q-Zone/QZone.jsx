import React from 'react';
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"

const QZone = () => {
    return (


        <div className='bg-base-200 my-3'>
            <h2 className='text-xl font-bold mb-4 p-3'>Q-Zone</h2>
            <div className='flex flex-col items-center pb-3'>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>

    );
};

export default QZone;