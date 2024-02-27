import React from "react";
import { CiLogout } from "react-icons/ci";
import { BiMenu } from "react-icons/bi";

const Header = ({ settoggleSidebar, toggleSidebar }) => {
  const date = new Date();
  let time = date.getHours();
  const realHour =
    time < 12
      ? "Good morning"
      : time > 11 && time < 16
      ? "Good Afternoon"
      : "Good evening";

  return (
    <div className="w-full text-gray-900 flex justify-between items-center px-4 mb-4">
      <div className="flex-1 flex gap-10 ">
        <BiMenu
          className="text-2xl cursor-pointer"
          onClick={() => settoggleSidebar(!toggleSidebar)}
        />
        <p>
          {realHour}, <span className="italic">Awolu Samuel 👋</span>
        </p>
        <p className="text-[0.75rem]">
          You have <span className="text-blue-700"> 1 new message</span>{" "}
        </p>
      </div>
      <span>
        <CiLogout className="text-2xl cursor-pointer" />
      </span>
    </div>
  );
};

export default Header;
