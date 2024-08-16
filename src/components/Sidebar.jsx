import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      {/* Bagian Logo di Paling Atas */}
      <div style={styles.logoSection}>
        <img 
          src="https://via.placeholder.com/50" 
          alt="Logo" 
          style={styles.logoImage}
        />
        <h1 style={styles.logoText}>Square</h1>
      </div>

      <h5>Menu</h5>
      <ul style={styles.menuList}>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/stock">Stock</Link></li>
        <li><Link to="/customers">Customer</Link></li>
        <li><Link to="/restaurant">Restaurant</Link></li>
        <li><Link to="/design">Design</Link></li>
        <li><Link to="/report">Report</Link></li>
        <li><Link to="/role-admin">Role & Admin</Link></li>
        <li><Link to="/setting">Setting</Link></li>
      </ul>
      <h5 style={styles.integrationTitle}>Integration</h5>
      <ul style={styles.integrationMenuList}>
        <li><Link to="/integration/stock">Stock</Link></li>
        <li><Link to="/integration/supply">Supply</Link></li>
      </ul>
      
      <div style={styles.adminSection}>
        <div style={styles.adminProfile}>
          <img 
            src="https://via.placeholder.com/50" 
            alt="Admin" 
            style={styles.adminPhoto}
          />
          <div style={styles.adminInfo}>
            <h4>John Doe</h4>
            <p>Food Quality Manager</p>
          </div>
        </div>
        <button style={styles.logoutButton}>Logout</button>
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '200px',
    height: '100%',
    background: '#f4f4f4',
    padding: '20px',
    boxSizing: 'border-box',
    position: 'fixed',
    left: '0',
    top: '0',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
    // marginBottom: '20px',
  },
  logoImage: {
    width: '50px',
    height: '50px',
    marginRight: '10px',
  },
  logoText: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  menuList: {
    listStyleType: 'none',
    padding: 0,
  },
  integrationTitle: {
    marginTop: '10px',
    fontWeight: 'bold',
  },
  integrationMenuList: {
    listStyleType: 'none',
    padding: 0,
  },
  adminSection: {
    marginTop: 'auto',
    // paddingTop: '10px',
    borderTop: '1px solid #ddd',
  },
  adminProfile: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  adminPhoto: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  adminInfo: {
    flex: 1,
    textAlign: 'left',
  },
  logoutButton: {
    width: '100%',
    padding: '8px 15px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Sidebar;
