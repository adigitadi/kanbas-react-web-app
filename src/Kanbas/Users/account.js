import * as client from './client';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
function Account() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount({
      ...account,
      dob: account ? getDate(new Date(account.dob)) : '',
    });
  };
  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 
  const save = async () => {
    await client.updateUser(account);
  };
  const signout = async () => {
    await client.signout();
    navigate('/Kanbas/signin');
  };
  const getDate = (today) => {
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };

  return (
    <div className="w-50 container">
      <h1>Account</h1>
      <Link to="/Kanbas/users" className="btn btn-warning m-2">
        Users
      </Link>
      {account && (
        <div>
          <label>Password:</label>
          <input
            className="form-control"
            value={account.password}
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
          />
          <label>First Name:</label>
          <input
            className="form-control"
            value={account.firstName}
            placeholder="Enter First Name"
            onChange={(e) =>
              setAccount({ ...account, firstName: e.target.value })
            }
          />
          <label>Last Name:</label>
          <input
            className="form-control"
            value={account.lastName}
            placeholder="Enter Last Name"
            onChange={(e) =>
              setAccount({ ...account, lastName: e.target.value })
            }
          />
          <label>Date of Birth</label>
          <input
            className="form-control"
            type="date"
            value={account.dob}
            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
          />
          <label>Email:</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Email"
            value={account.email}
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
          />
          <label>Role:</label>
          <select
            className="form-select"
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>

          <button
            className="btn btn-primary"
            onClick={save}
            style={{ marginTop: '3px' }}
          >
            Save
          </button>
          <button
            onClick={signout}
            className="btn btn-secondary"
            style={{ marginLeft: '3px', marginTop: '3px' }}
          >
            Signout
          </button>
        </div>
      )}
    </div>
  );
}
export default Account;