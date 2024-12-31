import { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  format,
  addMonths,
  subMonths,
} from "date-fns";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Helper functions
  const getMonthName = (date) => format(date, "MMMM yyyy");
  const getDaysInCalendar = (date) => {
    const startDate = startOfWeek(startOfMonth(date));
    const endDate = endOfWeek(endOfMonth(date));

    const days = [];
    let current = startDate;
    while (current <= endDate) {
      days.push(current);
      current = addDays(current, 1);
    }
    return days;
  };

  const days = getDaysInCalendar(currentDate);

  return (
    <div className="mt-4 max-w-xl mx-auto">
      {/* Header: Month and Navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          className="text-blue-600 text-2xl"
          onClick={() => setCurrentDate(subMonths(currentDate, 1))}
        >
          {"<"}
        </button>
        <h2 className="text-blue-600 text-xl font-bold">
          {getMonthName(currentDate)}
        </h2>
        <button
          className="text-blue-600 text-2xl"
          onClick={() => setCurrentDate(addMonths(currentDate, 1))}
        >
          {">"}
        </button>
      </div>

      {/* Days of the Week */}
      <div className="grid grid-cols-7 text-center font-bold text-blue-600 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="p-1">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg text-center ${
              format(day, "M") !== format(currentDate, "M")
                ? "text-gray-400"
                : "text-gray-800"
            }`}
          >
            <div
              className={`${
                format(day, "d") === format(new Date(), "d") &&
                format(day, "M") === format(new Date(), "M") &&
                format(day, "yyyy") === format(new Date(), "yyyy")
                  ? "bg-blue-200 font-bold"
                  : "bg-gray-100"
              } rounded-lg p-2`}
            >
              {format(day, "d")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
