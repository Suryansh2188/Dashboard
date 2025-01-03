import { useState, useEffect } from "react";

const ActivityLog = () => {
  // Dummy data for activity logs
  const activityLogs = [
    { title: "Sent Email to ENTNT", timestamp: "2024-12-29 10:00" },
    { title: "LinkedIn Message sent to GOOGLE", timestamp: "2024-12-29 10:05" },
    { title: "Call with TechNova", timestamp: "2024-12-29 10:10" },
    { title: "Meeting scheduled with InnoCorp", timestamp: "2024-12-29 10:15" },
  ];

  const [visibleLogs, setVisibleLogs] = useState([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < activityLogs.length) {
        setVisibleLogs((prevLogs) => [...prevLogs, activityLogs[index]]);
        index++;
      } else {
        clearInterval(interval); // Stop adding logs once all are shown
      }
    }, 3000); // Interval of 3 seconds for each log to appear

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [activityLogs]);

  return (
    <div className="bg-white shadow rounded-lg p-4 w-full mx-auto">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Activity Log</h2>
      <div className="space-y-4">
        {visibleLogs.map((log, index) => (
          <div
            key={index}
            className="border-b pb-2 last:border-b-0"
          >
            <p className="font-semibold">{log.title}</p>
            <p className="text-gray-500 text-sm">{log.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;
