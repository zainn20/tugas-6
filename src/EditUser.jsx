import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useAppStore from '../store/';

const EditUser = () => {
  const { id } = useParams();
  const users = useAppStore((state) => state.users);
  const updateUser = useAppStore((state) => state.updateUser);
  const navigate = useNavigate();

  const user = users.find((user) => user.id === parseInt(id));
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Name and Email are required!');
      return;
    }
    updateUser({ id: parseInt(id), name, email });
    navigate('/users');
  };

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit User</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditUser;