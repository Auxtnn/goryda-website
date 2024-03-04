import { flexRender } from "@tanstack/react-table";

function RenderTable({ table, setSelectedDriver }) {
  return (
    <div>
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
            ? table.getRowModel().rows.map((row, i) => {
                console.log(row);
                return (
                  <tr
                    key={i}
                    className={`${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50/[0.2]"
                    }`}
                    onClick={() => setSelectedDriver(row)}
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td
                          key={cell.id}
                          className="px-3.5 py-2 cursor-pointer"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
      {/* pagination  */}
      <div className="flex items-center justify-between mt-2 gap-2 text-black">
        <div className="flex gap-10 font-semibold">
          <p>Total User: {99}</p>
          <p>Active Drivers: {}</p>
        </div>
        <div className="flex">
          <span className="flex items-center gap-1">
            {" "}
            <strong>
              {" "}
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}{" "}
            </strong>
            <div>Items</div>
          </span>

          <button
            onClick={() => {
              table.previousPage();
            }}
            disabled={!table.getCanPreviousPage()}
            className="p-1 border  ml-4 border-gray-800 font-bold px-2 text-gray-900 disabled:opacity-30 "
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
      </div>
    </div>
  );
}

export default RenderTable;
