import * as client from './client';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Signin() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate('/Kanbas/account');
  };
  return (
    <div className="container">
      <h1>Signin</h1>
      <div className="d-flex">
        <input
          className="form-control w-25"
          value={credentials.username}
          style={{ marginRight: '5px' }}
          placeholder="Enter Username"
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
        <input
          className="form-control w-25"
          value={credentials.password}
          placeholder="Enter Password"
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
      </div>

      <button
        className="btn btn-primary"
        onClick={signin}
        style={{ marginTop: '5px' }}
      >
        Signin
      </button>
    </div>
  );
}
export default Signin;