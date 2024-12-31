import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiHome, FiUser, FiBarChart } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Menu for Mobile */}
      <button
        onClick={toggleSidebar}
        className="md:hidden text-white bg-blue-600 p-2 rounded-full focus:outline-none m-2"
      >
        <FiMenu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`bg-blue-600 rounded-xl text-white h-screen fixed top-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-60 p-4 transition-transform duration-300 ease-in-out md:static md:translate-x-0 z-50`}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">ENTNT</h2>
        <nav className="flex flex-col space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-lg ${
                isActive ? "bg-white text-blue-600" : "hover:bg-blue-500"
              }`
            }
          >
            <FiHome className="mr-2" size={20} />
            Admin
          </NavLink>
          <NavLink
            to="/user"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-lg ${
                isActive ? "bg-white text-blue-600" : "hover:bg-blue-500"
              }`
            }
          >
            <FiUser className="mr-2" size={20} />
            User
          </NavLink>
          <NavLink
            to="/report"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-lg ${
                isActive ? "bg-white text-blue-600" : "hover:bg-blue-500"
              }`
            }
          >
            <FiBarChart className="mr-2" size={20} />
            Reports
          </NavLink>
        </nav>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
