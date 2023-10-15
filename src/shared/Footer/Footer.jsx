import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const abouts = ["About Us", "Find Stores", "Categories", "Blogs"];
const partners = ["About Us", "Find Stores", "Categories", "Blogs"];
const informations = ["Help Center", "Money Refunds", "Shipping", "Contacts"];
const users = ["Login", "Register", "Setting", "My ORders"];

const Footer = () => {
  return (
    <footer className="mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-around gap-4 container mx-auto">
        <div className="max-w-[450px]">
          <p className="font-bold text-primary text-3xl">Easy Buy</p>
          <p className="mt-4 text-[#505050] text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
            totam, voluptatibus quae atque minima iste. Natus blanditiis harum
            deserunt aliquid.
          </p>
          <div className="flex gap-4 text-[22px] mt-6">
            <FaFacebook className="rounded-full hover:scale-125 duration-300 cursor-pointer" />
            <FaTwitter className="rounded-full hover:scale-125 duration-300" />
            <FaLinkedinIn className="rounded-full hover:scale-125 duration-300" />
            <FaInstagram className="rounded-full hover:scale-125 duration-300" />
            <FaYoutube className="rounded-full hover:scale-125 duration-300" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-4">
          <div>
            <p className="font-bold">About</p>
            <ul>
              {abouts.map((about, index) => (
                <li
                  key={index}
                  className="mt-1 text-[#505050] text-sm hover:underline cursor-pointer"
                >
                  {about}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold">Partnerships</p>
            <ul>
              {partners.map((partner, index) => (
                <li
                  key={index}
                  className="mt-1 text-[#505050] text-sm hover:underline cursor-pointer"
                >
                  {partner}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold">Information</p>
            <ul>
              {informations.map((info, index) => (
                <li
                  key={index}
                  className="mt-1 text-[#505050] text-sm hover:underline cursor-pointer"
                >
                  {info}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold">For Users</p>
            <ul>
              {users.map((user, index) => (
                <li
                  key={index}
                  className="mt-1 text-[#505050] text-sm hover:underline cursor-pointer"
                >
                  {user}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-7 bg-[#f2f2f2] mt-6">
        <p className="text-sm">EasyBuy ©2023. All rights reserved.</p>
        <p className="text-sm">
          <span className="hover:text-blue-600 hover:underline">
            {" "}
            Legal Disclaimer
          </span>{" "}
          |{" "}
          <span className="hover:text-blue-600 hover:underline">
            {" "}
            Privacy Policy
          </span>{" "}
          |{" "}
          <span className="hover:text-blue-600 hover:underline">
            {" "}
            Terms Of use
          </span>{" "}
          | <span className="hover:text-blue-600 hover:underline">
            {" "}
            Career
          </span>{" "}
          |
          <span className="hover:text-blue-600 hover:underline">
            {" "}
            Accessibility
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
