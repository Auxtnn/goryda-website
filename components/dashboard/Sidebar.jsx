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
    <aside className={toggleSidebar ? "navigation" : "navigation width"}>
      <div className="flex mb-10 w-[100%]">
        <div className="flex mb-4 p-4 gap-4 items-center">
          <span className="">
            <FaRegUser className="text-white w-10 p-[2px] h-10 border-2 border-solid border-white rounded-full" />
          </span>
          <p className={toggleSidebar ? "" : "hidden"}>
            <span className="block text-white">Brand Name</span>
            <span className="block text-gray-200 text-[10px]">
              +234-07068482163
            </span>
          </p>
        </div>
      </div>
      <ul className="mt-20">
        {navLinks.map((item) => (
          <li
            key={item.key}
            className={`list ${selectedTab === item.title ? "active" : ""}`}
            onClick={() => onTabClick(item.title)}
          >
            <p>
              <span className="icon">{item.icon}</span>
              <span className="title">{item.title}</span>
            </p>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
