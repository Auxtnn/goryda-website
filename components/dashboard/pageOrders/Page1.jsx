"use client"
import React, { useState } from "react";
import Timeline from "../rides/Timeline";

const Page1 = ({ toggleSidebar }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [payment, setPayment] = useState("Cash");
  const [agree, setAgree] = useState(false);
  const [comment, setComment] = useState("");

  const options = [
    { id: 1, name: "Start", price: "30 000 SUM" },
    { id: 2, name: "Comfort", price: "30 000 SUM" },
    { id: 3, name: "Standard", price: "30 000 SUM" },
    { id: 4, name: "Labo", price: "30 000 SUM" },
  ];

  return (
    <div className="grid grid-cols-5 p-4 gap-7 grid-rows-2">
      <div className="w-full h-[40vh] col-span-5">
        <iframe
          title="Google Map"
          className="w-full h-full rounded-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509577!2d144.95373531531643!3d-37.817209979751984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1637086896206!5m2!1sen!2sus"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />
      </div>
      <div className="col-span-3 bg-gray-100 pt-5 pb-2 px-5  rounded-3xl shadow-lg">
        <div className="flex flex-col space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <p>
              <label htmlFor="number" className="block">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="+234 90 -----"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border p-2.5 w-full outline-[#0048D9]"
              />
            </p>
            <p className="">
              <label htmlFor="number" className="block">
                Payment
              </label>
              <select
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
                className="border p-2.5 outline-[#0048D9] w-full"
              >
                <option value="Cash">Cash</option>
                <option value="Credit">Credit</option>
              </select>
            </p>
          </div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="form-checkbox h-5 w-5 text-green-500 checked:bg-green-500 outline-[#0048D9]"
            />
            <span className="ml-2">
              I agree to the{" "}
              <span className="text-[#0048D9]">terms and conditions</span>{" "}
            </span>
          </label>
          <p>
            <label className="block">Comment</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className=" w-full h-32 border p-4 rounded-lg outline-none resize-none "
            />
          </p>
        </div>
      </div>

      <div className="col-span-2 bg-white rounded-3xl shadow-lg">
        <div className=" rounded-tr-3xl rounded-tl-3xl bg-gray-100 grid grid-cols-2 text-center py-4">
          <p className="text-bold">Class</p>
          <p className="text-bold">Price</p>
        </div>
        <div className="bg-white overflow-hidden  px-10">
          <div className="flex flex-col space-y-4 h-full p-4">
            {options.map((option) => (
              <label key={option.id} className="flex items-center">
                <p className="flex gap-4">
                  <input
                    type="radio"
                    className="form-radio h-4 w-4"
                    name="option"
                    value={option.id}
                    checked={selectedOption === option.id}
                    defaultChecked={selectedOption === option.id}
                    onChange={() => setSelectedOption(option.id)}
                  />
                  <span className="ml-2 text-gray-700">{option.name}</span>
                </p>
                <span className="ml-auto bg-green-200 text-green-700 px-2 py-1 rounded-full">
                  {option.price}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
