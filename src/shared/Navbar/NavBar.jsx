import { Button, Collapse, IconButton, Input } from "@material-tailwind/react";
import { useState } from "react";
import SideBar from "./Components/SideBar";
import { FaCartShopping, FaClipboardList, FaUserLarge } from "react-icons/fa6";
import { BiSolidMessageDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <div className="flex justify-between items-center container p-4 mx-auto my-5">
      <div>
        <div className="font-bold text-primary">EasyBuy</div>
      </div>
      <div className="relative hidden md:flex w-full max-w-[250px] lg:max-w-[500px] gap-2 border-secondary">
        <Input
          type="search"
          label="Search here..."
          color="blue"
          className="pr-20"
          containerProps={{
            className: "w-full max-w-[500px] border-secondary",
          }}
        />
        <Button size="sm" className="!absolute right-1 top-1 rounded bg-primary">
          Search
        </Button>
      </div>
      <div className="hidden lg:flex justify-between items-center gap-4 text-blue-gray-400">
        <Link to={'/'}><div className="flex flex-col items-center gap-1"><FaUserLarge /><p className=" text-xs">Profile</p></div></Link>
        <Link to={'/'}><div className="flex flex-col items-center gap-1"><BiSolidMessageDetail /><p className=" text-xs">Message</p></div></Link>
        <Link to={'/'}><div className="flex flex-col items-center gap-1"><FaClipboardList /><p className=" text-xs">Orders</p></div></Link>
        <Link to={'/'}><div className="flex flex-col items-center gap-1"><FaCartShopping /><p className=" text-xs">My Cart</p></div></Link>
      </div>

      
      <SideBar />
    </div>
  );
};

export default NavBar;
