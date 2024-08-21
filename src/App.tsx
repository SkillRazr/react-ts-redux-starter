// @ts-nocheck
import Button from '@mui/material/Button';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './store/userSlice';
import './styles/main.scss';

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  const status = useSelector((state) => state.users.status);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <Button variant="contained">Hello, React App</Button>
      <h1>Users List</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Failed to load users.</p>}
      {status === 'succeeded' && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
