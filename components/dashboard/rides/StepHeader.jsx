import React, { useState } from "react";

const StepHeader = () => {
  const [colorChange, setColorChange] = useState(true);

  return (
    <>
      <ul className="flex list-none mt-5 justify-stretch items-center text-[12px]">
        <li
          className={`border-b-2 ${
            colorChange ? "text-blue-600 border-b-blue-600 " : " border-b-black"
          } font-bold text-md w-full`}
        >
          <span>Pending {`(${1})`} </span> <span>{">"}</span>
        </li>
        <li className="border-b-2 border-b-black font-bold text-md w-full">
          In Progress {`(${1})`} <span>{">"}</span>
        </li>
        <li className="border-b-2 border-b-black font-bold text-md w-full">
          Completed {`(${1})`} <span>{">"}</span>
        </li>
        <li className="border-b-2 border-b-black font-bold text-md w-full">
          Upcoming {`(${0})`} <span>{">"}</span>
        </li>
        <li className="border-b-2 border-b-black font-bold text-md w-full">
          Pre Cancelled {`(${0})`} <span>{">"}</span>
        </li>
        <li className="border-b-2 border-b-black font-bold text-md w-full">
          Cancelled By Driver {`(${20})`} <span>{">"}</span>
        </li>
        <li className="border-b-2  border-b-black font-bold text-md w-full">
          Processing {`(${20})`} <span>{">"}</span>
        </li>
      </ul>
    </>
  );
};

export default StepHeader;
