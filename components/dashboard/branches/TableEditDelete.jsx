import { Data } from "@/components";
import Table from "../table/Table";
import EditCell from "../table/EditCell";
import TableCell from "../table/TableCell";
import { createColumnHelper } from "@tanstack/react-table";
import { useState } from "react";

const TableEditDelete = () => {
  const [data, setData] = useState(() => [...Data]);
  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor("id", {
      id: "S.no",
      cell: (info) => <p>{info.getValue() + 1}</p>,
      header: "S/N",
    }),

    columnHelper.accessor("BranchName", {
      id: "BranchName",
      header: "Branches",
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
    columnHelper.display({
      id: "edit",
      cell: EditCell,
    }),
  ];
  return <Table columns={columns} display={false} dataArray={data} />;
};

export default TableEditDelete;
