"use client";

import React, { useState, useEffect } from "react";
import ResetPasswordForm from "@/components/Auth/ResetPassword/ResetPassword";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("security");

  const handleTabClick = (tab) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
    }
  };

  return (
    <div className="md:overflow-y-auto px-4 md:px-4 bg-white h-full pt-6 pb-20">
      <div className="flex gap-6">
        <p
          onClick={() => handleTabClick("security")}
          className={`pt-4 pb-2  text-base  cursor-pointer transition-transform duration-200 ease-in-out transform active:scale-95 ${
            activeTab === "account"
              ? "border-b-2 border-green-500 font-semibold"
              : ""
          }`}
        >
          Security
        </p>
        <p
          onClick={() => handleTabClick("notification")}
          className={`pt-4 pb-2 text-base border-green-500   cursor-pointer transition-transform duration-200 ease-in-out transform active:scale-95 ${
            activeTab === "notification"
              ? "border-b-2 border-green-500 font-semibold"
              : ""
          }`}
        >
          Notifications
        </p>
      </div>

      {activeTab === "security" && (
        <div className="md:w-1/2">
          <p className="pt-4 pb-2 font-semibold text-base md:text-lg ">
            Security
          </p>
          <ResetPasswordForm />
        </div>
      )}
      {activeTab === "notification" && <div>No Notification Available yet</div>}
    </div>
  );
};

export default Settings;
