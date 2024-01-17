import React from 'react';
import RightSideBar from '../../Shared/RightSide/RightSideBar';
import LeftSide from '../../Shared/LeftSide/LeftSide';

const Home = () => {
    return (
        <div className="my-container">
                <div className="grid lg:grid-cols-4 gap-4">

                    <div className="">
                        <LeftSide/>
                    </div>
                    <div className="col-span-2 ">
                        center section
                    </div>
                    <div className="">
                        <RightSideBar/>
                    </div>

                </div>
            </div>
    );
};

export default Home;