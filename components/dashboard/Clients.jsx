"use client"
import React, { useState } from "react";
import TableWithEditDelete from "./rides/TableWithEditDelete";
import { FiSearch } from "react-icons/fi";

const Clients = () => {
  const [searchTerm, setSearchTerm] = useState(null);

  return (
    <div>
      <div>
        <div className="flex items-center justify-between p-4  bg-gray-100">
          <h1 className="text-2xl text-black">Drivers List</h1>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="pl-10 pr-4 py-2 rounded-lg text-black placeholder-gray-500"
              type="text"
              placeholder="Search by name"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      <TableWithEditDelete />
    </div>
  );
};

export default Clients;
