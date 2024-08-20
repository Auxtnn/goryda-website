import React from "react";

const Box = ({ children, className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${className} border border-gray-800 bg-white rounded-[12px]`}
    >
      {children}
    </div>
  );
};

export default Box;
