import { Link, useNavigate } from 'react-router-dom';
import useAppStore from '../store/';
import React, { useState } from 'react';

const Users = () => {
  // stores
  const version = useAppStore((state) => state.version);
  const users = useAppStore((state) => state.users);
  console.log({ version });

  // state for search
  const [searchQuery, setSearchQuery] = useState('');

  // actions
  const deleteUser = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      useAppStore.getState().deleteUser(id);
      console.log('User deleted:', id);
    }
  };

  const handleSearch = () => {
    console.log('Search query:', searchQuery);
    // Logika pencarian sudah diterapkan melalui filteredUsers
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navigate = useNavigate(); // Tambahkan navigate untuk berpindah halaman

  return (
    <div>
      <h1>Users</h1>
      <div>
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={() => navigate('/user/add')}>Add User</button> {/* Tombol Add User */}
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/user/${user.id}`}>
                  <button className="btn-detail">Detail</button>
                </Link>
                <Link to={`/user/${user.id}/edit`}>
                  <button className="btn-edit">Edit</button>
                </Link>
                <button
                  className="btn-delete"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;