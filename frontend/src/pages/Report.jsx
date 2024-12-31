import { useState } from "react";
import TabNavigation from "../components/common/TabNavigation";
import BarChart from "../components/charts/BarChart";
import PieChart from "../components/charts/PieChart";
import LineChart from "../components/charts/LineChart";
export default function Report() {
  const [selectedTab, setSelectedTab] = useState("CommunicationFrequency");

  const tabs = [
    { id: "CommunicationFrequency", label: "Communication Frequency" },
    { id: "EngagementEffectiveness", label: "Engagement Effectiveness" },
    { id: "OverdueTrends", label: "Overdue Trends" },
    { id: "ActivityLogs", label: "Activity Logs" },
  ];
  return (
    <div className="md:p-4">
      <TabNavigation
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />

      {selectedTab === "CommunicationFrequency" && <BarChart />}
      {selectedTab === "EngagementEffectiveness" && <PieChart />}
      {selectedTab === "OverdueTrends" && <LineChart />}
      {selectedTab === "ActivityLogs" && <div>Activity Logs</div>}
    </div>
  );
}
