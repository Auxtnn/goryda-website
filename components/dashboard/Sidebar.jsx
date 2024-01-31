import Image from "next/image";
import React from "react";
import { MdDashboard, MdMenuBook, MdLocalCarWash } from "react-icons/md";
import { FaUsers, FaRegUser } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdOutlineSettings } from "react-icons/md";

const Sidebar = ({ selectedTab, onTabClick }) => {
  const navLinks = [
    { title: "Dashboard", icon: <MdDashboard />, key: 1 },
    { title: "Orders", icon: <MdMenuBook />, key: 2 },
    { title: "Rides", icon: <MdLocalCarWash />, key: 3 },
    { title: "Clients", icon: <FaUsers />, key: 4 },
    { title: "Drivers", icon: <FaRegUser />, key: 5 },
    { title: "Shift", icon: <RiMoneyDollarCircleFill />, key: 6 },
    { title: "Settings", icon: <MdOutlineSettings />, key: 7 },
  ];

  return (
    <aside className="bg-gray-900 text-white h-screen w-[13rem] fixed top-0 overflow-y-auto pt-10 pl-2">
      <div className= 'ml-4 flex items-center gap-3 mb-12'>
        <div className="flex border-4 rounded-full w-12 h-12 bg-black items-center justify-center">
          <FaRegUser className="text-white w-8 h-8"/>
        </div>
        <h3>Admin</h3>
      </div>
      <h1 className="text-lg font-bold ml-4 text-white text-opacity-60">Main Menu</h1>
      <div className="flex flex-col gap-5 ml-4 pt-6">
        {navLinks.map((item) => (
          <div
            key={item.key}
            className={`cursor-pointer font-[600] flex gap-[1.12rem] items-center text-white pl-3${
              selectedTab === item.title ? "font-bold  text-green-600  bg-white py-3 pl-3 rounded-3xl" : ""
            }`}
            onClick={() => onTabClick(item.title)}
          >
            <div className=" w-[1.25rem] h-[1.25rem]">
              {item.icon}
            </div>
            <p className="">
             {item.title} 
            </p>
            
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
