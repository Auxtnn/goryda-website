import { useState } from "react";
import ReuseTable from "./ReuseTable.jsx";
import { Data } from "../index.js";
import { createColumnHelper } from "@tanstack/react-table";

const LastHope = () => {
  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor("id", {
      cell: (info) => <p>{info.getValue() + 1}</p>,
      header: "S/N",
    }),
    columnHelper.accessor("BranchName", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Branch Name",
    }),
    columnHelper.accessor("freeKm", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Free Km",
    }),
  ];
  const [data, setData] = useState(() => [...Data]);
  const [shiftReport, setShiftReport] = useState(true);
  return (
    <div className="p-4 w-full">
      {shiftReport ? (
        <div className="flex justify-stretch w-full p-4 gap-6">
          <button
            className="w-full bg-transparent text-md py-2.5 rounded-md text-red-600 border border-1 border-red-600"
            onClick={() => setShiftReport(!shiftReport)}
          >
            Shift close
          </button>
          <button className="w-full bg-transparent text-md py-2.5 rounded-md text-blue-600 border border-1 border-blue-600">
            Management
          </button>
          <button className="w-full bg-transparent text-md py-2.5 rounded-md text-teal-600 border border-1 border-teal-600">
            History
          </button>
        </div>
      ) : (
        <div className="w-full p-4">
          <div className="flex justify-between px-8 py-2">
            <p className="font-bold text-2xl">Shift Report</p>
            <p className="flex gap-4 font-bold text-2xl">
              <span>🩹 {0}</span>
              <span>🩹 {0}</span>
            </p>
          </div>
          <form className="grid grid-cols-2 gap-10 rounded-lg shadow-lg p-5">
            <div className="flex flex-col gap-2.5">
              <label htmlFor="firstName" className="font-semibold">
                First Name:
              </label>
              <input
                type="text"
                placeholder="First Name"
                id="firstName"
                className="p-2 border-1 border border-gray-300 rounded-md outline-blue-400"
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <label htmlFor="lastName" className="font-semibold">
                Last Name:
              </label>
              <input
                type="text"
                placeholder="Last Name"
                id="lastName"
                className="p-2 border-1 border border-gray-300 rounded-md outline-blue-400"
              />
            </div>
            <div className="col-span-2">
              <div className="flex flex-col gap-2.5">
                <label htmlFor="message" className="font-semibold">
                  Message
                </label>
                <textarea
                  type="textarea"
                  placeholder="Your Message"
                  id="message"
                  className="p-4 border-1 border border-gray-300 rounded-md outline-blue-400 resize-none"
                />
              </div>
            </div>

            <button className="p-2.5 text-center border border-blue-600 text-blue-600 rounded-lg">
              Pay In
            </button>
            <button
              className="p-2.5 text-center border border-red-600 text-red-600 rounded-lg"
              onClick={() => setShiftReport(!shiftReport)}
            >
              Pay Out
            </button>
          </form>
        </div>
      )}

      <ReuseTable data={data} columns={columns} />
    </div>
  );
};

export default LastHope;
