"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button, SearchInput, Badge } from "@/components/Global";

// Dummy data for rides
const dummyRides = [
  {
    id: 1,
    passengerEmail: "passenger1@example.com",
    rideType: "Standard",
    date: "2024-08-19",

    driverName: "John Doe",
    driverId: "DRV001",
    status: "Completed",
  },
  {
    id: 2,
    passengerEmail: "passenger2@example.com",
    rideType: "Premium",
    date: "2024-08-18",

    driverName: "Jane Smith",
    driverId: "DRV002",
    status: "Cancelled",
  },
  {
    id: 3,
    passengerEmail: "passenger2@example.com",
    rideType: "Premium",
    date: "2024-08-18",

    driverName: "Jane Smith",
    driverId: "DRV002",
    status: "Cancelled",
  },
  {
    id: 4,
    passengerEmail: "passenger2@example.com",
    rideType: "Premium",
    date: "2024-08-18",

    driverName: "Jane Smith",
    driverId: "DRV002",
    status: "Cancelled",
  },
  {
    id: 5,
    passengerEmail: "passenger2@example.com",
    rideType: "Premium",
    date: "2024-08-18",
    driverName: "Jane Smith",
    driverId: "DRV002",
    status: "Cancelled",
  },
  {
    id: 6,
    passengerEmail: "passenger2@example.com",
    rideType: "Premium",
    date: "2024-08-18",

    driverName: "Jane Smith",
    driverId: "DRV002",
    status: "Cancelled",
  },
  {
    id: 7,
    passengerEmail: "passenger2@example.com",
    rideType: "Premium",
    date: "2024-08-18",

    driverName: "Jane Smith",
    driverId: "DRV002",
    status: "Cancelled",
  },
  {
    id: 8,
    passengerEmail: "passenger2@example.com",
    rideType: "Premium",
    date: "2024-08-18",

    driverName: "Jane Smith",
    driverId: "DRV002",
    status: "Completed",
  },
];

const rideFields = [
  { key: "driverName", label: "Full Name" },
  { key: "passengerEmail", label: "Email" },

  { key: "driverId", label: "Driver ID" },
  { key: "date", label: "Registered Date" },
  { key: "rideType", label: "Vehicle Type" },

  { key: "status", label: "Status" },
  { key: "action", label: "Action" },
];

const Drivers = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const itemsPerPage = 7;

  // Filter rides based on search value
  const filteredRides = dummyRides.filter((ride) =>
    Object.values(ride).some((value) =>
      value.toString().toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  // Calculate pagination
  const totalItems = filteredRides.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Get users to display on the current page
  const currentUsers = filteredRides.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="flex flex-col gap-6 p-6">
      <h1 className="text-2xl font-bold">Drivers</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between mb-4">
          <SearchInput
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search drivers"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                {rideFields.map((field) => (
                  <th
                    key={field.key}
                    className="text-left whitespace-nowrap px-2 py-4 bg-green-50/25"
                  >
                    {field.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((ride) => (
                <tr key={ride.id} className="border-t">
                  <td className="p-2 md:text-[.85rem] text-sm whitespace-nowrap">
                    {ride.passengerEmail}
                  </td>
                  <td className="p-2 md:text-[.85rem] text-sm whitespace-nowrap">
                    {ride.date}
                  </td>
                  <td className="p-2 md:text-[.85rem] text-sm whitespace-nowrap">
                    {ride.rideType}
                  </td>
                  <td className="p-2 md:text-[.85rem] text-sm whitespace-nowrap">
                    {ride.driverName}
                  </td>
                  <td className="p-2 md:text-[.85rem] text-sm whitespace-nowrap">
                    {ride.driverId}
                  </td>
                  <td className="p-2 md:text-[.85rem] text-[#109124] text-sm whitespace-nowrap">
                    <Badge status={ride.status} />
                  </td>
                  <td className="p-2">
                    <Link href={`/dashboard/driver/id`}>
                      <Button
                        btnText="View Details"
                        className="hover:text-green-500 md:text-[.85rem] whitespace-nowrap text-sm border-gray-300 bg-white"
                      />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="gap-4 md:gap-8 mt-4 grid md:grid-cols-4 sm-grid-cols-2 whitespace-nowrap">
            <p className="md:text-base text-sm font-semibold">
              Total Drivers: <span className="font-normal">100 {}</span>{" "}
            </p>
            <p className="md:text-base text-sm font-semibold">
              Keke Drivers: <span className="font-normal">100 {}</span>{" "}
            </p>
            <p className="md:text-base text-sm font-semibold">
              Car Drivers: <span className="font-normal">100 {}</span>
            </p>
            <p className="md:text-base text-sm font-semibold">
              Suv Drivers: <span className="font-normal">100 {}</span>
            </p>
          </div>

          <div className="flex justify-between md:flex-row flex-col gap-4 mb-4 items-center mt-4">
            <span className=" md:text-[.85rem] text-sm">
              Showing {indexOfFirstItem + 1} to{" "}
              {Math.min(indexOfLastItem, totalItems)} of {totalItems} entries
            </span>

            <div className="flex gap-2">
              <Button
                btnText="Prev"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className=" md:text-[.85rem] text-sm border-gray-300 bg-white"
              />
              <Button
                btnText="Next"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className=" md:text-[.85rem] text-sm border-gray-300 bg-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drivers;
