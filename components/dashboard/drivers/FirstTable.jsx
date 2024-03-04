import { drivers } from "./index.js";
import { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import ReuseTable from "../ReuseTable.jsx";

function FirstTable({ handleRowClick }) {
  const [data, setData] = useState(() => [...drivers]);
  const [checkAll, setCheckAll] = useState(false);
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

    columnHelper.accessor("firstName", {
      cell: (info) => (
        <p className=" flex gap-3 items-center" onClick={handleRowClick}>
          {info?.getValue()}
        </p>
      ),
      header: "First Name",
    }),

    columnHelper.accessor("lastName", {
      cell: (info) => <span onClick={handleRowClick}>{info.getValue()}</span>,
      header: "Last Name",
    }),
    columnHelper.accessor("birthday", {
      cell: (info) => <span onClick={handleRowClick}>{info.getValue()}</span>,
      header: "Birthday",
    }),

    columnHelper.accessor("state", {
      cell: (info) => <span onClick={handleRowClick}>{info.getValue()}</span>,
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
  return <ReuseTable data={data} columns={columns} />;
}

export default FirstTable;
