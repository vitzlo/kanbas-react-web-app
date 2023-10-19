import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import "../index.css";
import "../../index.css";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <ul className="list-group">
            <li
              key={index}
              className="list-group-item list-group-item-secondary"
            >
              <span>{module.name}</span>
            </li>
            <li
              key={index}
              className="list-group-item"
            >
              <span>{module.description}</span>
            </li>
          </ul>
        ))}
    </div>
  );
}
export default ModuleList;

/*  */

/*
    <ul className="list-group">
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">
             <h3>{module.name}</h3>
             <p>{module.description}</p>
           </li>
      ))
      }
    </ul>*/
