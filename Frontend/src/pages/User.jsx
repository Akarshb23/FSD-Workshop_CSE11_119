import React from 'react';
import { useNavigate } from 'react-router-dom';

function User() {
  const navigate = useNavigate();

  // Handle removing the auth token and sending the user away
  const handleLogout = () => {
    // 1. Clear out the verification data token from memory
    localStorage.removeItem('userToken');
    
    // 2. Bounce the user right back to the login screen
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.avatarSection}>
          <div style={styles.avatar}>👤</div>
        </div>
        
        <h2 style={styles.title}>User Dashboard</h2>
        <p style={styles.subtitle}>Welcome back to your private account area.</p>

        <div style={styles.infoBox}>
          <p style={styles.infoText}>
            <strong>Status:</strong> <span style={styles.badge}>Authenticated</span>
          </p>
          <p style={styles.infoText}>
            <strong>Access Level:</strong> Standard User
          </p>
        </div>

        <button onClick={handleLogout} style={styles.button}>
          Log Out Securely
        </button>
      </div>
    </div>
  );
}

// Layout styling matching the login/register theme perfectly
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f6f8',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    width: '100%',
    maxWidth: '450px',
    padding: '2.5rem',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  avatarSection: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  avatar: {
    fontSize: '3rem',
    backgroundColor: '#e9ecef',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.75rem',
    color: '#333',
  },
  subtitle: {
    margin: '0 0 2rem 0',
    color: '#666',
    fontSize: '0.95rem',
  },
  infoBox: {
    backgroundColor: '#f8f9fa',
    padding: '1rem',
    borderRadius: '6px',
    textAlign: 'left',
    marginBottom: '2rem',
    border: '1px solid #e9ecef',
  },
  infoText: {
    margin: '0.5rem 0',
    fontSize: '0.9rem',
    color: '#495057',
  },
  badge: {
    color: '#28a745',
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#dc3545', // Danger red color for logging out
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
};

export default User;
