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
  Moderators,
  LiveMap,
  CarClasses,
  Branches,
  Header,
} from "@/components";

import React, { useState } from "react";

const AdminDashboard = () => {
  // const { isAdmin } = useAuth();

  const [selectedTab, setSelectedTab] = useState("Dashboard");
  const [toggleSidebar, settoggleSidebar] = useState(true);

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <>
      <main className="w-full relative min-h-screen bg-gray-900 py-6  overflow-x-hidden">
        <div>
          <Sidebar
            selectedTab={selectedTab}
            toggleSidebar={toggleSidebar}
            onTabClick={handleTabClick}
          />
        </div>

        <main
          className={`absolute min-h-screen  transition-[width left] duration-500 p-3 bg-white rounded-2xl ${
            !toggleSidebar
              ? "w-[calc(99%_-_294px)] left-[294px]"
              : "w-[calc(99%_-_80px)] left-[80px]"
          }  `}
        >
          <div className={`py-4 px-4  border-none ml-0 z-10`}>
            <div>
              <Header
                settoggleSidebar={settoggleSidebar}
                toggleSidebar={toggleSidebar}
              />
              <div>
                {selectedTab === "Dashboard" && <Dashboard />}
                {selectedTab === "Orders" && <Orders />}
                {selectedTab === "Rides" && <Rides />}
                {selectedTab === "Clients" && <Clients />}
                {selectedTab === "Drivers" && <Drivers />}
                {selectedTab === "Shift" && <Shift />}
                {selectedTab === "LiveMap" && <LiveMap />}
                {selectedTab === "CarClasses" && <CarClasses />}
                {selectedTab === "Branches" && <Branches />}
                {selectedTab === "Moderators" && <Moderators />}
                {selectedTab === "Settings" && <Settings />}
              </div>
            </div>
          </div>
        </main>
      </main>
    </>
  );
};

export default AdminDashboard;
