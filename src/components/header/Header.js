import React from "react";
import "./header.css";
import Link from "next/link";

const NavBarLinks = [
  { key: "home", path: "/", label: "Home" },
  { key: "about", path: "/about/", label: "About Us" },
  { key: "privacy-policy", path: "/privacy-policy/", label: "Privacy Policy" },
  { key: "contact", path: "/contact/", label: "Contact Us" },
];

const NavbarLink = ({ item }) => (
  <Link
    href={item.path}
    className="text-stone-700 text-center hover:text-gray-300 hover:no-underline mx-2"
  >
    {item.label}
  </Link>
);

const Header = () => {
  return (
    <div className="shadow-sm p-6 items-center px-4 bg-white flex flex-col md:flex-row justify-center">
      <div className="flex items-center space-x-4">
        <span className="text-xl text-stone-700">Videoglancer</span>
      </div>
    </div>
  );
};

export default Header;
