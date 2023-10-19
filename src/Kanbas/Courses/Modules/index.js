import ModuleList from "./ModuleList";
import { BsPlusLg, BsThreeDotsVertical } from "react-icons/bs";
import "./index.css";
import "../index.css";
import "../../index.css";

function Modules() {
  return (
    <div>
      <div class="float-end">
        <button type="button" class="btn btn-secondary btn-md">
          Collapse All
        </button>
        <button type="button" class="btn btn-secondary btn-md">
          View Progress
        </button>
        <button
          class="btn btn-secondary btn-md dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fa-regular fa-circle-check kb-feed-circle-icon"></i>
          Publish All
        </button>
        <button type="button" class="btn btn-danger btn-md">
          <BsPlusLg /> Module
        </button>
        <button type="button" class="btn btn-secondary btn-md">
          <BsThreeDotsVertical />
        </button>
      </div>
      <br />
      <br />
      <hr />
      <ModuleList />
    </div>
  );
}
export default Modules;
