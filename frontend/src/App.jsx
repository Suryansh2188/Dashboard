import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import Admin from "./pages/Admin";
import User from "./pages/User";
import Report from "./pages/Report";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="user" element={<User />} />
          <Route path="report" element={<Report />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
