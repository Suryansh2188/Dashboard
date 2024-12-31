/* eslint-disable react/prop-types */
import { useState } from "react";

const EditCompanyCard = ({ method, onClose }) => {
  const [companyName, setCompanyName] = useState(method?.name || "");
  const [location, setLocation] = useState(method?.location || "");
  const [communicationPeriodicity, setCommunicationPeriodicity] = useState(method?.period || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      name: companyName,
      location,
      communicationPeriodicity,
    };
    console.log("Updated Method Data:", updatedData);
    onClose(); // Close the overlay after submission
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit Method</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="companyName">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="communicationPeriodicity">
            Communication Periodicity (days)
            </label>
            <input
              type="number"
              id="communicationPeriodicity"
              value={communicationPeriodicity}
              onChange={(e) => setCommunicationPeriodicity(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-lg mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCompanyCard;
