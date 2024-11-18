// src/pages/AddPost.js
import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { user } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      alert("You must be logged in to post.");
      return;
    }

    const newPost = { title, content, user: user.name };
    // Ajouter la logique pour envoyer la publication à l'API ou l'ajouter localement
    console.log('New Post:', newPost);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Post Title" 
        required 
      />
      <textarea 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        placeholder="Post Content" 
        required 
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default AddPost;
