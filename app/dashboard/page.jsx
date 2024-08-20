"use client";
import {
  Sidebar,
  Dashboard,
  Drivers,
  Rides,
  Settings,
  TransactionPage,
  Header,
  Users,
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
      <main className="w-full relative min-h-screen bg-green-500 py-6  ">
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
              : selectedTab === "Settings" && toggleSidebar
              ? "w-[calc(99%_-_80px)] left-[80px]"
              : "w-[calc(99%_-_80px)] left-[80px]"
          } `}
        >
          <div className={`py-4 px-4  border-none ml-0 z-10`}>
            <div>
              <Header
                settoggleSidebar={settoggleSidebar}
                toggleSidebar={toggleSidebar}
              />
              <div>
                {selectedTab === "Dashboard" && <Dashboard />}

                {selectedTab === "Drivers" && <Drivers />}
                {selectedTab === "Rides" && <Rides />}
                {selectedTab === "Users" && <Users />}
                {selectedTab === "Transactions" && <TransactionPage />}

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
