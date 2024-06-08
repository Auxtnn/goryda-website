import React from "react";
import { CiLogout } from "react-icons/ci";
import { IoHome, IoLogOut } from "react-icons/io5";
import { GiBottomRight3DArrow, GiHamburgerMenu } from "react-icons/gi";
import { BiMenu } from "react-icons/bi";

const Header = ({ settoggleSidebar, toggleSidebar }) => {
  const date = new Date();
  const realHour = date.getHours();
  console.log(realHour);
  let setHour =
    realHour < 12
      ? "Good Morning"
      : realHour > 11 || realHour < 16
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <div className="w-full h-[60px] flex justify-between items-center px-2.5">
      <div className=" cursor-pointer relative  top-0 w-[60px] h-[60px]flex justify-center items-center text-[2.5rem] ">
        <GiHamburgerMenu onClick={() => settoggleSidebar(!toggleSidebar)} />
      </div>
      <div className="flex gap-5">
        <p>{setHour}, Samuel 👋</p>
        <p className=" text-[13px]">
          You have <span className="text-blue-600">{1} new message</span>
        </p>
      </div>
      <div className=" cursor-pointer relative flex items-center justify-end text-[2.5rem] flex-1 ">
        <IoLogOut
          className="w-[50px] h-[50px]"
          onClick={() => console.log("Login Out ...")}
        />
      </div>
    </div>
  );
};

export default Header;
