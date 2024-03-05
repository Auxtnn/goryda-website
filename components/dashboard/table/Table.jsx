import React, { useState } from "react";
// import TableCell from "./TableCell";
// import EditCell from "./EditCell";
import RenderTable from "./RenderTable";

import {
  createColumnHelper,
  getPaginationRowModel,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
} from "@tanstack/react-table";
import SearchHeader from "../SearchHeader";

const Table = ({ dataArray, columns, display }) => {
  const [data, setData] = useState(() => [...dataArray]);
  const [originalData, setOriginalData] = useState(() => [...dataArray]);
  const [editedRows, setEditedRows] = useState({});
  const [globalFilter, setGlobalFilter] = useState("");
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      globalFilter,
    },
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
    meta: {
      editedRows,
      setEditedRows,
      deleteData: (rowIndex) => {
        setData((old) => old.filter((_, index) => rowIndex !== index));
      },
      revertData: (rowIndex, revert) => {
        if (revert) {
          setData((old) =>
            old.map((row, index) =>
              index === rowIndex ? originalData[rowIndex] : row
            )
          );
        } else {
          setOriginalData((old) =>
            old.map((row, index) => (index === rowIndex ? data[rowIndex] : row))
          );
        }
      },
      updateData: (rowIndex, columnId, value) => {
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex],
                [columnId]: value,
              };
            }
            return row;
          })
        );
      },
    },
  });

  return (
    <>
      {display && <SearchHeader setGlobalFilter={setGlobalFilter} />}
      <RenderTable table={table} />
    </>
  );
};

export default Table;
