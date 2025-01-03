import { useState, useEffect } from "react";
import LogCommunicationCard from "../modals/LogCommunicationCard";
import { dashboardData } from  "../../lib/dummyData"

const CompanyTable = () => {
  const initialData = JSON.parse(localStorage.getItem("companyData")) || dashboardData;
  const [data, setData] = useState(initialData);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Save the data to localStorage whenever it changes
    localStorage.setItem("companyData", JSON.stringify(data));
  }, [data]);

  const handleCommunicationPerformed = () => {
    if (selectedCompanies.length > 0) {
      setModalOpen(true);
    } else {
      alert("Please select at least one company.");
    }
  };

  const handleModalSubmit = (formData) => {
    const updatedData = data.map((row) =>
      selectedCompanies.includes(row.company)
        ? {
            ...row,
            lastCommunications: [
              { type: formData.type, date: formData.date, notes: formData.notes },
              ...row.lastCommunications,
            ],
            highlight: null, // Reset highlights
          }
        : row
    );
    setData(updatedData);
    setSelectedCompanies([]); // Clear selection
    setModalOpen(false);
  };

  const toggleCompanySelection = (company) => {
    setSelectedCompanies((prev) =>
      prev.includes(company)
        ? prev.filter((c) => c !== company)
        : [...prev, company]
    );
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="w-full flex justify-between">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Company Communications
        </h2>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-4"
          onClick={handleCommunicationPerformed}
        >
          + Communication Performed
        </button>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-100 text-left">
            <th className="border px-4 py-2">Select</th>
            <th className="border px-4 py-2">Company</th>
            <th className="border px-4 py-2">Last 5 Communications</th>
            <th className="border px-4 py-2">Next Due</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={`hover:bg-gray-50 ${
                row.highlight === "red" ? "bg-red-100" : ""
              } ${row.highlight === "yellow" ? "bg-yellow-100" : ""}`}
            >
              <td className="border px-4 py-2">
                <input
                  type="checkbox"
                  onChange={() => toggleCompanySelection(row.company)}
                  checked={selectedCompanies.includes(row.company)}
                />
              </td>
              <td className="border px-4 py-2">
                <div>
                  <div className="font-bold">{row.company}</div>
                  <div className="text-gray-600">{row.location}</div>
                </div>
              </td>
              <td className="border px-4 py-2">
                {row.lastCommunications.slice(0, 5).map((comm, idx) => (
                  <div
                    key={idx}
                    className="bg-blue-100 w-fit text-center inline-flex text-blue-600 px-2 py-1 rounded-full text-sm m-1 cursor-pointer"
                    title={comm.notes}
                  >
                    {comm.type} ({comm.date})
                  </div>
                ))}
              </td>
              <td
                className={`border px-4 py-2 ${
                  row.highlight === "red" ? "text-red-600" : "text-yellow-600"
                }`}
              >
                {row.nextDue}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Logging Communication */}
      <LogCommunicationCard
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
};

export default CompanyTable;
