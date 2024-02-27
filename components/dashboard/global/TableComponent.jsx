import React from "react";
import { useTable, usePagination } from "@tanstack/react-table";

function TableComponent({ data, columns }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  return (
    <>
      <table
        {...getTableProps()}
        style={{ width: "100%", border: "solid 1px blue" }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>
                    <input type="checkbox" /> {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>
      </div>
    </>
  );
}

export default TableComponent;

{
  /*
    import React from 'react';
import TableComponent from './TableComponent';

function App() {
  const data1 = React.useMemo(() => [], []);
  const columns1 = React.useMemo(() => [/* ... ], []);

  import React from 'react';
import TableComponent from './TableComponent';

function App() {
  const data1 = React.useMemo(
    () => [
      {
        user: 'Sierra Ferguson',
        carContent: 'any',
        orderedTime: '04-08-2022 00:00:37',
        startLocation: 'East Louis Street',
        finishLocation: 'TTE Gulf Park Avenue',
        income: '...',
      },
      // ... add more rows here
    ],
    []
  );

  const columns1 = React.useMemo(
    () => [
      {
        Header: 'User',
        accessor: 'user',
      },
      {
        Header: 'Car/Content',
        accessor: 'carContent',
      },
      {
        Header: 'Ordered Time',
        accessor: 'orderedTime',
      },
      {
        Header: 'Start Location',
        accessor: 'startLocation',
      },
      {
        Header: 'Finish Location',
        accessor: 'finishLocation',
      },
      {
        Header: 'Income',
        accessor: 'income',
      },
    ],
    []
  );

  return <TableComponent data={data1} columns={columns1} />;
}

export default App;


  const data2 = React.useMemo(() => [/* ... ], []);
  const columns2 = React.useMemo(() => [/* ... ], []);

  return (
    <div>
      <TableComponent data={data1} columns={columns1} />
      <TableComponent data={data2} columns={columns2} />
    </div>
  );
}

export default App;
*/
}
