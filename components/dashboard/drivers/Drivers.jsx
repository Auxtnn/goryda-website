"use client"
import React, { useState } from "react";
import { drivers } from "./index.js";
import {
  createColumnHelper,
  getCoreRowModel,
  flexRender,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import ToggleSwitch from "./ToggleSwith.jsx";
import { BsArrowRight } from "react-icons/bs";
import { BiBox } from "react-icons/bi";
import FirstTable from "./FirstTable.jsx";
import RenderTable from "../table/RenderTable.jsx";

const Drivers = () => {
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("", {
      id: "S.no",
      cell: (info) => <p>{info.getValue()}</p>,
      header: "SN",
    }),

    columnHelper.accessor("birthday", {
      cell: (info) => (
        <p className=" flex gap-3 items-center">{info?.getValue()}</p>
      ),
      header: "Date",
    }),

    columnHelper.accessor("value", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Value",
    }),
    columnHelper.accessor("comment", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Comment",
    }),

    columnHelper.accessor("arrow", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "",
      filterable: true,
    }),
  ];

  const [data, setData] = useState(() => [...drivers]);
  const [selectedDriver, setSelectedDriver] = useState(null);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),

    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  const handleRowClick = (driver) => {
    console.log(driver);
    setSelectedDriver(driver);
  };

  return (
    <>
      {selectedDriver !== null ? (
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">Drivers Data</h2>
          <div className="flex p-4 shadow-lg gap-4 mb-10">
            <div className="grid grid-cols-2 ">
              <div className=" flex gap-10 p-4">
                <img
                  src="https://images.freeimages.com/variants/4D1pn6Vd33yWxmL2qE5BHbph/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d"
                  alt=""
                  className="w-32 h-32 block rounded-xl"
                />
                <div>
                  <div className="flex gap-10">
                    <p> Birthday: </p> <p>{1995}</p>
                  </div>
                  <div className="flex gap-10">
                    <p>State: </p>
                    <p>{selectedDriver.original.otherDetails.cash}</p>
                  </div>
                  <div className="flex gap-10">
                    <p>Balance: </p>
                    <p>{selectedDriver.original.otherDetails.cash}</p>
                  </div>
                  <div className="flex gap-10">
                    <p>State:</p>
                    <p className="flex">
                      <ToggleSwitch /> active
                    </p>
                  </div>
                </div>
              </div>
              <p className="pl-4 border-l border-l-gray-700">
                Comment:
                <span className="block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  error itaque incidunt ullam vitae perferendis consequatur
                  voluptatum temporibus, eum cupiditate! consectetur adipisicing
                  elit. Qui error itaque incidunt ullam vitae perferendis
                  consequatur voluptatum temporibus, eum cupiditate!
                </span>
              </p>
            </div>
          </div>

          <div className="flex justify-between items-stretch gap-4">
            <button className="bg-green-500 text-white flex justify-between px-4 items-center font-bold py-6 rounded w-full">
              <span>
                <BiBox className="w-5 h-5" />
              </span>{" "}
              Order Accept{" "}
              <span>
                <BsArrowRight className="h-5 w-5" />
              </span>
            </button>
            <button className="bg-red-500 text-white flex justify-between px-4 items-center font-bold  py-6 rounded w-full">
              <span>
                <BiBox className="w-5 h-5" />
              </span>{" "}
              Order Cancel{" "}
              <span>
                <BsArrowRight className="h-5 w-5" />
              </span>
            </button>
            <button className="bg-yellow-500 text-white flex justify-between px-4 items-center font-bold  py-6 rounded w-full">
              <span>
                <BiBox className="w-5 h-5" />
              </span>{" "}
              Order Skip{" "}
              <span>
                <BsArrowRight className="h-5 w-5" />
              </span>
            </button>

            <button className="bg-red-500 text-white flex justify-between px-4 items-center font-bold  py-6 rounded w-full">
              <span>
                <BiBox className="w-5 h-5" />
              </span>{" "}
              Rate: Hate{" "}
              <span>
                <BsArrowRight className="h-5 w-5" />
              </span>
            </button>
            <button className="bg-yellow-500 text-white flex justify-between px-4 items-center font-bold py-6 rounded w-full">
              <span>
                <BiBox className="w-5 h-5" />
              </span>{" "}
              Rate: Neutral{" "}
              <span>
                <BsArrowRight className="h-5 w-5" />
              </span>
            </button>
            <button className="bg-green-500 text-white flex justify-between px-4 items-center font-bold  py-6 rounded w-full">
              <span>
                <BiBox className="w-5 h-5" />
              </span>{" "}
              Rate: Love{" "}
              <span>
                <BsArrowRight className="h-5 w-5" />
              </span>
            </button>
          </div>
          <div className="p-2 text-black">
            <RenderTable table={table} />
          </div>
        </div>
      ) : (
        <FirstTable setSelectedDriver={setSelectedDriver} />
      )}
    </>
  );
};

export default Drivers;
