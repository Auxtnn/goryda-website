import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex items-center justify-center w-[50px]">
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="toggle"
            className="sr-only"
            onChange={toggle}
          />
          <div className="block bg-blue-300 w-8 h-5 rounded-full"></div>
          <div
            className={`dot absolute left-1 top-1  w-3 h-3 rounded-full transition ${
              isToggled ? "transform translate-x-full bg-blue-800" : "bg-white"
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
