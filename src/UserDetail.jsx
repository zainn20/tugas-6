import React from "react";
import { useParams } from 'react-router-dom';
import useAppStore from '../store/';
import reactSvg from '../assets/react.svg';

const UserDetail = () => {
  const { id } = useParams();
  const users = useAppStore((state) => state.users);
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <img src={user.photo || reactSvg} alt={`${user.name}'s profile`} style={styles.photo} />
        <div>
          <h1 style={styles.name}>{user.name}</h1>
          <p style={styles.email}>{user.email}</p>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>Personal Info</h2>
        {user.address && <p><strong>Address:</strong> {user.address}</p>}
        {user.birthdate && <p><strong>Birthdate:</strong> {user.birthdate}</p>}
        {user.currentColleague && <p><strong>Current Colleague:</strong> {user.currentColleague}</p>}
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>Hobbies</h2>
        <ul style={styles.hobbyList}>
          {user.hobbies?.map((hobby, index) => (
            <li key={index} style={styles.hobbyItem}>• {hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  card: {
    maxWidth: "700px",
    margin: "40px auto",
    padding: "30px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    color: "#333",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  header: {
    display: "flex",
    gap: "20px",
    marginBottom: "30px",
    alignItems: "center",
  },
  photo: {
    width: "120px",
    height: "120px",
    objectFit: "cover",
    borderRadius: "10px",
    border: "2px solid #ccc",
  },
  name: {
    fontSize: "1.8em",
    margin: "0 0 10px 0",
  },
  email: {
    fontSize: "1em",
    color: "#777",
  },
  section: {
    marginBottom: "20px",
  },
  title: {
    fontSize: "1.2em",
    marginBottom: "10px",
    color: "#222",
    borderBottom: "1px solid #eee",
    paddingBottom: "5px",
  },
  hobbyList: {
    listStyle: "none",
    paddingLeft: 0,
  },
  hobbyItem: {
    marginBottom: "6px",
  }
};

export default UserDetail;
