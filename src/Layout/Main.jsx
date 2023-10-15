import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../shared/Navbar/NavBar";
import Footer from "../shared/Footer/Footer";
import MenuItems from "../shared/MenuItems/MenuItems";

const Main = () => {
  return (
    <>
      <NavBar />
      <MenuItems />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
