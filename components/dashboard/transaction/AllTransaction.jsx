"use client";

import React, { useState, useEffect } from "react";
import TransactionList from "./TransactionList";
import Filter from "@/components/Global/Filter";
import Loader from "@/components/Global/Loader";
import Pagination from "@/components/Global/Pagination";
import Image from "next/image";
import NoInformation from "@/components/Global/NoInformation";

const TransactionPage = () => {
  //   const cookies = new Cookies();
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 5; // Total items per page

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("", {
          method: "GET",
          headers: {
            Authorization: "",
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log("Fetched data:", data); // Log fetched data to inspect it
        setTransactions(data.data.transactions || []); // Set transactions array from API response
        setFilteredTransactions(data.data.transactions || []); // Initially set filtered transactions
        setTotalPages(Math.ceil(data.data.transactions.length / itemsPerPage));
      } catch (error) {
        // console.error("Error fetching transactions:", error);
        setError(error.message);
        // toast.error("Failed to fetch transactions");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  useEffect(() => {
    let filtered = transactions;

    if (startDate && endDate) {
      filtered = filtered.filter((transaction) => {
        const transactionDate = new Date(transaction.createdAt);
        return (
          transactionDate >= new Date(startDate) &&
          transactionDate <= new Date(endDate)
        );
      });
    }

    setFilteredTransactions(filtered);
    setTotalPages(Math.ceil(filtered.length / itemsPerPage));
    setCurrentPage(1); // Reset to first page after filtering
  }, [startDate, endDate, transactions]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilter = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="overflow-y-auto md:px-4 pt-8">
      <p className="pt-3 px-4 md:px-0 font-semibold text-base md:text-lg text-heading100">
        Transaction history
      </p>
      <div className="bg-white p-3 rounded-lg flex flex-col gap-4">
        {filteredTransactions.length > 0 && (
          <div className="flex justify-start md:justify-end gap-4">
            <Filter handleFilter={handleFilter} />
          </div>
        )}
        {/* {error ? (
          <div className="text-red-500">Error: {error}</div>
        ) : */}

        {filteredTransactions.length > 0 ? (
          <>
            <TransactionList
              transactions={filteredTransactions.slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )}
            />
            <div className="flex flex-row justify-between">
              <div className="text-gray100 self-center">
                Page {currentPage} of {totalPages}
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
              />
            </div>
          </>
        ) : (
          <>
            <NoInformation />
          </>
        )}
      </div>
    </div>
  );
};

export default TransactionPage;
