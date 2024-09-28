import React from 'react';
import avatarImage from '../images/person.png';

const Sidebar = () => {
  // Mock user data (replace this with actual data from your authentication system)
  const user = {
    name: "Team Dream Force",
    avatar: avatarImage, // You can replace with your own avatar URL
  };

  return (
    <div style={styles.sidebar}>
      <div style={styles.profileSection}>
        <img src={user.avatar} alt="Profile" style={styles.avatar} />
        <h3 style={styles.username}>{user.name}</h3>
      </div>
      <h3>Filters</h3>
      <ul style={styles.filters}>
        <li>Technology</li>
        <li>Academic Research</li>
        <li>Arts & Culture</li>
        <li>Chi-tech Conferences</li>
        <li>Finance</li>
        <li>Sports</li>
      </ul>
    </div>
  );
};

// Inline styles for the sidebar and profile section
const styles = {
  sidebar: {
    width: '200px',
    padding: '20px',
    backgroundColor: '#f1f3f5',
    height: '100vh',
    boxShadow: '2px 0 4px rgba(0, 0, 0, 0.1)',
  },
  profileSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '30px',
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  username: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#6a1b9a',
    textAlign: 'center',
  },
  filters: {
    listStyleType: 'none',
    padding: '0',
  },
};

export default Sidebar;
