import React, { useState, useCallback } from "react";
import {
  FaCar,
  FaMoneyBillWave,
  FaChevronRight,
  FaMicrophone,
  FaBookOpen,
} from "react-icons/fa";

import Card from "./pageDashboard/Card";
import Table from "./pageDashboard/Table";
import { MyChart, drivers } from "../index.js";

import DriverCard from "./pageDashboard/DriverCard";
import { BiRightArrow, BiHeadphone } from "react-icons/bi";
import { MdOutlineBatchPrediction } from "react-icons/md";

const Dashboard = () => {
  const [selectedDriver, setSelectedDriver] = useState(null);

  const showDriverDetails = useCallback((driver) => {
    setSelectedDriver(driver);
  }, []);

  const showDriversList = useCallback(() => {
    setSelectedDriver(null);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 lg:col-span-2 p-4 m-2">
          <p className="font-bold text-xl">Knowledge Base</p>
          <div className="relative w-full p-5 grid grid-cols-2 lg:grid-cols-4 gap-7 overflow-x-auto">
            <Card
              icon1={<FaCar />}
              icon2={<FaChevronRight />}
              text="Total Order"
              bg="bg-[#3366FF]/[0.2]"
              color="text-[#3366FF]"
            />
            <Card
              icon1={<FaMoneyBillWave />}
              icon2={<FaChevronRight />}
              text="Total Earnings"
              bg="bg-[#FF333F]/[0.2]"
              color="text-[#FF333F]"
            />
            <Card
              icon1={<FaCar />}
              icon2={<FaChevronRight />}
              text="Profit"
              bg="bg-[#FF9533]/[0.2]"
              color="text-[#FF9533]"
            />
            <Card
              icon1={<FaCar />}
              icon2={<FaChevronRight />}
              text="Profit"
              bg="bg-[#FF9533]/[0.2]"
              color="text-[#3366FF]"
            />
          </div>
          <div className="mt-4 bg-gray-50 px-3">
            <MyChart />
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <div className="bg-white rounded-lg p-4 m-2">
            <div className="text-xl font-bold text-gray-700 flex justify-between">
              <p>Top Drivers</p>
              <p>
                <BiRightArrow />
              </p>
            </div>
            <div className="w-full mx-auto mt-8">
              <div className="w-full mx-auto mt-8">
                {selectedDriver ? (
                  <div>
                    <div>
                      <div
                        className="flex justify-between bg-gray-100 items-center p-4 rounded-xl cursor-pointer mb-5"
                        onClick={showDriversList}
                      >
                        <div className="flex gap-3">
                          <img
                            src={selectedDriver.image}
                            alt={selectedDriver.name}
                            className="h-11 w-11 rounded-lg mb-2"
                          />
                          <div className="font-normal">
                            <span className="block font-semibold">
                              {selectedDriver.name}
                            </span>
                            <span className="text-[0.8rem]">0802376453728</span>
                          </div>
                        </div>
                        <div className="flex-1 text-right">
                          <span className="block">
                            Order: <span className="font-bold">$100</span>
                          </span>
                          <span className="block">
                            Income: <span className="font-bold">50</span>
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4  mt-2">
                        <DriverCard Icon={BiHeadphone} color={"bg-[#FFB978]"} />
                        <DriverCard
                          Icon={MdOutlineBatchPrediction}
                          color={"bg-[#F86060]"}
                        />
                        <DriverCard
                          Icon={FaMicrophone}
                          color={"bg-[#778DFF]"}
                        />
                        <DriverCard Icon={FaBookOpen} color={"bg-[#64E562]"} />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex flex-col gap-4">
                      {drivers.map((driver) => (
                        <div
                          key={driver.id}
                          className="bg-gray-100/[0.5] p-4 cursor-pointer flex  gap-4 items-center"
                          onClick={() => showDriverDetails(driver)}
                        >
                          <div className="flex gap-3">
                            <img
                              src={driver.image}
                              alt={driver.name}
                              className="h-11 w-11 rounded-lg mb-2"
                            />
                            <div className="font-normal">
                              <span className="block font-semibold">
                                {driver.name}
                              </span>
                              <span className="text-[0.8rem]">
                                0802376453728
                              </span>
                            </div>
                          </div>

                          <div className="flex-1 text-right">
                            <span className="block">
                              Order: <span className="font-bold">$100</span>
                            </span>
                            <span className="block">
                              Income: <span className="font-bold">50</span>
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="bg-white rounded-lg p-4 m-2">
          <div className="mt-4">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
