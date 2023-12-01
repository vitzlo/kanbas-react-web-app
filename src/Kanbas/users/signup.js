import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/Kanbas/Account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <div className="kb-top-flex-content-container">
        <div>
          <h1>Sign Up</h1>
          {error && <div>{error}</div>}
        </div>
      </div>
      <div className="kb-sub-flex-content-container">
        <input
          className="form-control form-input-field"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({
              ...credentials,
              username: e.target.value,
            })
          }
        />
      </div>
      <div className="kb-sub-flex-content-container">
        <input
          className="form-control form-input-field"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({
              ...credentials,
              password: e.target.value,
            })
          }
        />
      </div>
      <div className="kb-sub-flex-content-container">
        <div>
          <button className="btn btn-primary mb-1" onClick={signup}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
export default Signup;
