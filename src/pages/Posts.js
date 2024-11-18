import React, { useState } from 'react';
import { Button, Modal, TextField, Card, CardContent, Typography, IconButton, Avatar } from '@mui/material';
import { Add, ThumbUp, Share } from '@mui/icons-material';

const samplePosts = [
  {
    id: 1,
    content: "Hello World! This is my first post.",
    likes: 10,
    comments: [
      { userName: "Alice", userImage: "https://via.placeholder.com/40", text: "Nice post!" },
      { userName: "Bob", userImage: "https://via.placeholder.com/40", text: "Welcome!" }
    ],
    author: "John Doe",
    imageUrl: "https://via.placeholder.com/300"
  },
  {
    id: 2,
    content: "React is awesome!",
    likes: 25,
    comments: [
      { userName: "Charlie", userImage: "https://via.placeholder.com/40", text: "Absolutely agree!" },
      { userName: "Diana", userImage: "https://via.placeholder.com/40", text: "It's great!" }
    ],
    author: "Jane Smith",
    imageUrl: null
  }
];

const Posts = () => {
  const [posts, setPosts] = useState(samplePosts);
  const [isModalOpen, setModalOpen] = useState(false);
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostImage, setNewPostImage] = useState(null);

  const handleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleComment = (id, comment) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  const handleAddPost = () => {
    const newPost = {
      id: posts.length + 1,
      content: newPostContent,
      likes: 0,
      comments: [],
      author: "Moi",  // Remplacez par le nom de l'utilisateur connecté
      imageUrl: newPostImage
    };
    setPosts([newPost, ...posts]);
    setNewPostContent("");
    setNewPostImage(null);
    setModalOpen(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewPostImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Fonction pour partager un post sur le profil de l'utilisateur
  const handleShare = (id) => {
    const postToShare = posts.find(post => post.id === id);
    if (postToShare) {
      const sharedPost = {
        ...postToShare,
        id: posts.length + 1,
        author: "Moi",  // Remplacez par le nom de l'utilisateur connecté
      };
      setPosts([sharedPost, ...posts]);
      alert('La publication a été partagée sur votre profil!');
    }
  };

  return (
    <div style={{
      background: "linear-gradient(to bottom, #e0f7fa, #ffffff)",
      padding: "20px",
      minHeight: "100vh",
    }}>
      <h1 style={{ textAlign: 'center' }}>Posts Feed</h1>

      {/* Bouton flottant pour créer un post */}
      <Button
        variant="contained"
        color="primary"
        startIcon={<Add />}
        onClick={() => setModalOpen(true)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
        }}
      >
        Ajouter un Post
      </Button>

      {/* Modal pour créer un post */}
      <Modal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Card style={{ width: '500px', padding: '20px' }}>
          <h2>Nouveau Post</h2>
          <TextField
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            placeholder="Écrivez quelque chose..."
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ marginTop: '10px' }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddPost}
            style={{ marginTop: '10px' }}
          >
            Publier
          </Button>
        </Card>
      </Modal>

      {/* Liste des posts */}
      <div style={{ marginTop: '20px' }}>
        {posts.map((post) => (
          <Card key={post.id} style={{ marginBottom: '20px' }}>
            <CardContent>
              <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                {post.author}
              </Typography>
              <Typography variant="body1" style={{ margin: '10px 0' }}>
                {post.content}
              </Typography>
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt="Post"
                  style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', marginBottom: '10px' }}
                />
              )}
              <IconButton onClick={() => handleLike(post.id)}>
                <ThumbUp color="primary" /> {post.likes}
              </IconButton>
              <IconButton onClick={() => handleShare(post.id)}>
                <Share color="secondary" /> Partager
              </IconButton>
              <div>
                <h3>Commentaires:</h3>
                {post.comments.map((comment, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                    <Avatar src={comment.userImage} alt={comment.userName} style={{ marginRight: '10px' }} />
                    <div>
                      <Typography variant="subtitle2">{comment.userName}</Typography>
                      <Typography variant="body2">{comment.text}</Typography>
                    </div>
                  </div>
                ))}
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Ajouter un commentaire"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.target.value.trim() !== '') {
                      const newComment = {
                        userName: 'Utilisateur',  // Remplacez par le nom de l'utilisateur actuel
                        userImage: 'https://via.placeholder.com/40',  // Remplacez par l'URL de l'image de l'utilisateur actuel
                        text: e.target.value,
                      };
                      handleComment(post.id, newComment);
                      e.target.value = '';
                    }
                  }}
                  style={{ marginTop: '10px' }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Posts;
