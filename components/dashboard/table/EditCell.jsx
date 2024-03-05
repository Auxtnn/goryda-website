import React from "react";

const EditCell = ({ row, table }) => {
  const meta = table.options.meta;

  const setEditedRows = (e) => {
    const elName = e.currentTarget.name;

    if (elName === "delete") {
      meta?.deleteData(row.index);
    } else {
      meta?.setEditedRows((old) => ({
        ...old,
        [row.id]: !old[row.id],
      }));

      if (elName !== "edit") {
        meta?.revertData(row.index, elName === "cancel");
      }
    }
  };

  return (
    <div className="flex gap-4 text-2xl">
      <div>
        {meta?.editedRows[row.id] ? (
          <div className="edit-cell text-2xl flex gap-2">
            <button onClick={setEditedRows} name="cancel">
              X
            </button>
            <button onClick={setEditedRows} name="done">
              ✔
            </button>
          </div>
        ) : (
          <div className="flex text-2xl gap-4">
            {" "}
            <button onClick={setEditedRows} name="edit">
              ✐
            </button>
          </div>
        )}
      </div>
      <div>
        <button onClick={setEditedRows} name="delete">
          🗑
        </button>
      </div>
    </div>
  );
};

export default EditCell;
