import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate pour la redirection
import { Button, TextField, Card, CardContent, Typography, Link } from '@mui/material'; // Importer les composants Material-UI

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Utiliser useNavigate pour rediriger vers la page login

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup form submitted:', email, password);

    // Vous pouvez ajouter la logique d'enregistrement ici (exemple : appel API)

    // Après l'inscription, rediriger vers la page de connexion
    navigate('/login');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(to bottom, #e0f7fa, #ffffff)', // Arrière-plan dégradé
      }}
    >
      <Card style={{ width: '400px', padding: '20px' }}>
        <CardContent>
          <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '20px' }}>
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              style={{ marginTop: '20px' }}
            >
              Sign Up
            </Button>
          </form>
          <Typography variant="body2" style={{ textAlign: 'center', marginTop: '20px' }}>
            Already have an account?{' '}
            <Link href="/login" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
              Sign In
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
