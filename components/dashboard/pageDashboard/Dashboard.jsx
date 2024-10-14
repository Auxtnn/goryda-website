"use client";
import React, { useState, useCallback, useEffect } from "react";
import { FaCar, FaUsers } from "react-icons/fa";
import TransactionList from "../transaction/TransactionList";
import Image from "next/image";
import { FaNairaSign } from "react-icons/fa6";
import TopDrivers from "./TopDriver";

const Dashboard = () => {
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [error, setError] = useState("");
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [totalRides, setTotalRides] = useState(0);
  const [totalDrivers, setTotalDrivers] = useState(0);
  const [cancelledRides, setCancelledRides] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("/api/v1/admin/dashboard-summary", {
          method: "GET",
        });
        console.log("Response status:", response.status); // Check if the response status is OK (200)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Data: ", data);

        setTotalEarnings(data.data.totalEarnings || 0);
        setTotalRides(data.data.totalRides || 0);
        setTotalDrivers(data.data.totalDrivers || 0);
        setCancelledRides(data.data.cancelledRides || 0);

        const transactions = data.data.transactions || [];
        setTransactions(transactions);
        setFilteredTransactions(transactions.slice(0, 5));
      } catch (error) {
        setError(error.message);
        // toast.error("Failed to fetch transactions");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  //   if (loading) {
  //     return (
  //       <div className="flex justify-center items-center h-screen">
  //         <Loader />
  //       </div>
  //     );
  //   }

  const showDriverDetails = useCallback((driver) => {
    setSelectedDriver(driver);
  }, []);

  const showDriversList = useCallback(() => {
    setSelectedDriver(null);
  }, []);

  return (
    <div className="px-4 md:px-6 pt-8 pb-8 overflow-y-auto">
      <div className=" py-3">
        <p className="text-lg font-semibold">Dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4">
        {/* Earnings Card */}
        <div className="bg-white border rounded py-3 px-4 flex flex-col items-center gap-2">
          <FaNairaSign className="text-green-500 text-3xl" />

          <p className="text-sm text-gray-600">Total Earnings</p>
          <h5 className="text-lg font-semibold">₦{totalEarnings}</h5>
        </div>

        {/* Rides Card */}
        <div className="bg-white border rounded py-3 px-4 flex flex-col items-center gap-2">
          <FaCar className="text-green-500 text-3xl" />
          <p className="text-sm text-gray-600">Completed Rides</p>
          <h5 className="text-lg font-semibold">{totalRides}</h5>
        </div>
        <div className="bg-white border rounded py-3 px-4 flex flex-col items-center gap-2">
          <FaCar className="text-green-500 text-3xl" />
          <p className="text-sm text-gray-600">Cancelled Rides</p>
          <h5 className="text-lg font-semibold">{cancelledRides}</h5>
        </div>

        {/* Drivers Card */}
        <div className="bg-white border rounded py-3 px-4 flex flex-col items-center gap-2">
          <FaUsers className="text-green-500 text-3xl" />
          <p className="text-sm text-gray-600">Total Drivers</p>
          <h5 className="text-lg font-semibold">{totalDrivers}</h5>
        </div>
      </div>

      <div className="flex justify-between py-4 md:py-10 pb-2">
        <p className="text-lg font-semibold">Recent Transactions</p>
      </div>

      <div className="bg-white p-4 rounded-lg">
        {filteredTransactions.length > 0 ? (
          <TransactionList transactions={filteredTransactions} />
        ) : (
          <div className="text-center py-8">
            <Image
              width={50}
              height={50}
              src="/images/empty.png"
              className="mx-auto h-40 w-auto"
              alt="No information found"
            />
            <p className="text-sm text-gray-600">No transactions found</p>
          </div>
        )}
      </div>
      <TopDrivers />
    </div>
  );
};
export default Dashboard;
