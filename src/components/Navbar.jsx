import React from 'react';

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <h1 style={styles.title}>Customer</h1>
      <p style={styles.subtitle}>You can manage and organize your customers and other things here</p>
      <ul style={styles.navList}>
        <li style={styles.navItem}><a href="#" style={styles.navLink}>Customer</a></li>
        <li style={styles.navItem}><a href="#" style={styles.navLink}>Promo</a></li>
        <li style={styles.navItem}><a href="#" style={styles.navLink}>Voucher</a></li>
      </ul>
    </div>
  );
};

const styles = {
  navbar: {
    width: '100%',
    background: '#333',
    padding: '10px 20px',
    boxSizing: 'border-box',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    margin: 0,
    paddingBottom: '5px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  subtitle: {
    margin: 0,
    paddingBottom: '15px',
    fontSize: '14px',
    color: '#ccc',
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    marginLeft: 'auto',
  },
  navItem: {
    marginRight: '20px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Navbar;
