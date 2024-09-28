import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import PostList from '../components/PostList';
import { useNavigate } from 'react-router-dom';

const Home = ({ posts }) => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <Navbar onCreate={() => navigate('/create')} />
      <div style={styles.body}>
        <Sidebar />
        <PostList posts={posts} />
       
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  body: {
    display: 'flex',
    flex: 1,
  },
};

export default Home;
