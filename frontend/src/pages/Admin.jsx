import { useState } from "react";
import TabNavigation from "../components/common/TabNavigation";
import Table from "../components/common/Table";
import EditMethodCard from "../components/modals/EditMethodCard";
import EditCompanyCard from "../components/modals/EditCompanyCard";
import AddCompanyCard from "../components/modals/AddCompanyCard";
import AddMethodCard from "../components/modals/AddMethodCard"

const mockData = {
  CompanyManagement: {
    tableName: "Companies",
    columns: ["Name", "Location", "Communication Period"],
    rows: [
      { name: "ENTNT", location: "Abu Dhabi", period: "7" },
      { name: "APPLE", location: "California, US", period: "9" },
    ],
  },
  CommunicationMethods: {
    tableName: "Communication Methods",
    columns: ["Name", "Description", "Sequence", "Mandatory"],
    rows: [
      {
        name: "LinkedIn Post",
        description: "Share or interact with company posts on LinkedIn",
        sequence: "1",
        mandatory: "Yes",
      },
      {
        name: "LinkedIn Message",
        description: "Launch the grand iPhone 16",
        sequence: "2",
        mandatory: "Yes",
      },
      {
        name: "Email",
        description: "Cancelled freshers hiring",
        sequence: "3",
        mandatory: "Yes",
      },
    ],
  },
};

const Admin = () => {
  const [selectedTab, setSelectedTab] = useState("CompanyManagement");
  const [isEditVisible, setIsEditVisible] = useState(false);
  const [isAddVisible, setIsAddVisible] = useState(false);
  const [editData, setEditData] = useState(null);

  const tableData = mockData[selectedTab];

  const tabs = [
    { id: "CompanyManagement", label: "Company Management" },
    { id: "CommunicationMethods", label: "Communication Methods" },
  ]
   const handleAdd = () => {
    setIsAddVisible(true);
   }
  const handleEdit = (method) => {
    setEditData(method); // Pass the selected method's data to the form
    setIsEditVisible(true); // Show the overlay
  };

  return (
    <div className="p-4">
      {/* <h1 className="text-2xl font-bold mb-4">Communication Tracking</h1> */}
      <TabNavigation
      tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <Table
        tableName={tableData.tableName}
        columns={tableData.columns}
        data={tableData.rows}
        selectedTab={selectedTab === "CompanyManagement" ? "Company" : "Method"}
        onEdit={handleEdit} // Pass the edit handler to the Table
        onAdd={handleAdd}
      />
      {isEditVisible &&
        (selectedTab === "CompanyManagement" ? (
          <EditCompanyCard
            method={editData}
            onClose={() => setIsEditVisible(false)}
          />
        ) : (
          <EditMethodCard
            method={editData}
            onClose={() => setIsEditVisible(false)}
          />
        ))}

        {isAddVisible && (selectedTab === "CompanyManagement" ? (<AddCompanyCard onClose={() => setIsAddVisible(false)} />) : (<AddMethodCard onClose={() => setIsAddVisible(false)}/>))}
    </div>
  );
};

export default Admin;
