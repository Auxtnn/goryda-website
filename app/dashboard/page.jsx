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
      <main className="flex w-full bg-gray-900">
        <aside
          className={` ${
            toggleSidebar ? " h-screen normalSize" : " h-screen sidebarWidth"
          }`}
        >
          <Sidebar
            selectedTab={selectedTab}
            toggleSidebar={toggleSidebar}
            onTabClick={handleTabClick}
          />
        </aside>

        <div
          className={`py-4 px-4  border-none ml-0 z-10`}
          style={{
            width: `calc(100% - ${toggleSidebar ? "18.75rem" : "4.5rem"})`,
          }}
        >
          <div
            className={`bg-white h-full px-10 py-6 rounded-xl relative ${
              !toggleSidebar && selectedTab === "Rides" ? "ml-[0.4rem] " : ""
            }`}
          >
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
        {selectedTab === "Rides" && !toggleSidebar && (
          <div className="h-screen bg-white w-[200px]">Hello</div>
        )}
      </main>
    </>
  );
};

export default AdminDashboard;
