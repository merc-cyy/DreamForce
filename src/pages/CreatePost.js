import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [shortDesc, setShortDesc] = useState('');
  const [longDesc, setLongDesc] = useState('');
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState('');
  const navigate = useNavigate();

  // Function to add skill to the list
  const addSkill = (e) => {
    e.preventDefault();
    if (skillInput && !skills.includes(skillInput)) {
      setSkills([...skills, skillInput]);
      setSkillInput(''); // Clear the input after adding
    }
  };

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, shortDesc, longDesc, skills };
    addPost(newPost); // Add the new post to the list
    navigate('/'); // Navigate back to the home page
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create a New Project</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Project Goal</label>
          <input
            type="text"
            value={shortDesc}
            onChange={(e) => setShortDesc(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Description</label>
          <textarea
            value={longDesc}
            onChange={(e) => setLongDesc(e.target.value)}
            required
            style={styles.textarea}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Skills (add one by one)</label>
          <div style={styles.skillInputContainer}>
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              style={styles.skillInput}
            />
            <button onClick={addSkill} style={styles.addSkillButton}>Add Skill</button>
          </div>
          <div style={styles.skillTagContainer}>
            {skills.map((skill, index) => (
              <span key={index} style={styles.skillTag}>
                {skill}
              </span>
            ))}
          </div>
        </div>
        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    padding: '40px',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
  },
  heading: {
    textAlign: 'center',
    color: '#6a1b9a',
    marginBottom: '30px',
    fontSize: '24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: '8px',
    display: 'inline-block',
    color: '#4f4f4f',
  },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#f9f9f9',
    transition: 'border-color 0.3s ease',
  },
  textarea: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#f9f9f9',
    minHeight: '120px',
    transition: 'border-color 0.3s ease',
  },
  skillInputContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '10px',
  },
  skillInput: {
    flex: 1,
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    backgroundColor: '#f9f9f9',
  },
  addSkillButton: {
    padding: '10px 16px',
    backgroundColor: '#6a1b9a',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  skillTagContainer: {
    marginTop: '10px',
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  },
  skillTag: {
    backgroundColor: '#e0e0e0',
    padding: '5px 12px',
    borderRadius: '16px',
    fontSize: '14px',
    color: '#333',
  },
  submitButton: {
    padding: '12px',
    backgroundColor: '#6a1b9a',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  submitButtonHover: {
    backgroundColor: '#7b1fa2',
  },
};

export default CreatePost;
