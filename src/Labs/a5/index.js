import WorkingWithArrays from "./WorkingWithArrays"
import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";

function Assignment5() {
  // const URL = "http://localhost:4000/a5/welcome";
  const URL = "https://a5--radiant-kulfi-63b9ed.netlify.app/#/Labs/a5/welcome"

    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href={URL}
             className="list-group-item">
            Welcome
          </a>
        </div>
        <EncodingParametersInURLs />
        <WorkingWithObjects />
        <WorkingWithArrays />
        {/* <SimpleAPIExamples /> */}
      </div>
    );
  }
  export default Assignment5;