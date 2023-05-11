import React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';

const Login = () => {
  const [user, setUser] = useState('');
  const auth = useAuth();
  const location = useLocation();

  const redirectPath = location.state?.path || '/';

  const navigate = useNavigate();
  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };

  return (
    <div>
      <label>
        Username:
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
