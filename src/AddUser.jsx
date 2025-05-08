import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAppStore from '../store/';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const addUser = useAppStore((state) => state.addUser);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Name and Email are required!');
      return;
    }
    addUser({ id: Date.now(), name, email }); // Memanggil fungsi addUser dari store
    navigate('/users');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add User</h1>
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
      <button type="submit">Add</button>
    </form>
  );
};

export default AddUser;