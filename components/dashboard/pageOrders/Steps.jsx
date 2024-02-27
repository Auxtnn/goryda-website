import React from "react";

const steps = [
  { name: "Pending", count: 5 },
  { name: "In progress", count: 3 },
  { name: "Completed", count: 70 },
  { name: "Upcoming", count: 0 },
  { name: "Pre cancelled", count: 26 },
  { name: "Cancelled by driver", count: 1 },
];

function getColor(name) {
  switch (name) {
    case "Pending":
      return "yellow-500";
    case "In progress":
      return "blue-500";
    case "Completed":
      return "green-500";
    case "Upcoming":
      return "gray-500";
    case "Pre cancelled":
      return "red-500";
    case "Cancelled by driver":
      return "purple-500";
    default:
      return "gray-500";
  }
}

function StepComponent() {
  return (
    <div className="flex space-x-4">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className={`p-2 rounded-full bg-${getColor(step.name)}`}>
            {step.count}
          </div>
          <div className="text-center">{step.name}</div>
        </div>
      ))}
    </div>
  );
}

export default StepComponent;
