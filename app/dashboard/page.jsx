"use client";
import {
  Sidebar,
  Clients,
  Dashboard,
  Drivers,
  Orders,
  Rides,
  Shift,
  Settings,
} from "@/components";
import React, { useState } from "react";

const AdminDashboard = () => {
  // const { isAdmin } = useAuth();

  const [selectedTab, setSelectedTab] = useState("Dashboard");

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <>
      <main className="flex w-screen">
        <aside className="w-[15%] h-screen">
          <Sidebar selectedTab={selectedTab} onTabClick={handleTabClick} />
        </aside>
        <div className="w-11/12 bg-gray-900 py-4 px-4">
          <div className="bg-white h-full rounded-xl">
            {selectedTab === "Dashboard" && <Dashboard />}
            {selectedTab === "Orders" && <Orders />}
            {selectedTab === "Rides" && <Rides />}
            {selectedTab === "Clients" && <Clients />}
            {selectedTab === "Drivers" && <Drivers />}
            {selectedTab === "Shift" && <Shift />}
            {selectedTab === "Settings" && <Settings />}
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminDashboard;
