import React from 'react';
import LeftSidebar from './Component/LeftSidebar/LeftSidebar';
import RightSidebar from './Component/RightSidebar/RightSidebar';

const Category = () => {
    return (
        <div className='flex'>
        <LeftSidebar></LeftSidebar>
        <RightSidebar></RightSidebar>
        </div>
    );
};

export default Category;