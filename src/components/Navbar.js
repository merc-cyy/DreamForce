import React from 'react';

const Navbar = ({ onCreate }) => {
  return (
    <div style={styles.navbar}>
      <div style={styles.logo}>Dream Force</div>
      <input type="text" placeholder="Search projects..." style={styles.searchBar} />
      <button style={styles.createButton} onClick={onCreate}>Create a Project</button>
    </div>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px 30px',
    backgroundColor: '#6a1b9a',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5 )',
  },
  logo: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: 'white'
  },
  searchBar: {
    width: '500px',
    height: "12px",
    padding: '20px',
    borderRadius: '12px',
    border: '1px solid #ccc',
  },
  createButton: {
    padding: '12px 12px',
    backgroundColor: '#fff',
    color: 'black',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    fontSize: '18px'
  },
};

export default Navbar;
