import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import "../index.css";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div>
      <div className="kb-top-flex-content-container">
        <div className="wd-flex-grow-1">
          <h2>Dashboard</h2>
          <hr />
        </div>
      </div>
      <div className="kb-sub-flex-content-container">
        <div className="kb-feed col-6 col-sm-6">
          <h5>Published Courses ({courses.length})</h5>
          <hr />
          <ul className="list-group">
            <div className="list-group-item">
              <input
                type="text"
                className="form-control form-input-field"
                placeholder="New Course"
                value={course.name}
                onChange={(e) => setCourse({ ...course, name: e.target.value })}
              />
              <input
                type="text"
                className="form-control form-input-field"
                placeholder="Course #"
                value={course.number}
                onChange={(e) =>
                  setCourse({ ...course, number: e.target.value })
                }
              />
              <input
                type="text"
                className="form-control form-input-field"
                placeholder="Course State Date"
                value={course.startDate}
                onChange={(e) =>
                  setCourse({ ...course, startDate: e.target.value })
                }
              />
              <input
                type="text"
                className="form-control form-input-field"
                placeholder="Course End Date"
                value={course.endDate}
                onChange={(e) =>
                  setCourse({ ...course, endDate: e.target.value })
                }
              />
              <div className="col float-end">
                <button
                  onClick={updateCourse}
                  type="submit"
                  className="btn btn-primary mb-1"
                >
                  Update
                </button>
              </div>
              <div className="col float-end">
                <button
                  onClick={addNewCourse}
                  type="submit"
                  className="btn btn-success mb-1"
                >
                  Add
                </button>
              </div>
            </div>
          </ul>
          <ul className="list-group">
            {courses.map((course) => (
              <div className="list-group-item">
                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  className="form-name-text"
                >
                  {course.name}
                </Link>
                <div className="col float-end">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      deleteCourse(course._id);
                    }}
                    type="submit"
                    className="btn btn-danger mb-1"
                  >
                    Delete
                  </button>
                </div>
                <div className="col float-end">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setCourse(course);
                    }}
                    type="submit"
                    className="btn btn-warning mb-1"
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
