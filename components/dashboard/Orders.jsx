"use client"
import React, { useState } from "react";
import Page1 from "./pageOrders/Page1";
import Page2 from "./pageOrders/Page2";
import Page3 from "./pageOrders/Page3";

const Orders = () => {
  const [page, setPage] = useState("Page1");
  const [countPage, setCountPage] = useState(1);

  function setPages(pages) {
    setPage(pages);
  }
  function counter(value) {
    setCountPage(value);
  }

  return (
    <div className="h-full w-full relative">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">Knowledge Base</h2>
        <nav className="fixed top-1/2 right-4  transform -translate-x-1/2 -translate-y-1/2">
          <ul className="flex flex-col gap-5 p-2">
            <li
              onClick={() => counter(1)}
              className={`w-3 h-20 rounded-full ${
                countPage > 0 || page === "Page1"
                  ? "bg-blue-600"
                  : "bg-blue-600"
              }`}
            >
              <button
                onClick={() => setPages("Page1")}
                className="block w-3 h-20 rounded-full"
              ></button>
            </li>
            <li
              onClick={() => counter(2)}
              className={`w-3 h-20 rounded-full ${
                countPage > 1 || page === "Page2"
                  ? "bg-blue-600"
                  : "bg-gray-600"
              }`}
            >
              <button
                onClick={() => setPages("Page2")}
                className="block w-3 h-20 rounded-full"
              ></button>
            </li>
            <li
              onClick={() => counter(3)}
              className={`w-3 h-20 rounded-full ${
                countPage > 2 || page === "Page3"
                  ? "bg-blue-600"
                  : "bg-gray-500"
              }`}
            >
              <button
                onClick={() => setPages("Page3")}
                className="block w-3 h-20 rounded-full"
              ></button>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        {page === "Page1" && <Page1 />}
        {page === "Page2" && <Page2 />}
        {page === "Page3" && <Page3 />}
      </div>
    </div>
  );
};

export default Orders;
