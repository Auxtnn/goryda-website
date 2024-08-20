"use client";

import React from "react";
import { Badge } from "@/components/Global";

// Dummy data for rides
const dummyRides = [
  {
    id: 1,
    driverName: "Jane Smith",
    passengerEmail: "passenger2@example.com",

    rideType: "Premium",
    driverId: "DRV002",
    cancelledRides: "50",
    completedRides: "100",
    totalEarning: "₦50,000",
  },
  {
    id: 2,
    driverName: "Jane Smith",
    passengerEmail: "passenger2@example.com",

    rideType: "Premium",
    driverId: "DRV002",
    cancelledRides: "50",
    completedRides: "100",
    totalEarning: "₦50,000",
  },
  {
    id: 3,
    driverName: "Jane Smith",
    passengerEmail: "passenger2@example.com",

    rideType: "Premium",
    driverId: "DRV002",
    cancelledRides: "50",
    completedRides: "100",
    totalEarning: "₦50,000",
  },
  {
    id: 4,
    driverName: "Jane Smith",
    passengerEmail: "passenger2@example.com",

    rideType: "Premium",
    driverId: "DRV002",
    cancelledRides: "50",
    completedRides: "100",
    totalEarning: "₦50,000",
  },
  {
    id: 5,
    driverName: "Jane Smith",
    passengerEmail: "passenger2@example.com",

    rideType: "Premium",
    driverId: "DRV002",
    cancelledRides: "50",
    completedRides: "100",
    totalEarning: "₦50,000",
  },
  {
    id: 6,
    driverName: "Jane Smith",
    passengerEmail: "passenger2@example.com",

    rideType: "Premium",
    driverId: "DRV002",
    cancelledRides: "50",
    completedRides: "100",
    totalEarning: "₦50,000",
  },
  {
    id: 7,
    driverName: "Jane Smith",
    passengerEmail: "passenger2@example.com",
    rideType: "Premium",
    driverId: "DRV002",
    cancelledRides: "50",
    completedRides: "100",
    totalEarning: "₦50,000",
  },
];

const rideFields = [
  { key: "driverName", label: "Full Name" },
  { key: "passengerEmail", label: "Email" },
  { key: "driverId", label: "Driver ID" },
  { key: "rideType", label: "Vehicle Type" },
  { key: "cancelledRides", label: "Cancelled Rides" },
  { key: "completedRides", label: "Completed Rides" },
  { key: "totalEarning", label: "Total Earning" },
];

const TopDrivers = () => {
  // Slice the dummyRides array to show only the first 7 items
  const topRides = dummyRides.slice(0, 5);
  return (
    <div className="flex flex-col gap-6 p-2">
      <h1 className="md:text-2xl text-lg font-bold">Top Drivers</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                {rideFields.map((field) => (
                  <th
                    key={field.key}
                    className="text-left px-2 py-4 bg-green-50/25"
                  >
                    {field.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {topRides.map((ride) => (
                <tr key={ride.id} className="border-t">
                  <td className="p-2 md:text-[.85rem] text-sm  whitespace-nowrap">
                    {ride.passengerEmail}
                  </td>

                  <td className="p-2 md:text-[.85rem] text-sm  whitespace-nowrap">
                    {ride.rideType}
                  </td>
                  <td className="p-2 md:text-[.85rem] text-sm  whitespace-nowrap">
                    {ride.driverName}
                  </td>
                  <td className="p-2 md:text-[.85rem] text-sm  whitespace-nowrap">
                    {ride.driverId}
                  </td>
                  <td className="p-2 md:text-[.85rem] text-sm  whitespace-nowrap">
                    {ride.cancelledRides}
                  </td>
                  <td className="p-2 md:text-[.85rem] text-sm  whitespace-nowrap">
                    {ride.completedRides}
                  </td>
                  <td className="p-2  md:text-[.85rem] text-sm  whitespace-nowrap">
                    {ride.totalEarning}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopDrivers;
