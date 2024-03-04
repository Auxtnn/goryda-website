import React, { useState, useEffect } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
const ReuseTable = ({ columns, data }) => {
  const columnHelper = createColumnHelper();
  const [globalFilter, setGlobalFilter] = useState("");
  const [tableData, setTableData] = useState(() => [...data]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),

    state: {
      globalFilter,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  return (
    <div className="p-2 text-black">
      <table className="border-none text-left w-full">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="capitalize p-4">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row, i) => (
            <tr
              key={i}
              className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50/[0.2]"}`}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-3.5 py-2 cursor-pointer">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* pagination */}
      <div className="flex items-center justify-end mt-2 gap-2 text-black">
        <span className="flex items-center gap-1">
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
          <div>Items</div>
        </span>

        <button
          onClick={() => {
            table.previousPage();
          }}
          disabled={!table.getCanPreviousPage()}
          className="p-1 border border-gray-800 font-bold px-2 text-gray-900 disabled:opacity-30 "
        >
          {"<"}
        </button>
        {table.getState().pagination.pageIndex ? (
          <span className="bg-gray-100 text-black px-3 py-2">
            {table.getState().pagination.pageIndex}
          </span>
        ) : (
          ""
        )}

        <span className="bg-blue-600 text-white px-3 py-2">
          {table.getState().pagination.pageIndex + 1}
        </span>
        <button
          onClick={() => {
            table.nextPage();
          }}
          disabled={!table.getCanNextPage()}
          className="p-1 border border-gray-800 px-2 disabled:opacity-30 text-gray-900 font-bold "
        >
          {">"}
        </button>
      </div>
    </div>
  );
};
export default ReuseTable;
