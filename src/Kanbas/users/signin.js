import * as client from "./client";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const signin = async () => {
    try {
      await client.signin(credentials);
      navigate("/Kanbas/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div>
      <div className="kb-top-flex-content-container">
        <div>
          <h1>Sign-In</h1>
          {error && <div>{error}</div>}
        </div>
      </div>
      <div className="kb-sub-flex-content-container">
        <input
          className="form-control form-input-field"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
      </div>
      <div className="kb-sub-flex-content-container">
        <input
          className="form-control form-input-field"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
      </div>
      <div className="kb-sub-flex-content-container">
        <div>
          <button className="btn btn-success mb-1" onClick={signin}>
            Sign In
          </button>
        </div>
        <div>
          <Link className="btn btn-primary mb-1" to={`/Kanbas/signup`}>
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Signin;
