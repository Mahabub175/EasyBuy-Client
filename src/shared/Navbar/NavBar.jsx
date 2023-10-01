import { Button, Collapse, IconButton, Input } from "@material-tailwind/react";
import { useState } from "react";
import SideBar from "./Components/SideBar";

const NavBar = () => {
  const [isSideBar, setIsSideBar] = useState(false);

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
      <div className="hidden lg:flex justify-between items-center gap-4">
        <div><p>Profile</p></div>
        <div><p>Message</p></div>
        <div><p>Orders</p></div>
        <div><p>My Cart</p></div>
      </div>

      
      <SideBar />
    </div>
  );
};

export default NavBar;
