"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button, ModalComponent } from "@/components/Global";
import { BiArrowBack } from "react-icons/bi";
import toast from "react-hot-toast";

const DriverDetails = () => {
  // Dummy data to simulate fetched details
  const driverData = {
    accountStatus: 1, // 1 for verified, 0 for unverified
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    phoneNumber: "08012345678",
    driverId: "DR12345",
    gender: "Male",
    vehicle: {
      model: "Toyota Camry",
      licensePlate: "ABC-1234",
      color: "Silver",
    },
    tripsCompleted: 52,
    rating: 4.8,
    earnedAmount: 152300, // New field for earned amount
    registrationDate: "12th August, 2023", // New field for registration date
    nextOfKin: {
      name: "Jane Doe",
      phoneNumber: "08098765432",
      email: "janedoe@example.com",
      relationship: "Sister",
    },
    documents: [
      {
        documentType: "Driver's License Front view",
        image: "/images/goryda.png",
      },
      {
        documentType: "Driver's License Back view",
        image: "/images/goryda.png",
      },
      {
        documentType: "ID card Front view",
        image: "/images/goryda.png",
      },
      {
        documentType: "ID card Back view",
        image: "/images/goryda.png",
      },
      {
        documentType: "Vehicle Image",
        image: "/images/goryda.png",
      },
      {
        documentType: "Vehicle Side View",
        image: "/images/goryda.png",
      },
      {
        documentType: "Vehicle Reg Front View",
        image: "/images/goryda.png",
      },
      {
        documentType: "Vehicle Reg Back view",
        image: "/images/goryda.png",
      },
    ],
  };

  const [showModal, setShowModal] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const DriverDetails = [
    { name: "Driver ID", value: driverData.driverId || "DR00001" },
    { name: "Phone Number", value: driverData.phoneNumber },
    { name: "Gender", value: driverData.gender },
    { name: "Vehicle Model", value: driverData.vehicle.model },
    { name: "License Plate", value: driverData.vehicle.licensePlate },
    { name: "Vehicle Color", value: driverData.vehicle.color },
    { name: "Completed Rides", value: driverData.tripsCompleted },
    { name: "Rating", value: `${driverData.rating} ★` },
    {
      name: "Total Earnings",
      value: `₦${driverData.earnedAmount.toLocaleString()}`,
    }, // Display earnings in NGN format
    { name: "Registration Date", value: driverData.registrationDate },
  ];

  const driverNextOfKin = [
    { name: "Name", value: driverData.nextOfKin.name },
    { name: "Phone Number", value: driverData.nextOfKin.phoneNumber },
    { name: "Email Address", value: driverData.nextOfKin.email },
    { name: "Relationship", value: driverData.nextOfKin.relationship },
  ];

  const handleApproveDriver = () => {
    toast.success("Driver has been approved successfully!");
    setShowModal(false);
  };

  return (
    <div className="flex flex-col gap-5 py-10 px-4">
      <Link href="/dashboard" className="flex items-center gap-2">
        <BiArrowBack /> <span>Back</span>
      </Link>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 md:p-6">
        <h6 className="font-semibold text-lg md:text-xl text-black capitalize">
          Driver Details
        </h6>
        <div className="flex flex-col justify-center md:flex-row gap-2">
          <Button
            btnText={
              driverData.accountStatus === 1 ? "Block Driver" : "Unblock Driver"
            }
            onClick={() => setShowModal(true)}
            className={`text-sm leading-6 font-medium  gap-2 ${
              driverData.accountStatus
                ? "text-red-600 h-10 border-2 border-red-600 bg-white"
                : "text-white border-green-500 bg-green-500"
            }`}
          />
          {driverData.accountStatus == 1 && (
            <Button
              btnText="Verify Account"
              onClick={() => setShowModal(true)}
              className="text-sm leading-6 font-medium gap-2 text-white border-green-500 bg-green-500"
            />
          )}
        </div>
      </div>

      <div className="flex flex-col gap-6 p-6 md:p-8">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-lg text-center font-medium text-white">
              {driverData.firstName.charAt(0)}
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-base text-black">
                {`${driverData.firstName} ${driverData.lastName}`}
              </span>
              <span className="text-gray-500 text-sm">{driverData.email}</span>
            </div>
          </div>
        </div>
        <div className="h-px bg-gray-300"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
          {DriverDetails.map((detail) => (
            <div key={detail.name} className="flex items-center">
              <span className="text-sm w-1/2 text-gray-500">{`${detail.name}:`}</span>
              <span className="text-sm w-1/2 font-medium text-black">
                {detail.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6 p-6 md:p-8">
        <span className="font-semibold text-lg">Next of Kin</span>
        <div className="h-px bg-gray-300"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
          {driverNextOfKin.map((kin) => (
            <div key={kin.name} className="flex items-center">
              <span className="text-sm w-1/2 text-gray-500">{`${kin.name}:`}</span>
              <span className="text-sm w-1/2 font-medium text-black">
                {kin.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6 p-6 md:p-8">
        <span className="font-semibold text-lg">Documents</span>
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4">
          {driverData.documents.map((file) => (
            <div
              key={file.documentType}
              className="flex items-center gap-3 p-2 cursor-pointer"
              onClick={() => {
                setSelectedImage(file.image);
                setShowImage(true);
              }}
            >
              <span className="text-sm font-medium text-black">
                {file.documentType}
              </span>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <ModalComponent show={showModal} onClose={() => setShowModal(false)}>
          <div className="p-4">
            <h6 className="text-lg font-semibold text-black mb-4">
              Are you sure you want to approve this driver?
            </h6>
            <div className="flex gap-4">
              <Button
                btnText="Yes"
                onClick={handleApproveDriver}
                className="bg-green-500 text-white px-4 py-2"
              />
              <Button
                btnText="No"
                onClick={() => setShowModal(false)}
                className="bg-gray-400 text-white px-4 py-2"
              />
            </div>
          </div>
        </ModalComponent>
      )}

      {showImage && (
        <ModalComponent show={showImage} onClose={() => setShowImage(false)}>
          <img src={selectedImage} alt="Driver document" className="" />
        </ModalComponent>
      )}
    </div>
  );
};

export default DriverDetails;
