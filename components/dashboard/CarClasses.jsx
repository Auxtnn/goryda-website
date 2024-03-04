import { useState, useRef } from "react";
import { Data } from "../index.js";
import { createColumnHelper } from "@tanstack/react-table";
import ReuseTable from "./ReuseTable";

const CarClasses = () => {
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    // Handle the file change event here
    const selectedFile = event.target.files[0];
    console.log("Selected File:", selectedFile);
  };

  const [checkAll, setCheckAll] = useState(false);
  const [checkboxes, setCheckboxes] = useState(Array(Data.length).fill(false));

  // Handler for the "check all" checkbox
  const handleCheckAll = () => {
    setCheckAll(!checkAll);
    setCheckboxes(checkboxes.map(() => !checkAll));
  };

  // Handler for individual checkboxes
  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setCheckboxes(updatedCheckboxes);
  };

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("id", {
      id: "S.no",
      cell: (info) => (
        <input
          type="checkbox"
          checked={checkboxes[info.getValue()]}
          onChange={() => handleCheckboxChange(info.getValue())}
        />
      ),
      header: (
        <input type="checkbox" checked={checkAll} onChange={handleCheckAll} />
      ),
    }),
    columnHelper.accessor("", {
      cell: (info) => (
        <div className="flex gap-3 items-center">
          <img
            src="https://diabetesneeds.co.uk/wp-content/uploads/2014/11/rsz_young_peoples_needs.jpg"
            alt="..."
            className="rounded-full object-cover h-10 w-10"
          />
          <p>
            <span className="block">09068482163</span>
            <span className="block">Samuel</span>
          </p>
        </div>
      ),
      header: "User",
    }),
    columnHelper.accessor("StartingVal", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Starting Value",
    }),
    columnHelper.accessor("freeKm", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Free Km",
    }),
    columnHelper.accessor("perKreeKm", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Per Free Km",
    }),
    columnHelper.accessor("walkingTime", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Walking Time",
    }),
    columnHelper.accessor("OutofBrach", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Out of Branch",
    }),
    columnHelper.accessor("", {
      cell: (info) => (
        <div className="flex gap-5 text-2xl">
          <button>🖊</button>
          <button>♻</button>
        </div>
      ),
      header: "Actions",
    }),
  ];
  const [data, setData] = useState([...Data]);
  const [addNewUser, setAddNewUser] = useState(false);
  return (
    <div className="p-4">
      <div className="flex px-10 justify-between">
        <p className="font-semibold text-2xl">Car Classes List</p>
        <button
          className="bg-blue-600 text-white font-semibold border-none outline-none px-4 py-2.5 rounded-md"
          onClick={() => setAddNewUser(!addNewUser)}
        >
          Add Car Classes
        </button>
      </div>
      <ReuseTable data={data} columns={columns} />;
      {addNewUser && (
        <div className="fixed w-full h-screen bg-gray-200 top-0 left-0 bg-opacity-50 flex justify-center items-center">
          <form className="bg-white  p-8 rounded-lg shadow-md max-w-2xl w-full">
            <div className="flex justify-between item-center mb-2">
              <p className="font-bold">Client Information</p>
              <span
                onClick={() => setAddNewUser(!addNewUser)}
                className="cursor-pointer"
              >
                ❌
              </span>
            </div>
            <div className="relative flex justify-center">
              <div className="relative">
                <p className="h-32 w-32 relative rounded-full">
                  <img
                    src="https://th.bing.com/th/id/R.0a4d94b23f386c887f4a2236409edbf9?rik=q09IyvUG6d8ljA&pid=ImgRaw&r=0"
                    alt=""
                    className="object-fit rounded-full w-full h-full cursor-pointer"
                    onClick={handleImageClick}
                  />
                  <label className="absolute h-10 w-10 rounded-full bottom-0 right-0 cursor-pointer">
                    <span>
                      <img
                        src="https://th.bing.com/th/id/OIP.8XHNBUsXc4U6-Bu6gGRi0wHaHa?rs=1&pid=ImgDetMain"
                        alt=""
                        className="w-100 rounded-full"
                        onClick={handleImageClick}
                      />
                    </span>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <p className="flex gap-4 items-center text-xl">
                <input
                  className="border border-gray-200 p-2.5 h-4 w-4"
                  type="checkbox"
                />
                <span>Lighting</span>
              </p>
              <p className="flex gap-4 text-xl items-center ">
                <input
                  className="border border-gray-200 p-2.5 h-4 w-4"
                  type="checkbox"
                />
                <span>Delivery</span>
              </p>
              <p className="flex flex-col p-2  ">
                <span>Starting Value</span>
                <input className="border border-gray-200 p-2" type="text" />
              </p>
              <p className="flex flex-col p-2  ">
                <span>Free Km</span>
                <input className="border border-gray-200  p-2" type="text" />
              </p>
              <p className="flex flex-col p-2  ">
                <span>Per Km Value</span>
                <input className="border border-gray-200  p-2" type="text" />
              </p>
              <p className="flex flex-col p-2  ">
                <span>Per min Value</span>
                <input className="border border-gray-200  p-2" type="text" />
              </p>
              <p className="flex flex-col p-2  ">
                <span>Out of Branch</span>
                <input className="border border-gray-200  p-2" type="text" />
              </p>
              <label className="flex flex-col p-2  ">
                <span>Waiting time</span>
                <input className="border border-gray-200  p-2" type="text" />
              </label>
            </div>

            {/* Add more form fields as needed */}

            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Add New Teacher
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CarClasses;
