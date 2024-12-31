/* eslint-disable react/prop-types */
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";

const Table = ({ tableName, columns, data, onAdd, onEdit, selectedTab }) => {
  return (
    <div className="overflow-x-auto">
      <div className="flex w-full justify-between mb-2">
        <h1 className="text-2xl font-bold  text-blue-600">{tableName}</h1>
        <button
          className="flex items-center px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700"
          onClick={() => onAdd()}
        >
          <FaPlus className="mr-2" /> {`Add ${selectedTab}`}
        </button>
      </div>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-600 text-white">
            {columns.map((column, i) => (
              <th key={i} className="p-2 border border-gray-300">
                {column}
              </th>
            ))}
            <th className="p-2 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="even:bg-gray-100">
              {Object.values(row).map((cell, cellIndex) => (
                <td key={cellIndex} className="p-2 border border-gray-300">
                  {cell}
                </td>
              ))}
              <td className="p-2 border border-gray-300">
                <div className="flex items-center space-x-4">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => onEdit(row)}
                  >
                    <FaEdit className="w-5 h-5" />
                  </button>
                  <button className="text-blue-600 hover:text-blue-800">
                    <FaTrash className="w-5 h-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
