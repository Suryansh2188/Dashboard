/* eslint-disable react/prop-types */
import { useState } from "react";

const LogCommunicationCard = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    type: "LinkedIn Post",
    date: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass form data to the parent component
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-lg font-bold mb-4">Log Communication</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="type" className="block font-semibold mb-1">
              Type:
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
            >
              <option>LinkedIn Post</option>
              <option>Email</option>
              <option>Call</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block font-semibold mb-1">
              Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="notes" className="block font-semibold mb-1">
              Notes:
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
              rows="3"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogCommunicationCard;
