import { Link } from "react-router-dom";
import db from "../Database";
import { TfiWrite } from "react-icons/tfi";
import "./index.css";
import "../index.css";

function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <div className="kb-top-flex-content-container">
        <div className="wd-flex-grow-1">
          <h2>Dashboard</h2>
          <hr />
        </div>
      </div>
      <div className="kb-sub-flex-content-container">
        <div className="kb-body-text wd-flex-grow-1">
          <h5>Published Courses ({courses.length})</h5>
          <hr />
          <div className="d-flex flex-wrap">
            {courses.map((course) => (
              <div className="card kb-dashboard-card">
                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
                  <img
                    src="/Images/wheezy-banner.png"
                    alt={course.name}
                    className="card-img-top"
                  />
                  <h6 className="card-title">
                    {course.number} {course.name}
                  </h6>
                  <p className="card-text">{course.number}</p>
                  <p className="card-text">
                    {course.startDate} {course.endDate}
                  </p>
                  <TfiWrite />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
}
export default Dashboard;
