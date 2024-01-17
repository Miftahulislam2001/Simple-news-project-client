import React from 'react';
import RightSideBar from '../../Shared/RightSide/RightSideBar';

const Home = () => {
    return (
        <div className="my-container">
                <div className="grid lg:grid-cols-4 gap-4">

                    <div className="">
                        left side
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