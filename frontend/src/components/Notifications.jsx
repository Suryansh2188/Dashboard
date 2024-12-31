import { useState } from "react";
import { overdueCommunications } from "../lib/dummyData";

const Notifications = () => {
  const [overrides, setOverrides] = useState({}); // Track override states by ID

  const toggleHighlight = (id) => {
    setOverrides((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the current state for the given ID
    }));
  };

  return (
    <div>
      {/* Header Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Overdue Communications Card */}
        <div className="bg-red-100 p-4 rounded-lg shadow">
          <div className="flex items-center space-x-2 text-red-600 font-bold">
            <span className="text-2xl">⚠️</span>
            <h2>Overdue Communications</h2>
          </div>
          <div className="text-4xl font-bold text-red-600 mt-2">
            {overdueCommunications.length}
          </div>
        </div>

        {/* Due Today Card */}
        <div className="bg-yellow-100 p-4 rounded-lg shadow">
          <div className="flex items-center space-x-2 text-yellow-700 font-bold">
            <span className="text-2xl">⏰</span>
            <h2>Due Today</h2>
          </div>
          <div className="text-4xl font-bold text-yellow-700 mt-2">0</div>
        </div>
      </div>

      {/* Overdue Communications List */}
      <div>
        <h2 className="text-red-600 text-xl font-bold mb-4">
          Overdue Communications
        </h2>
        <div className="space-y-4 ">
          {overdueCommunications.map((comm) => {
            const isDisabled = overrides[comm.id];
            return (
              <div
                key={comm.id}
                className={`p-4 rounded-lg shadow flex justify-between items-center ${
                  isDisabled ? "bg-gray-100 text-gray-400" : "bg-red-50"
                }`}
              >
                {/* Company Info */}
                <div>
                  <h3 className="text-blue-600 text-lg font-bold">
                    {comm.company}
                  </h3>
                  <p className="text-sm">
                    Last communication: {comm.lastCommunication}
                  </p>
                  <p
                    className={`text-sm font-medium ${
                      isDisabled ? "" : "text-red-600"
                    }`}
                  >
                    {comm.overdueDays} days overdue
                  </p>
                </div>

                {/* Disable/Enable Highlight Button */}
                <button
                  className={`font-medium ${
                    isDisabled
                      ? "text-gray-400 hover:underline"
                      : "text-red-600 hover:underline"
                  }`}
                  onClick={() => toggleHighlight(comm.id)}
                >
                  {isDisabled ? "Enable Highlight" : "Disable Highlight"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
