import React, { useState } from "react";
import { drivers } from "./drivers/index.js";
import {
  createColumnHelper,
  getCoreRowModel,
  flexRender,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import ToggleSwitch from "./drivers/ToggleSwith.jsx";
import { BsArrowRight } from "react-icons/bs";
import { BiBox } from "react-icons/bi";
import FirstTable from "./drivers/FirstTable.jsx";

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
            <table className="border-none text-left w-full">
              <thead className="bg-gray-50">
                {table.getHeaderGroups().map((headerGroup) => {
                  return (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => {
                        return (
                          <th key={header.id} className="capitalize p-4">
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </th>
                        );
                      })}
                    </tr>
                  );
                })}
              </thead>

              <tbody>
                {table.getRowModel().rows.length
                  ? table.getRowModel().rows.map((row, i) => (
                      <tr
                        onClick={() => handleRowClick(row)}
                        key={i}
                        className={`${
                          i % 2 === 0 ? "bg-white" : "bg-gray-50/[0.2]"
                        }`}
                      >
                        {row.getVisibleCells().map((cell) => {
                          return (
                            <td key={cell.id} className="px-3.5 py-2">
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>

            {/* pagination  */}
            <div className="flex items-center justify-between mt-2 gap-2 text-black">
              <div className="flex gap-10 font-semibold">
                <p>Total User: {99}</p>
              </div>
              <div className="flex">
                <span className="flex items-center gap-1">
                  <strong>
                    {table.getState().pagination.pageIndex + 1} of{" "}
                    {table.getPageCount()}
                  </strong>
                  <div>Items</div>
                </span>

                <button
                  onClick={() => {
                    table.previousPage();
                  }}
                  disabled={!table.getCanPreviousPage()}
                  className="p-1 border  ml-4 border-gray-800 font-bold px-2 text-gray-900 disabled:opacity-30 "
                >
                  {"<"}
                </button>
                {table.getState().pagination.pageIndex === 0 ? (
                  ""
                ) : (
                  <span className="bg-gray-100 text-black px-3 py-2">
                    {table.getState().pagination.pageIndex}
                  </span>
                )}
                <span className="bg-blue-600 text-white px-3 py-2">
                  {" "}
                  {table.getState().pagination.pageIndex + 1}
                </span>
                <button
                  onClick={() => {
                    table.nextPage();
                  }}
                  disabled={!table.getCanNextPage()}
                  className="p-1 border border-gray-800 px-2 disabled:opacity-30 text-gray-900 font-bold "
                >
                  {">"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <FirstTable setSelectedDriver={setSelectedDriver} />
      )}
    </>
  );
};

export default Drivers;
