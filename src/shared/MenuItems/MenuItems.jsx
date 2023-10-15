import React from 'react';
import { Link } from 'react-router-dom';

const MenuItems = () => {
    return (
        <div className="container mx-auto hidden lg:flex justify-between items-center gap-4 px-4 text-blue-gray-400">
            <div className="flex justify-between items-center gap-4 text-blue-gray-400">
                <Link to={'/'}><div className=""><p className="">Profile</p></div></Link>
                <Link to={'/'}><div className=""><p className="">Profile</p></div></Link>
                <Link to={'/'}><div className=""><p className="">Profile</p></div></Link>
                <Link to={'/'}><div className=""><p className="">Message</p></div></Link>
                <Link to={'/'}><div className=""><p className="">Orders</p></div></Link>
                <Link to={'/'}><div className=""><p className="">My Cart</p></div></Link>
            </div>
            <div className="flex justify-between items-center gap-4 text-blue-gray-400">
                <Link to={'/'}><div className=""><p className="">Profile</p></div></Link>
                <Link to={'/'}><div className=""><p className="">My Cart
                </p></div></Link>
            </div>
        </div>
    );
};

export default MenuItems;