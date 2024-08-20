import React from "react";

const Badge = ({ status }) => (
  <span
    className={`px-2 py-1 rounded-full ${
      status === "Completed"
        ? "bg-green-200 text-green-800"
        : "bg-red-200 text-red-800"
    }`}
  >
    {status}
  </span>
);

export default Badge;
