import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const LeftSide = () => {
    const [categories, setCategories] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h2 className='text-xl font-bold mb-4'>Category All</h2>
            <div className='mt-4 ps-5'>
                {
                    categories?.map(category => <p className='my-4 font-semibold' key={category.id}>
                        <Link className='text-lg text-[#8c8a8a]' to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }

            </div>
        </div>
    );
};

export default LeftSide;