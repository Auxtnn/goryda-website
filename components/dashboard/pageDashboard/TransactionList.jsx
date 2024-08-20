import React from "react";
import { useTable } from "@tanstack/react-table";

const TransactionList = ({ transactions }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Date",
        accessor: (row) => new Date(row.createdAt).toLocaleDateString(), // Use accessor function to format date
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Transaction Type",
        accessor: "transactionType",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => (
          <span
            className={`py-1 px-2 rounded-lg font-medium ${
              value === "Pending"
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {value}
          </span>
        ),
      },
    ],
    []
  );

  const data = React.useMemo(() => transactions, [transactions]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 shadow-md">
        <thead className="bg-blue-100 text-left text-sm text-gray-600">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="py-3 px-4 border-b">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="text-sm text-gray-700">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border-b">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="py-3 px-4">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
