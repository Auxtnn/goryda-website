import React from "react";

const DotShape = () => {
  const circles = [];
  const colors = ["#00cd66"];

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      const cx = i * 14.4391 + 1.66343;
      const cy = j * 43.5821 + 1.66342;
      circles.push(
        <circle
          key={`${i}-${j}`}
          cx={cx}
          cy={cy}
          r="1.66343"
          transform={`rotate(-90 ${cx} ${cy})`}
          fill={colors[(i + j) % colors.length]}
        />
      );
    }
  }

  return (
    <svg width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
      {circles}
    </svg>
  );
};

export default DotShape;
