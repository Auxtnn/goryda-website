import React from "react";

const Button = ({
  className = "",
  btnText = "",
  type = "",
  disabled,
  onClick,
}) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`py-[6px] bg-green-500 border-green-500 border text-base transition-transform duration-200 ease-in-out transform active:scale-95 px-[20px] rounded-md ${className}`}
      >
        {btnText}
      </button>
    </>
  );
};

export default Button;
