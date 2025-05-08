import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Users from './pages/Users';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import UserDetail from './pages/UserDetail';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route untuk halaman Users */}
        <Route path="/users" element={<Users />} />

        {/* Route untuk halaman Add User */}
        <Route path="/user/add" element={<AddUser />} />

        {/* Route untuk halaman Edit User */}
        <Route path="/user/:id/edit" element={<EditUser />} />

        {/* Route untuk halaman Detail User */}
        <Route path="/user/:id" element={<UserDetail />} />

        {/* Redirect ke halaman Users sebagai default */}
        <Route path="*" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
