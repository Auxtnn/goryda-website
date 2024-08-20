import React from "react";
import { IoLogOut } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

const Header = ({ settoggleSidebar, toggleSidebar }) => {
  return (
    <div className="w-full h-[60px] md:h-[70px] flex justify-between items-center px-4 md:px-6 lg:px-8">
      {/* Sidebar Toggle Button */}
      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 text-2xl md:text-3xl cursor-pointer">
        <GiHamburgerMenu
          className="text-green-500"
          onClick={() => settoggleSidebar(!toggleSidebar)}
        />
      </div>

      {/* Logout Button */}
      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12  cursor-pointer">
        <Link href="/auth">
          <IoLogOut className="w-full h-full text-2xl md:text-3xl text-green-500 " />
        </Link>
      </div>
    </div>
  );
};

export default Header;
