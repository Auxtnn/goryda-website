"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const Filter = ({ handleFilter }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  const handleChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (start && end) {
      handleFilter(start, end);
      setShowPicker(false); // Close the picker after selection
    }
  };

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  return (
    <div className="relative">
      <input
        onClick={togglePicker}
        value={
          startDate && endDate
            ? `${format(startDate, "yyyy-MM-dd")} - ${format(
                endDate,
                "yyyy-MM-dd"
              )}`
            : "Filter"
        }
        placeholder="Filter"
        className="w-full px-4 py-2 border focus:outline-none border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 cursor-pointer"
        readOnly
      />
      {showPicker && (
        <div className="absolute top-full mt-2 z-10 bg-white border border-gray-300 rounded-lg shadow-lg p-2">
          <DatePicker
            selected={startDate}
            onChange={handleChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            dateFormat="yyyy-MM-dd"
          />
        </div>
      )}
    </div>
  );
};

export default Filter;
