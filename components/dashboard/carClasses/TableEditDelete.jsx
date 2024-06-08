import { Data } from "@/components";
import React, { useState } from "react";
import Table from "../table/Table";
import { createColumnHelper } from "@tanstack/react-table";
import EditCell from "../table/EditCell";
import TableCell from "../table/TableCell";

const TableEditDelete = () => {
  const [checkAll, setCheckAll] = useState(false);
  const [data, setData] = useState(() => [...Data]);
  const [checkboxes, setCheckboxes] = useState(
    Array(data.length + 1).fill(false)
  );

  // Handler for the "check all" checkbox
  const handleCheckAll = () => {
    setCheckAll(!checkAll);
    setCheckboxes(checkboxes.map(() => !checkAll));
  };

  // H andler for individual checkboxes
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
    columnHelper.accessor("", {
      cell: (info) => (
        <div className="flex gap-3 items-center">
          <img
            src="https://diabetesneeds.co.uk/wp-content/uploads/2014/11/rsz_young_peoples_needs.jpg"
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

    columnHelper.accessor("StartingVal", {
      id: "StartingVal",
      header: "Starting Value",
      cell: TableCell,
      meta: {
        type: "text",
      },
    }),
    columnHelper.accessor("freeKm", {
      id: "freeKm",
      header: "Free Km",
      cell: TableCell,
      meta: {
        type: "text",
      },
    }),
    columnHelper.accessor("perKreeKm", {
      id: "perKreeKm",
      header: "Per Free Km",
      cell: TableCell,
      meta: {
        type: "text",
      },
    }),
    columnHelper.accessor("walkingTime", {
      id: "walkingTime",
      header: "Walking Time",
      cell: TableCell,
      meta: {
        type: "text",
      },
    }),
    columnHelper.accessor("OutofBrach", {
      id: "OutofBrach",
      header: "Out of Branch",
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

  return <Table dataArray={data} columns={columns} />;
};

export default TableEditDelete;
