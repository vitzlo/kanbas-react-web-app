import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {
  BsPlusLg,
  BsThreeDotsVertical,
  BsGripVertical,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import "./index.css";
import "../index.css";
import "../../index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div>
      <div class="row">
        <div class="col kb-assignment-feed-search-box">
          <div class="mb-3 w-50">
            <input
              type="text"
              class="form-control"
              id="kb-assignments-search"
              placeholder="Search for Assignment"
            />
          </div>
        </div>
        <div class="col wd-flex-grow-1">
          <div class="float-end">
            <button type="button" class="btn btn-secondary btn-md">
              <BsPlusLg /> Group
            </button>
            <button type="button" class="btn btn-danger btn-md">
              <BsPlusLg /> Assignment
            </button>
            <button type="button" class="btn btn-secondary btn-md">
              <BsThreeDotsVertical />
            </button>
          </div>
        </div>
      </div>
      <hr />
      <ul class="list-group">
        <li class="list-group-item list-group-item-secondary">
          <span>ASSIGNMENTS</span>
        </li>
        {courseAssignments.map((assignment) => (
          <li class="list-group-item kb-feed-assignment">
            <div class="row">
              <div class="col-1 align-self-center kb-feed-assignment-icon-box">
                <BsGripVertical />
                <TfiWrite />
              </div>
              <div class="col-9 align-self-center">
                <div class="row">
                  <Link
                    key={assignment._id}
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                    style={{ "padding-left": "0px" }}
                  >
                    <span className="kb-feed-assignment-title">
                      {assignment.title}
                    </span>
                  </Link>
                </div>
                <div class="row">
                  <div class="col" style={{ "padding-left": "0px" }}>
                    <span class="kb-feed-assignment-description">
                      <span className="kb-feed-assignment-description-red">Multiple Modules </span>
                      | <b>Due</b> Sep 18, 2022 at 11:59pm
                      | 100 pts
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-2 align-self-center kb-feed-assignment-status-box">
                <span className="float-end">
                <BsFillCheckCircleFill />
                <BsThreeDotsVertical />
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Assignments;

{
  /* <div>
<h2>Assignments for course {courseId}</h2>
<div className="list-group">
  {courseAssignments.map((assignment) => (
    <Link
      key={assignment._id}
      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
      className="list-group-item">
      {assignment.title}
    </Link>
  ))}
</div>
</div> */
}
