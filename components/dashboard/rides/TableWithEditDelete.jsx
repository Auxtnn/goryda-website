"use client"
import React, { useState } from "react";
import { USERS } from "@/components";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

const Table = () => {
  const columnHelper = createColumnHelper();
  const [selectAll, setSelectAll] = useState(false);
  const [editingRow, setEditingRow] = useState(null);

  const handleEdit = (row) => {
    setEditingRow(row);
  };

  const handleDelete = (row) => {
    setData((old) => old.filter((data) => data.id !== row.id));
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedRow = {
      ...editingRow,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
    };
    setData((old) =>
      old.map((row) => (row.id === updatedRow.id ? updatedRow : row))
    );
    setEditingRow(null); // Clear the form
  };

  const columns = [
    columnHelper.accessor("", {
      id: "S.no",
      cell: () => (
        <input type="checkbox" checked={selectAll} defaultChecked={selectAll} />
      ),
      header: (
        <input
          type="checkbox"
          checked={selectAll}
          defaultChecked={selectAll}
          onChange={() => setSelectAll(!selectAll)}
        />
      ),
    }),

    columnHelper.accessor("profile", {
      cell: (info) => (
        <div className=" flex gap-3 items-center">
          <img
            src={info?.getValue()}
            alt="..."
            className="rounded-full object-cover h-10 w-10"
          />
          <p>
            <span className="block">09068482163</span>
            <span className="block">Samuel</span>
          </p>
        </div>
      ),
      header: "User",
    }),

    columnHelper.accessor("firstName", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Car Comfort",
    }),
    columnHelper.accessor("lastName", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Ordered Time",
    }),
    columnHelper.accessor("age", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Start Location",
    }),
    columnHelper.accessor("visit", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Finished Location",
    }),
    columnHelper.accessor("progress", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Income",
    }),
    columnHelper.accessor("actions", {
      cell: (info) => (
        <div>
          <button onClick={() => handleEdit(info.row.original)}>Edit</button>
          <button onClick={() => handleDelete(info.row.original)}>
            Delete
          </button>
        </div>
      ),
      header: "Actions",
    }),
  ];

  const [data, setData] = useState(() => [...USERS]);
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
      {editingRow && (
        <form onSubmit={handleUpdate}>
          <input name="firstName" defaultValue={editingRow.firstName} />
          <input name="lastName" defaultValue={editingRow.lastName} />
          {/* Add more fields as needed */}
          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
};

export default Table;
