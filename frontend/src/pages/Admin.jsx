import { useState, useEffect } from "react";
import TabNavigation from "../components/common/TabNavigation";
import Table from "../components/common/Table";
import EditMethodCard from "../components/modals/EditMethodCard";
import EditCompanyCard from "../components/modals/EditCompanyCard";
import AddCompanyCard from "../components/modals/AddCompanyCard";
import AddMethodCard from "../components/modals/AddMethodCard";


const initialData = [
  { name: "ENTNT", location: "Abu Dhabi", communicationPeriodicity: "7" },
  { name: "APPLE", location: "California, US", communicationPeriodicity: "9" },
];

const initialData2 = [
  {
    name: "LinkedIn Post",
    description: "Share or interact with company posts on LinkedIn",
    sequence: "1",
    mandatory: "Yes",
  },
  {
    name: "Email",
    description: "Cancelled freshers hiring",
    sequence: "3",
    mandatory: "Yes",
  },
]

const Admin = () => {
  const [selectedTab, setSelectedTab] = useState("CompanyManagement");
  const [isEditVisible, setIsEditVisible] = useState(false);
  const [isAddVisible, setIsAddVisible] = useState(false);
  const [editData, setEditData] = useState(null);
  const [tableData, setTableData] = useState([]);

  const tabs = [
    { id: "CompanyManagement", label: "Company Management" },
    { id: "CommunicationMethods", label: "Communication Methods" },
  ];
  
  useEffect(() => {
    // Retrieve data from localStorage for the current tab
    const storedData = JSON.parse(localStorage.getItem(selectedTab));
    console.log(selectedTab);

    if (storedData) {
      setTableData(storedData);
    } else {
      selectedTab === 'CompanyManagement' ? setTableData(initialData) : setTableData(initialData2);
      localStorage.setItem(`${selectedTab}`, JSON.stringify(selectedTab === 'CompanyManagement' ? initialData : initialData2));
    }
  }, [selectedTab]);
  console.log(tableData);

  const handleAdd = () => {
    setIsAddVisible(true);
  };

  const handleEdit = (method) => {
    setEditData(method); // Pass the selected method's data to the form
    setIsEditVisible(true); // Show the overlay
  };

  const handleDelete = (row) => {
    // Get stored data
    const storedData = JSON.parse(localStorage.getItem(selectedTab));
    // Filter out the row to delete
    const updatedData = storedData.filter((item) => item.name !== row.name); // Assuming 'name' is unique
    // Update localStorage and state
    localStorage.setItem(selectedTab, JSON.stringify(updatedData));
    setTableData(updatedData);
  };

  return (
    <div className="p-4">
      <TabNavigation
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <Table
        tableName={
          selectedTab === "CompanyManagement"
            ? "Companies"
            : "Communication Methods"
        }
        columns={
          selectedTab === "CompanyManagement"
            ? ["Name", "Location", "Communication Period"]
            : ["Name", "Description", "Sequence", "Mandatory"]
        }
        data={tableData}
        selectedTab={selectedTab === "CompanyManagement" ? "Company" : "Method"}
        onEdit={handleEdit} // Pass the edit handler to the Table
        onDelete={handleDelete}
        onAdd={handleAdd}
      />
      {isEditVisible &&
        (selectedTab === "CompanyManagement" ? (
          <EditCompanyCard
            method={editData}
            onClose={() => setIsEditVisible(false)}
            setTableData={setTableData}
          />
        ) : (
          <EditMethodCard
            method={editData}
            onClose={() => setIsEditVisible(false)}
            setTableData={setTableData}
          />
        ))}

      {isAddVisible &&
        (selectedTab === "CompanyManagement" ? (
          <AddCompanyCard
            onClose={() => setIsAddVisible(false)}
            setTableData={setTableData}
          />
        ) : (
          <AddMethodCard onClose={() => setIsAddVisible(false)} setTableData={setTableData} />
        ))}
    </div>
  );
};

export default Admin;
