import React from 'react';
import { Outlet, Link, useSearchParams } from 'react-router-dom';

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get('filter') === 'active';
  return (
    <div>
      <nav>
        <Link to="/users/1">User1</Link>
        <Link to="/users/2">User2</Link>
        <Link to="/users/3">User3</Link>
        <Link to="/users/admin">Admin</Link>
      </nav>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: 'active' })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      {showActiveUsers ? (
        <h2>Showing active users</h2>
      ) : (
        <h2> Showing all users</h2>
      )}
    </div>
  );
};

export default Users;
