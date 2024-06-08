import React from "react";
import {
  MdDashboard,
  MdMenuBook,
  MdLocalCarWash,
  MdAddModerator,
  MdOutlineSettings,
  MdApartment,
} from "react-icons/md";
import { FaUsers, FaRegUser } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

import { TbBrand4Chan } from "react-icons/tb";
import { BiCar } from "react-icons/bi";
import Link from "next/link";

const Sidebar = ({ selectedTab, onTabClick, toggleSidebar }) => {
  const navLinks = [
    { title: "Dashboard", icon: <MdDashboard className="icon" />, key: 1 },
    { title: "Orders", icon: <MdMenuBook className="icon" />, key: 2 },
    { title: "Rides", icon: <MdLocalCarWash className="icon" />, key: 3 },
    { title: "Clients", icon: <FaUsers className="icon" />, key: 4 },
    { title: "Drivers", icon: <FaRegUser className="icon" />, key: 5 },
    {
      title: "Shift",
      icon: <RiMoneyDollarCircleFill className="icon" />,
      key: 6,
    },
    {
      title: "LiveMap",
      icon: <MdApartment className="icon" />,
      key: 7,
    },
    {
      title: "CarClasses",
      icon: <BiCar className="icon" />,
      key: 8,
    },
    {
      title: "Branches",
      icon: <TbBrand4Chan className="icon" />,
      key: 9,
    },
    {
      title: "Moderators",
      icon: <MdAddModerator className="icon" />,
      key: 10,
    },
    {
      title: "Settings",
      icon: <MdOutlineSettings className="icon" />,
      key: 11,
    },
  ];

  return (
    <div
      className={`fixed  bg-slate-900 h-full border-l-[10px] border-l-slate-900 transition-[width] duration-[0.5s] overflow-hidden  ${
        toggleSidebar ? "w-[80px] " : "w-[294px]"
      }`}
    >
      <ul className="absolute top-0 left-0 w-full">
        <li className="relative w-full list-none hover:bg-white pointer-events-none mb-[40px] pl-2 pt-4">
          <a
            href="#"
            className="relative w-full flex text-white pl-2 items-center hover:text-blue-500"
          >
            <span className=" leading-[75px] relative min-w-[60px]">
              <FaRegUser className="text-[2rem]" />
            </span>
            <span className="relative inline-block px-2.5 h-[60px] text-start whitespace-nowrap">
              <span>Awolu Samuel</span>
              <span className="block">09064823477</span>
            </span>
          </a>
        </li>

        {navLinks.map((item) => {
          return (
            <li
              className={`relative w-full list-none rounded-tl-[30px] rounded-bl-[30px] pl-2 cursor-pointer ${
                selectedTab === item.title ? "bg-white" : ""
              }`}
              key={item.key}
              onClick={() => onTabClick(item.title)}
            >
              <a
                className={`relative w-full flex text-white pl-2 items-center  ${
                  selectedTab === item.title
                    ? "  text-slate-800 before:content-[''] before:absolute before:right-0 before:top-[-50px] before:w-[50px] before:h-[50px] before:bg-transparent before:rounded-full before:pointer-events-none before:shadow-[35px_35px_0px_10px_#fff] after:content-[''] after:absolute after:right-0 after:bottom-[-50px] after:w-[50px] after:h-[50px] after:bg-transparent after:rounded-full after:pointer-events-none after:shadow-[35px_-35px_0px_10px_#fff] "
                    : ""
                }`}
              >
                <span className=" leading-[75px] relative min-w-[60px]">
                  <span
                    className={`text-[2rem] ${
                      selectedTab === item.title
                        ? "text-slate-800"
                        : "text-white"
                    }`}
                  >
                    {item.icon}
                  </span>
                </span>
                <span
                  className={`relative inline-block px-2.5 font-semibold h-[60px] leading-[60px] text-start whitespace-nowrap ${
                    selectedTab === item.title ? "text-slate-800" : "text-white"
                  }`}
                >
                  {item.title}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Sidebar;
