import { Link, useParams, useLocation } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import "../index.css";
import "../../index.css";

function CourseNavigation() {
  const links = [
    {
      label: "Home",
      link: "Home",
    },
    {
      label: "Modules",
      link: "Modules",
    },
    {
      label: "Piazza",
    },
    {
      label: "Zoom Meetings",
    },
    {
      label: "Assignments",
      link: "Assignments",
    },
    {
      label: "Quizzes",
    },
    {
      label: "Grades",
      link: "Grades",
    },
    {
      label: "Panopto Video",
    },
    {
      label: "Discussions",
    },
    {
      label: "Announcements",
    },
    {
      label: "Pages",
    },
    {
      label: "Files",
    },
    {
      label: "Rubrics",
    },
    {
      label: "Outcomes",
    },
    {
      label: "Collaborations",
    },
    {
      label: "Syllabus",
    },
    {
      label: "Progress Reports (EAB Navigate)",
    },
    {
      label: "Settings",
    },
  ];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div>
      <div className="kb-sub-menu-title">Fall 2023 Semester</div>
      {links.map(({ label, link }, index) => (
        <div>
          <Link
            key={index}
            to={
              link !== undefined
                ? `/Kanbas/Courses/${courseId}/${link}`
                : pathname
            }
            className={`${
              pathname.includes(link)
                ? "kb-sub-menu-selected"
                : "kb-sub-menu-unselected"
            }`}
          >
            {label}
          </Link>
        </div>
      ))}
    </div>
  );
}
export default CourseNavigation;
