import { Link, useLocation } from "react-router-dom";
import {
  BsPersonSquare,
  BsSpeedometer2,
  BsFillJournalBookmarkFill,
  BsCalendar2Week,
  BsInbox,
  BsClock,
  BsPcDisplayHorizontal,
  BsArrowBarRight,
  BsQuestionCircle,
} from "react-icons/bs";
import "./index.css";

function KanbasNavigation() {
  const links = [
    {
      label: "Account",
      link: "Account",
      icon: <BsPersonSquare className="kb-sidebar-icon kb-sidebar-account-icon" />,
    },
    {
      label: "Dashboard",
      link: "Dashboard",
      icon: <BsSpeedometer2 className="kb-sidebar-icon" />,
    },
    {
      label: "Courses",
      link: "Courses",
      icon: <BsFillJournalBookmarkFill className="kb-sidebar-icon" />,
    },
    {
      label: "Calendar",
      icon: <BsCalendar2Week className="kb-sidebar-icon" />,
    },
    {
      label: "Inbox",
      icon: <BsInbox className="kb-sidebar-icon" />,
    },
    {
      label: "History",
      icon: <BsClock className="kb-sidebar-icon" />,
    },
    {
      label: "Studio",
      icon: <BsPcDisplayHorizontal className="kb-sidebar-icon" />,
    },
    {
      label: "Commons",
      icon: <BsArrowBarRight className="kb-sidebar-icon" />,
    },
    {
      label: "Help",
      icon: <BsQuestionCircle className="kb-sidebar-icon" />,
    },
  ];
  const { pathname } = useLocation();

  return (
    <div class="kb-sidebar position-fixed">
      <div class="kb-sidebar-logo">
        <img
          src="../../../Images/nu-n-motto.png"
          width="60px"
          height="48px"
          alt="NU Logo"
        />
      </div>
      {links.map(({ label, link, icon }, index) => (
        <div
          className={`${
            pathname.includes(link)
              ? "kb-sidebar-selected"
              : "kb-sidebar-unselected"
          }`}
        >
          <Link
            key={index}
            to={link !== undefined ? `/Kanbas/${link}` : pathname}
            style={{ textDecoration: "none" }}
          >
            {icon}
            <div className="kb-sidebar-text">{label}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
export default KanbasNavigation;
