import React, { useState } from 'react';

const CreatePost = ({ addPost }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      addPost({ content, id: Date.now(), comments: [], likes: 0 });
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a post..."
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default CreatePost;
