"use client"
import React, { useState } from "react";
import { MdPerson2 } from "react-icons/md";

const Moderators = () => {
  const [moderators, setModerators] = useState([
    { name: "admin", role: "Admin" },
    { name: "moderator", role: "Moderator" },
    { name: "admin 2", role: "Admin" },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newMod, setNewMod] = useState({ name: "", role: "" });

  const handleAdd = () => {
    setModerators([...moderators, newMod]);
    setNewMod({ name: "", role: "" });
    setShowModal(false);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-lg font-bold">Moderators List</h2>
        <button
          onClick={() => setShowModal(true)}
          className="px-6 ring-1 ring-blue-500 py-2 bg-white text-blue-500 rounded"
        >
          Add New Moderator
        </button>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {moderators.map((mod, index) => (
          <div key={index} className="p-4 border rounded shadow">
            <div className="flex items-center justify-center mb-2">
              {/* Replace with actual avatar or icon */}
              <span className="h-20 w-20 block rounded-full">
                <img
                  src="https://images.freeimages.com/image/previews/7aa/indian-sikh-man-png-art-5692253.png"
                  alt="logo"
                  className="w-full "
                />
              </span>
            </div>
            <p className="text-center">{mod.name}</p>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white px-5 py-8 rounded w-[30%]">
            <h2 className="text-lg font-bold mb-4">Add New Moderator</h2>
            <input
              value={newMod.name}
              onChange={(e) => setNewMod({ ...newMod, name: e.target.value })}
              placeholder="Name"
              className="mb-2 p-2 border rounded w-full"
            />
            <input
              value={newMod.role}
              onChange={(e) => setNewMod({ ...newMod, role: e.target.value })}
              placeholder="Role"
              className="mb-2 p-2 border rounded w-full"
            />
            {/* Add image upload functionality here */}
            <button
              onClick={handleAdd}
              className="mt-4 px-8 py-3 bg-blue-500 text-white rounded"
            >
              Add
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-8 py-3 bg-red-500 text-white rounded ml-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Moderators;
