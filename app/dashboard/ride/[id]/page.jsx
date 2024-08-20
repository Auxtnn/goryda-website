"use client";

import React from "react";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const RideDetails = () => {
  // Dummy data to simulate fetched ride details
  const rideData = {
    passenger: {
      firstName: "Jane",
      lastName: "Smith",
      email: "janesmith@example.com",
    },
    rideType: "Standard",
    status: "Completed",
    cancelledReason: "",
    driver: {
      name: "John Doe",
      driverId: "DR12345",
    },
    location: {
      latitude: 6.5244,
      longitude: 3.3792,
      address: "123 Main Street, Lagos, Nigeria",
    },
    amount: 2500,
    paymentMethod: "Card",
    startTime: "2024-08-20T14:30:00",
    completedTime: "2024-08-20T15:00:00",
  };

  // Google Maps API loader
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "", //  API key
  });

  const rideDetails = [
    { name: "Passenger Email", value: rideData.passenger.email },
    {
      name: "Passenger Name",
      value: `${rideData.passenger.firstName} ${rideData.passenger.lastName}`,
    },
    { name: "Ride Type", value: rideData.rideType },
    { name: "Status", value: rideData.status },
    { name: "Cancelled Reason", value: rideData.cancelledReason || "N/A" },
    { name: "Driver Name", value: rideData.driver.name },
    { name: "Driver ID", value: rideData.driver.driverId },
    { name: "Address", value: rideData.location.address },
    { name: "Amount", value: `₦${rideData.amount}` },
    { name: "Payment Method", value: rideData.paymentMethod },
    {
      name: "Start Time",
      value: new Date(rideData.startTime).toLocaleTimeString(),
    },
    {
      name: "Completed Time",
      value: new Date(rideData.completedTime).toLocaleTimeString(),
    },
  ];

  return (
    <div className="flex flex-col gap-5 py-10 px-4">
      <Link href="/dashboard" className="flex items-center gap-2">
        <BiArrowBack /> <span>Back</span>
      </Link>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 md:p-6">
        <h6 className="font-semibold text-lg md:text-xl text-black capitalize">
          Ride Details
        </h6>
      </div>

      <div className="flex flex-col gap-6 p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
          {rideDetails.map((detail) => (
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
        <span className="font-semibold text-lg">Ride Location</span>
        <div className="h-px bg-gray-300"></div>
        <div className="w-full h-60">
          {isLoaded ? (
            <GoogleMap
              center={{
                lat: rideData.location.latitude,
                lng: rideData.location.longitude,
              }}
              zoom={14}
              mapContainerStyle={{ width: "100%", height: "100%" }}
            >
              <Marker
                position={{
                  lat: rideData.location.latitude,
                  lng: rideData.location.longitude,
                }}
              />
            </GoogleMap>
          ) : (
            <div>Loading map...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RideDetails;
