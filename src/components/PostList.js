import React, { useState, useEffect } from 'react';

const PostList = ({ posts }) => {
  const [expandedPosts, setExpandedPosts] = useState([]);

  // Re-initialize the expandedPosts state when posts change
  useEffect(() => {
    setExpandedPosts(Array(posts.length).fill(false));
  }, [posts]);

  const togglePostExpansion = (index) => {
    const newExpandedPosts = [...expandedPosts];
    newExpandedPosts[index] = !newExpandedPosts[index];
    setExpandedPosts(newExpandedPosts);
  };

  return (
    <div style={styles.postList}>
      {posts.map((post, index) => (
        <div key={index} style={styles.post}>
          <div style={styles.postHeader}>
            <h3>{post.title}</h3>
            <button style={styles.toggleButton} onClick={() => togglePostExpansion(index)}>
              {expandedPosts[index] ? '▲' : '▼'}
            </button>
          </div>
          <p style={styles.goal}> Project Goal:</p>
          <p style={styles.goa}>{post.shortDesc}</p>
          {expandedPosts[index] && <p>{post.longDesc}</p>}
        </div>
      ))}
    </div>
  );
};

const styles = {
  postList: {
    flex: 1,
    padding: '20px',
  },
  goal:{
    color: '#6a1b9a'
  },
  post: {
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  postHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#6a1b9a'
  },
  toggleButton: {
    background: 'none',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    color: "#6a1b9a"
  },
};

export default PostList;
