import * as client from "../users/client";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

function Account() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    await client.updateUser(account);
  };
  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/signin");
  };

  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);

  return (
    <div>
      <div className="kb-top-flex-content-container">
        <div className="wd-flex-grow-1">
          <h2>Account</h2>
          <hr />
        </div>
      </div>
      <div className="kb-sub-flex-content-container">
        {account && (
          <div>
            <div>
              <label for="account-password">Password:</label>
              <input
                id="account-password"
                className="form-control form-input-field"
                value={account.password}
                onChange={(e) =>
                  setAccount({ ...account, password: e.target.value })
                }
              />
            </div>
            <div>
              <label for="account-first-name">First Name:</label>
              <input
                id="account-first-name"
                className="form-control form-input-field"
                value={account.firstName}
                onChange={(e) =>
                  setAccount({ ...account, firstName: e.target.value })
                }
              />
            </div>
            <div>
              <label for="account-last-name">Last Name:</label>
              <input
                id="account-last-name"
                className="form-control form-input-field"
                value={account.lastName}
                onChange={(e) =>
                  setAccount({ ...account, lastName: e.target.value })
                }
              />
            </div>
            <div>
              <label for="account-dob">Date of Birth:</label>
              <input
                id="account-dob"
                className="form-control form-input-field"
                value={account.dob}
                onChange={(e) =>
                  setAccount({ ...account, dob: e.target.value })
                }
              />
            </div>
            <div>
              <label for="account-email">Email:</label>
              <input
                id="account-email"
                className="form-control form-input-field"
                value={account.email}
                onChange={(e) =>
                  setAccount({ ...account, email: e.target.value })
                }
              />
            </div>
            <select
              className="form-select"
              value={account.role}
              onChange={(e) => setAccount({ ...account, role: e.target.value })}
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </select>
            <button className="btn btn-primary mb-1" onClick={save}>
              Save
            </button>
            <button className="btn btn-primary mb-1" onClick={signout}>
              Sign Out
            </button>
            <Link to="/Kanbas/admin/users" className="btn btn-warning mb-1">
              Users
            </Link>
          </div>
        )}
        {!account && (
          <div>
            <Link to="/Kanbas/signin" className="btn btn-primary mb-1">
              Login Page
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
export default Account;
