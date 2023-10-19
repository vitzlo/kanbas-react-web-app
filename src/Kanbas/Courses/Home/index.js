import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import Modules from "../Modules";
import "./index.css";
import "../index.css";
import "../../index.css";

function Home() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <div>
      {/* HOME WEIGHTS [:]           */}
      {/* xs    sm    md    lg   xl  */}
      {/* 12/0  12/0  12/0  9/3  9/3 */}
      <div className="kb-in-flex-content-container">
        <div className="kb-in-flex-content-container-col col-12 col-sm-12 col-lg-9">
          <Modules />
        </div>
        <div className="kb-in-flex-content-container-col col-3 col-sm-3 d-none d-lg-block">
          <div class="d-grid">
            <button class="btn btn-secondary" type="button">
              <i class="fa fa-xs fa-file-import"></i>
              <span>Import Existing Content</span>
            </button>
            <button class="btn btn-secondary" type="button">
              <i class="fa fa-xs fa-arrow-right-from-bracket"></i>
              <span>Import from Commons</span>
            </button>
            <button class="btn btn-secondary" type="button">
              <i class="fa fa-xs fa-crosshairs"></i>
              <span>Choose Home Page</span>
            </button>
            <button class="btn btn-secondary" type="button">
              <i class="fa fa-xs fa-chart-simple"></i>
              <span>View Course Stream</span>
            </button>
            <button class="btn btn-secondary" type="button">
              <i class="fa fa-xs fa-bullhorn"></i>
              <span>New Announcement</span>
            </button>
            <button class="btn btn-secondary" type="button">
              <i class="fa fa-xs fa-chart-simple"></i>
              <span>New Analytics</span>
            </button>
            <button class="btn btn-secondary" type="button">
              <i class="fa fa-xs fa-bell"></i>
              <span>View Course Notifications</span>
            </button>
          </div>
          <div class="kb-home-status">
            <b>To Do</b>
            <div class="kb-etc-header-line">
              <hr />
            </div>
            {courseAssignments.map((assignment) => (
              <div className="kb-home-status-todo-item">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                  Grade {assignment.title}
                </Link>
                <div>100 points • Sep 18 at 11:59pm</div>
              </div>
            ))}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
