import { useLocation } from "react-router-dom";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { BsEyeglasses } from "react-icons/bs";
import { TfiMenu } from "react-icons/tfi";
import "./index.css";
import "../index.css";
import { Breadcrumb } from "rsuite";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments"
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const [course, setCourse] = useState({});
  // const API_BASE = "http://localhost:4000/api";
  const API_BASE = "https://kanbas-node-server-app-a6-m3tp.onrender.com/api";
  // const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/courses`;
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  const page = pathname.slice(pathname.lastIndexOf("/") + 1, pathname.length);

  return (
    <div>
      <div className="kb-top-flex-content-container">
        <div className="">
          <TfiMenu />
        </div>
        <div className="kb-header-section wd-flex-grow-1">
          <Breadcrumb separator={" > "}>
            <Breadcrumb.Item className="kb-breadcrumb-inactive">
              {course.number} 01 FA23
            </Breadcrumb.Item>
            <Breadcrumb.Item className="kb-breadcrumb-active">
              {page}
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="kb-header-section wd-flex-grow-1">
          <button type="button" class="btn btn-secondary float-end">
            <BsEyeglasses /> Student View
          </button>
        </div>
      </div>
      <div className="kb-horizontal-line">
        <hr />
      </div>
      {/* COURSES WEIGHTS [0]                    */}
      {/* xs      sm      md      lg      xl     */}
      {/* 0/[12]  0/[12]  2/[10]  2/[10]  2/[10] */}
      <div className="kb-sub-flex-content-container">
        <div className="kb-sub-menu col-2 d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="kb-feed col-12 col-sm-12 col-md-10">
          <Routes>
            <Route path="" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="/Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
