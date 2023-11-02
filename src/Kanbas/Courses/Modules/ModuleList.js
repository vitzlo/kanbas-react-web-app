import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import "../index.css";
import "../../index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();


  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          <input
            type="text"
            className="form-control form-input-field"
            placeholder="Module Name"
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <div className="col float-end">
            <button
              onClick={() => dispatch(addModule({ ...module, course: courseId }))}
              type="submit"
              className="btn btn-success mb-1"
            >
              Add
            </button>
          </div>
          <div className="col float-end">
            <button
              onClick={() => dispatch(updateModule(module))}
              type="submit"
              className="btn btn-primary mb-1"
            >
              Update
            </button>
          </div>
          <textarea
            type="text"
            className="form-control form-input-field"
            placeholder="Module Description"
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
        </li>
      </ul>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <ul className="list-group">
            <li className="list-group-item list-group-item-secondary">
              <span>{module.name}</span>
              <div className="col float-end">
                <button
                  className="btn btn-danger mb-1"
                  onClick={() => dispatch(deleteModule(module._id))}
                >
                  Delete
                </button>
              </div>
              <div className="col float-end">
                <button
                  className="btn btn-warning mb-1"
                  onClick={() => dispatch(setModule(module))}
                >
                  Edit
                </button>
              </div>
            </li>
            <li className="list-group-item">
              <span>{module.description}</span>
            </li>
          </ul>
        ))}
    </div>
  );
}
export default ModuleList;