"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, SearchInput } from "@/components/Global";

// Dummy data for users
const dummyUsers = [
  {
    id: 1,
    passengerEmail: "passenger2@example.com",
    name: "Jane",
    date: "2024-08-18",
    completedRides: "50",
    canceledRides: "10",
  },
  {
    id: 2,
    passengerEmail: "passenger2@example.com",
    name: "Jane",
    date: "2024-08-18",
    completedRides: "50",
    canceledRides: "10",
  },
  {
    id: 3,
    passengerEmail: "passenger2@example.com",
    name: "Jane",
    date: "2024-08-18",
    completedRides: "50",
    canceledRides: "10",
  },
  {
    id: 4,
    passengerEmail: "passenger2@example.com",
    name: "Jane",
    date: "2024-08-18",
    completedRides: "50",
    canceledRides: "10",
  },
  {
    id: 5,
    passengerEmail: "passenger2@example.com",
    name: "Jane",
    date: "2024-08-18",
    completedRides: "50",
    canceledRides: "10",
  },
  {
    id: 6,
    passengerEmail: "passenger2@example.com",
    name: "Jane",
    date: "2024-08-18",
    completedRides: "50",
    canceledRides: "10",
  },
  {
    id: 7,
    passengerEmail: "passenger2@example.com",
    name: "Jane",
    date: "2024-08-18",
    completedRides: "50",
    canceledRides: "10",
  },
  {
    id: 8,
    passengerEmail: "passenger2@example.com",
    name: "ane",
    date: "2024-08-18",
    completedRides: "50",
    canceledRides: "10",
  },
  // Add more dummy rides as needed
];

const userFields = [
  { key: "passengerEmail", label: "Email" },
  { key: "name", label: "First Name" },
  { key: "date", label: "Date" },
  { key: "completedRides", label: "Completed Rides" },
  { key: "canceledRides", label: "Canceled Rides" },
];

const Users = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const itemsPerPage = 5;

  // Filter rides based on search value
  const filteredUsers = dummyUsers.filter((user) =>
    Object.values(user).some((value) =>
      value.toString().toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  // Calculate pagination
  const totalItems = filteredUsers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Get users to display on the current page
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="flex flex-col gap-6 p-6">
      <h1 className="text-2xl font-bold">Users</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between mb-4">
          <SearchInput
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search users"
          />
        </div>
        {/* Responsive table container */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                {userFields.map((field) => (
                  <th
                    key={field.key}
                    className="text-center px-2 py-4 bg-green-50/25 whitespace-nowrap"
                  >
                    {field.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr key={user.id} className="border-t">
                  <td className="p-2 text-center whitespace-nowrap">
                    {user.passengerEmail}
                  </td>
                  <td className="p-2 text-center whitespace-nowrap">
                    {user.name}
                  </td>
                  <td className="p-2 text-center whitespace-nowrap">
                    {user.date}
                  </td>
                  <td className="p-2 text-center whitespace-nowrap">
                    {user.completedRides}
                  </td>
                  <td className="p-2 text-center whitespace-nowrap">
                    {user.canceledRides}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm">
            Showing {indexOfFirstItem + 1} to{" "}
            {Math.min(indexOfLastItem, totalItems)} of {totalItems} entries
          </span>

          <div className="flex gap-2">
            <Button
              btnText="Prev"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="text-sm border-gray-300 bg-white"
            />
            <Button
              btnText="Next"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="text-sm border-gray-300 bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
