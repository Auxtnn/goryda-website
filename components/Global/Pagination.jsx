import React from "react";
import Button from "./Button";

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <div className="flex gap-2 justify-center py-2">
      <Button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        btnText="Previous"
        className=" hover:text-blue100 bg-white border border-gray-50 text-base leading-[24px] font-normal py-1 px-4 rounded-md transition-transform duration-200 ease-in-out transform active:scale-95 focus:outline-none"
      />
      <Button
        btnText="Next"
        className=" hover:text-blue100 bg-white border border-gray-50 text-base leading-[24px] font-normal py-1 px-4 rounded-md transition-transform duration-200 ease-in-out transform active:scale-95 focus:outline-none"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      />
    </div>
  );
};

export default Pagination;
