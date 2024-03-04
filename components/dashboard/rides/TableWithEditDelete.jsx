import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
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
  const [editingRow, setEditingRow] = useState(null);

  const handleEdit = (e, row) => {
    e.preventDefault();
    setEditingRow(row);
  };

  const handleDelete = (e, row) => {
    e.preventDefault();
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
        <div className="flex gap-4">
          <button
            className="text-2xl"
            onClick={(e) => handleEdit(e, info.row.original)}
          >
            <FaPen />
          </button>
          <button onClick={(e) => handleDelete(e, info.row.original)}>
            <MdDelete className="text-2xl" />
          </button>
        </div>
      ),
      header: "",
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
