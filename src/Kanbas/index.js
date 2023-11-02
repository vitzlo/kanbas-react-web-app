import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import "./index.css";
import "../index.css";
import Courses from "./Courses";
import db from "./Database";
import { useState } from "react";

// d-flex was here, was messing with the other containers
function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString()}]);
    console.log(course);
    console.log(courses);
  };
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(courses.map((c) => (c._id === course._id ? course : c)));
  };

  return (
    <div>
      <KanbasNavigation />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/Account" element={<h1>Account</h1>} />
          <Route
            path="/Dashboard"
            element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
              />
            }
          />
          <Route
            path="/Courses/:courseId/*"
            element={<Courses courses={courses} />}
          />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;
