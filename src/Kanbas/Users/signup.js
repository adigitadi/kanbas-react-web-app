import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as client from './client';
function Signup() {
  const [error, setError] = useState('');
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate('/Kanbas/account');
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="container">
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <div className="d-flex">
        <input
          className="form-control w-25"
          style={{ marginRight: '5px' }}
          value={credentials.username}
          placeholder="Enter Username"
          onChange={(e) =>
            setCredentials({
              ...credentials,
              username: e.target.value,
            })
          }
        />
        <input
          className="form-control w-25"
          value={credentials.password}
          placeholder="Enter Password"
          onChange={(e) =>
            setCredentials({
              ...credentials,
              password: e.target.value,
            })
          }
        />
      </div>

      <button
        className="btn btn-primary"
        onClick={signup}
        style={{ marginTop: '5px' }}
      >
        Signup
      </button>
    </div>
  );
}
export default Signup;