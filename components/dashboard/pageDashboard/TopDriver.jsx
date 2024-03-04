import React from "react";

const TopDriver = ({ image, earnings, amount, selectedDriver }) => {
  return (
    <>
      <div className="bg-gray-50/[0.3] rounded-lg p-2 my-4 gap-4 flex justify-between items-center">
        <div className="flex gap-4">
          <img src={image} alt="driver" className="h-16 w-16 rounded-full" />
          <div>
            <div className="text-gray-700">Earnings: {earnings}</div>
            <div className=" text-gray-700">Amount: {amount}</div>
          </div>
        </div>

        <div className="ml-4">
          <p>order: $90</p>
          <p>Income: $100</p>
        </div>
      </div>
    </>
  );
};
export default TopDriver;
