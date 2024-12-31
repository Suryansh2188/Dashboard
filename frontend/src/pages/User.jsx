import { useState } from "react";
import { overdueCommunications } from "../lib/dummyData";
import TabNavigation from "../components/common/TabNavigation";
import Notifications from "../components/Notifications";
import Calendar from "../components/Calender";
import CompanyTable from "../components/dashboard/CompanyTable";

export default function User() {
  const [selectedTab, setSelectedTab] = useState("Dashboard");

  const getNotifications = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let overdueCount = 0;
    // eslint-disable-next-line no-unused-vars
    let dueTodayCount = 0;

    overdueCommunications.forEach((comm) => {
      const lastCommDate = new Date(comm.lastCommunication);
      lastCommDate.setHours(0, 0, 0, 0);

      // Calculate the "next communication" date based on overdue days
      const nextCommDate = new Date(lastCommDate);
      nextCommDate.setDate(lastCommDate.getDate() + comm.overdueDays);

      if (nextCommDate < today) {
        overdueCount += 1; // Communication is overdue
      } else if (
        nextCommDate.getDate() === today.getDate() &&
        nextCommDate.getMonth() === today.getMonth() &&
        nextCommDate.getFullYear() === today.getFullYear()
      ) {
        dueTodayCount += 1; // Communication is due today
      }
    });

    return overdueCount;
  };

  const notificationBadgeCount = getNotifications();

  const tabs = [
    { id: "Dashboard", label: "Dashboard" },
    { id: "Calender", label: "Calender" },
    { id: "Notifications", label: `${notificationBadgeCount} Notifications` },
  ];

  return (
    <div className="md:p-4">
      <TabNavigation
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      {selectedTab === "Dashboard" && <CompanyTable />}
      {selectedTab === "Calender" && <Calendar />}
      {selectedTab === "Notifications" && <Notifications />}
    </div>
  );
}
