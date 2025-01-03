/* eslint-disable react/prop-types */
import { useState } from "react";

const AddMethodCard = ({ onClose, setTableData }) => {
  const [methodName, setMethodName] = useState("");
  const [description, setDescription] = useState("");
  const [sequence, setSequence] = useState("");
  const [isMandatory, setIsMandatory] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMethod = {
      name: methodName,
      description,
      sequence,
      mandatory: isMandatory ? "Yes" : "No",
    };
    // Get existing companies from localStorage
    const storedMethods = JSON.parse(
      localStorage.getItem("CommunicationMethods")
    );
    const updatedData = [...storedMethods, newMethod];
    localStorage.setItem("CommunicationMethods", JSON.stringify(updatedData));
    setTableData(updatedData);
    onClose(); // Close the overlay after submission
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add Method</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="methodName"
            >
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
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="description"
            >
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
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="sequence"
            >
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
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMethodCard;
