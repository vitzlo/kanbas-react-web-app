import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import "./index.css";
import "../index.css";
import Courses from "./Courses";

// d-flex was here, was messing with the other containers
function Kanbas() {
  return (
    <div>
      <KanbasNavigation />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/Account" element={<h1>Account</h1>} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;
