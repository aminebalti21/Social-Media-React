import React, { useState } from 'react';
import { useUser } from '../context/UserContext'; // Assure-toi du bon chemin
import { Button, TextField, Typography, Container, Paper, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom'; // Pour le bouton Sign Up

const Login = () => {
  const { login } = useUser(); // Utilise useUser pour accéder au contexte
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simule un appel API pour vérifier les identifiants
    if (email === '' || password === '') {
      setError('Please fill in all fields');
    } else {
      login({ name: 'User', email });
      // Rediriger vers la page de profil
      window.location.href = '/profile';
    }
  };

  return (
    <div
      style={{
        height: '100vh', // Remplir toute la hauteur de l'écran
        backgroundImage: 'linear-gradient(to bottom, #00c6ff, #0072ff)', // Joli dégradé
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={5}
          style={{
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: 'white',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="h5" align="center" gutterBottom>
            Login
          </Typography>
          {error && <Typography color="error" align="center">{error}</Typography>}
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {/* Email Field */}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                  required
                />
              </Grid>

              {/* Password Field */}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Grid>

              {/* Login Button */}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{ marginTop: '20px' }}
                >
                  Login
                </Button>
              </Grid>
            </Grid>

            {/* Sign Up Link */}
            <Box mt={2} textAlign="center">
              <Typography variant="body2">
                Don't have an account?{' '}
                <Link to="/signup" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
