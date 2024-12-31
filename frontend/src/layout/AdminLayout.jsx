import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex p-1 bg-white overflow-y-hidden gap-2">
      <Sidebar />
      <main className="flex-grow rounded-lg h-screen overflow-y-auto bg-gray-200 p-6">
        <h1 className="text-2xl font-bold mb-4">Communication Tracking</h1>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
