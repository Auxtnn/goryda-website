import React, { useState } from "react";

const initialData = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
  // Add more initial data here...
];

function Settings() {
  const [data, setData] = useState(initialData);
  const [editingId, setEditingId] = useState(null);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleEdit = (id, updatedName, updatedEmail) => {
    setData(
      data.map((item) =>
        item.id === id ? { id, name: updatedName, email: updatedEmail } : item
      )
    );
    setEditingId(null); // Stop editing when done
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, name, email }) => (
          <tr key={id}>
            <td
              contentEditable={editingId === id}
              onBlur={(e) => handleEdit(id, e.target.textContent, email)}
            >
              {name}
            </td>
            <td
              contentEditable={editingId === id}
              onBlur={(e) => handleEdit(id, name, e.target.textContent)}
            >
              {email}
            </td>
            <td>
              {editingId === id ? (
                <button onClick={() => setEditingId(null)}>Done</button>
              ) : (
                <button onClick={() => setEditingId(id)}>Edit</button>
              )}
              <button onClick={() => handleDelete(id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Settings;
