import React, { useState } from "react";
import { USERS } from "@/components";
import Table from "../table/Table";

import { createColumnHelper } from "@tanstack/react-table";

import EditCell from "../table/EditCell";
import TableCell from "../table/TableCell";

const TableWithEditDelete = () => {
  const [checkAll, setCheckAll] = useState(false);
  const [data, setData] = useState(() => [...USERS]);
  const [checkboxes, setCheckboxes] = useState(
    Array(data.length + 1).fill(false)
  );

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

  const columnHelper = createColumnHelper();
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
      id: "firstName",
      header: "Car Comfort",
      cell: TableCell,
      meta: {
        type: "text",
      },
    }),
    columnHelper.accessor("lastName", {
      id: "lastName",
      header: "Ordered Time",
      cell: TableCell,
      meta: {
        type: "text",
      },
    }),
    columnHelper.accessor("age", {
      id: "age",
      header: "Start Location",
      cell: TableCell,
      meta: {
        type: "text",
      },
    }),
    columnHelper.accessor("visit", {
      id: "visit",
      header: "Finished Location",
      cell: TableCell,
      meta: {
        type: "text",
      },
    }),
    columnHelper.accessor("progress", {
      id: "progress",
      header: "Progress",
      cell: TableCell,
      meta: {
        type: "text",
      },
    }),

    columnHelper.display({
      id: "edit",
      cell: EditCell,
    }),
  ];

  return (
    <div className="p-2 text-black">
      <div className="mt-4">
        <Table dataArray={data} columns={columns} display={true} />
      </div>
    </div>
  );
};

export default TableWithEditDelete;
