import { drivers } from "./index.js";
import { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

function FirstTable({ handleRowClick }) {
  const [data, setData] = useState(() => [...drivers]);
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("", {
      id: "S.no",
      cell: () => <input type="checkbox" />,
      header: <input type="checkbox" />,
    }),

    columnHelper.accessor("firstName", {
      cell: (info) => (
        <p className=" flex gap-3 items-center">{info?.getValue()}</p>
      ),
      header: "First Name",
    }),

    columnHelper.accessor("lastName", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Last Name",
    }),
    columnHelper.accessor("birthday", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Birthday",
    }),

    columnHelper.accessor("state", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "State",
    }),
    columnHelper.accessor("homeLocation", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Home Location",
    }),
    columnHelper.accessor("workLocation", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Work Location",
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
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
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id} className="capitalize p-4">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>

        <tbody>
          {table.getRowModel().rows.length
            ? table.getRowModel().rows.map((row, i) => (
                <tr
                  onClick={() => handleRowClick(row)}
                  key={i}
                  className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50/[0.2]"}`}
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id} className="px-3.5 py-2">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))
            : null}
        </tbody>
      </table>

      {/* pagination  */}
      <div className="flex items-center justify-between mt-2 gap-2 text-black">
        <div className="flex gap-10 font-semibold">
          <p>Total User: {99}</p>
          <p>Active Drivers: {drivers.length}</p>
        </div>
        <div className="flex">
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
            className="p-1 border  ml-4 border-gray-800 font-bold px-2 text-gray-900 disabled:opacity-30 "
          >
            {"<"}
          </button>
          {table.getState().pagination.pageIndex === 0 ? (
            ""
          ) : (
            <span className="bg-gray-100 text-black px-3 py-2">
              {table.getState().pagination.pageIndex}
            </span>
          )}
          <span className="bg-blue-600 text-white px-3 py-2">
            {" "}
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
    </div>
  );
}

export default FirstTable;
