import React from "react";
import { ErrorMessage } from "formik";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
const TextInput = ({
  name,
  label,
  type,
  value,
  onChange,
  placeholder,
  errors,
  className,
  showPassword,
}) => {
  const isPasswordField = type === "password";

  return (
    <div className="flex flex-col gap-[6px] w-full">
      {label && (
        <label className="font-medium text-[14px] leading-[20px] text-black">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          name={name}
          type={isPasswordField && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${
            errors[name] && "focus:ring-[#EF4444] border-[#EF4444]"
          } py-[10px] px-[14px] rounded-[8px] text-black100 shadow-one outline-none border border-blue100 placeholder:text-[16px] placeholder:text-gray500 placeholder:leading-[24px] w-full ${className}`}
        />
      </div>
      <ErrorMessage name={name}>
        {(errorMessage) => (
          <span className="text-[#EF4444] text-[10px]">{errorMessage}</span>
        )}
      </ErrorMessage>
    </div>
  );
};

export default TextInput;
