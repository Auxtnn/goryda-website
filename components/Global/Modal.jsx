import { CModal } from "@coreui/react";
import React from "react";
import { GrClose } from "react-icons/gr";

const ModalComponent = ({
  children,
  onClose,
  title,
  show,
  width,
  className,
}) => {
  return (
    <CModal
      show={show}
      onClose={onClose}
      centered
      closeOnBackdrop={true}
      backdrop={true}
      color="info"
    >
      <div
        className={`${className} p-6 bg-white rounded-lg ${
          width ? width : "w-full sm:w-[500px]"
        } flex flex-col justify-center gap-5`}
      >
        <div
          className="cursor-pointer flex items-center justify-between"
          onClick={onClose}
        >
          <span className="font-semibold text-lg text-black">
            {title || ""}
          </span>
          <div className="bg-gray-100 transition-transform duration-200 ease-in-out transform active:scale-95 p-1 cursor-pointer">
            <GrClose />
          </div>
        </div>

        {children}
      </div>
    </CModal>
  );
};

export default ModalComponent;
