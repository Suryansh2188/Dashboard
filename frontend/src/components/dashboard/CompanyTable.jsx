import { useState } from "react";
import { dashboardData } from "../../lib/dummyData";
const CompanyTable = () => {
  const [data, setData] = useState(dashboardData);

  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  // Handle communication performed
  const handleCommunicationPerformed = () => {
    if (selectedCompanies.length > 0) {
      return setModalOpen(true);
    } else {
      return alert("Please select at least one company.");
    }
  };

  const handleModalSubmit = () => {
    // Reset highlights and perform any desired actions
    const updatedData = data.map((row) =>
      selectedCompanies.includes(row.company)
        ? { ...row, highlight: null } // Reset highlights
        : row
    );
    setData(updatedData);
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
        <h2 className="text-2xl font-bold  text-blue-600 mb-4">
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
                {row.lastCommunications.map((comm, idx) => (
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
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-lg font-bold mb-4">Log Communication</h2>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Type:</label>
              <select className="w-full border rounded-lg px-4 py-2">
                <option>LinkedIn Post</option>
                <option>Email</option>
                <option>Call</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Date:</label>
              <input
                type="date"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Notes:</label>
              <textarea
                className="w-full border rounded-lg px-4 py-2"
                rows="3"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg mr-2"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                onClick={handleModalSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyTable;
