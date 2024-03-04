import React, { useState } from "react";
import { USERS } from "@/components";
import {
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import RenderTable from "../RenderTable";
import SearchHeader from "../SearchHeader";

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

  const [checkAll, setCheckAll] = useState(false);
  const [checkboxes, setCheckboxes] = useState(Array(USERS.length).fill(false));

  // Handler for the "check all" checkbox
  const handleCheckAll = () => {
    setCheckAll(!checkAll);
    setCheckboxes(checkboxes.map(() => !checkAll));
  };

  // Handler for individual checkboxes
  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setCheckboxes(updatedCheckboxes);
  };

  const columns = [
    columnHelper.accessor("id", {
      id: "S.no",
      cell: (info) => (
        <input
          type="checkbox"
          checked={checkboxes[info.getValue()]}
          onChange={() => handleCheckboxChange(info.getValue())}
        />
      ),
      header: (
        <input type="checkbox" checked={checkAll} onChange={handleCheckAll} />
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
  const [globalFilter, setGlobalFilter] = useState("");

  const [data, setData] = useState(() => [...USERS]);
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
      <SearchHeader setGlobalFilter={setGlobalFilter} />
      <div className="mt-4">
        <RenderTable table={table} />
      </div>
    </div>
  );
};

export default Table;
