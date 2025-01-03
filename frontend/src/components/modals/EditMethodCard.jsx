/* eslint-disable react/prop-types */
import { useState } from "react";

const EditMethodCard = ({ method, onClose, setTableData }) => {
  const [methodName, setMethodName] = useState(method?.name || "");
  const [description, setDescription] = useState(method?.description || "");
  const [sequence, setSequence] = useState(method?.sequence || "");
  const [isMandatory, setIsMandatory] = useState(method?.mandatory === "Yes");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve current data from localStorage
    const storedData = JSON.parse(localStorage.getItem("CommunicationMethods")) || [];

    // Update the specific entry
    const updatedData = storedData.map((entry) =>
      entry.name === method.name // Compare using a unique identifier (e.g., name)
        ? {
            name: methodName,
            description,
            sequence,
            mandatory: isMandatory ? "Yes" : "No",
          }
        : entry
    );
    // Save the updated data back to localStorage
    localStorage.setItem("CommunicationMethods", JSON.stringify(updatedData));
    setTableData(updatedData);
    // Notify parent component and close the modal
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit Communication Method</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="methodName">
              Method Name
            </label>
            <input
              type="text"
              id="methodName"
              value={methodName}
              onChange={(e) => setMethodName(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="sequence">
              Sequence
            </label>
            <input
              type="number"
              id="sequence"
              value={sequence}
              onChange={(e) => setSequence(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>
          <div className="mb-6">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={isMandatory}
                onChange={() => setIsMandatory(!isMandatory)}
                className="form-checkbox text-blue-600"
              />
              <span className="ml-2 text-sm">Mandatory</span>
            </label>
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

export default EditMethodCard;
