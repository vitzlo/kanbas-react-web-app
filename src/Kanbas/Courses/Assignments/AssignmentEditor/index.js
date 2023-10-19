import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { BsThreeDotsVertical, BsFillCheckCircleFill } from "react-icons/bs";
import "./index.css";
import "../index.css";
import "../../index.css";
import "../../../index.css";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <div className="row">
        <div className="col kb-assignment-edit-text-published">
          <BsFillCheckCircleFill />
          <span className="align-self-center"> Published</span>
          <button type="button" className="btn btn-secondary btn-sm">
            <BsThreeDotsVertical />
          </button>
        </div>
      </div>
      <hr />
      <h2>Assignment Name</h2>
      <input value={assignment.title} className="form-control mb-2" />
      <hr />
      <div className="float-end">
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-secondary"
        >
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-danger me-2">
          Save
        </button>
      </div>
    </div>
  );
}

export default AssignmentEditor;
