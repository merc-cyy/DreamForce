import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';

const App = () => {
  const [posts, setPosts] = useState([
    { title: 'Front End Developer Needed', shortDesc: 'We’re building a next-generation AI analytics dashboard and need a front-end developer to help with the interface', longDesc: 'Our startup is developing a cutting-edge AI analytics platform to help businesses visualize their data. We’re looking for a front-end developer with experience in React.js, TailwindCSS, and responsive design. You’ll be working on crafting dynamic data visualizations, user-friendly navigation, and responsive interfaces to enhance the overall user experience. Familiarity with RESTful APIs and data-driven interfaces is a plus.' },
    { title: 'Actors for Indie Film', shortDesc: 'Casting Call for Independent Short Film.', longDesc: 'Our indie film studio is producing a short film that explores modern urban life, relationships, and self-identity. We are casting for two main roles: a female lead in her late 20s and a male lead in his early 30s. Filming will take place over 3 weekends in [City], and we are looking for passionate actors who can bring depth and authenticity to their performances. Prior acting experience is preferred but not mandatory.' },
    { title: 'Backend Developer for B2B SaaS Platform', shortDesc: 'Seeking a backend developer to join our team to help build and maintain a B2B SaaS platform', longDesc: 'We are developing a B2B SaaS platform to manage client workflows and data efficiently. Our platform is built using Node.js with a MongoDB database, and we’re looking for a backend developer with experience in designing robust APIs, integrating third-party services, and optimizing database performance.' }
  ]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]); // Add the new post to the beginning of the posts array
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/create" element={<CreatePost addPost={addPost} />} />
      </Routes>
    </Router>
  );
};

export default App;
