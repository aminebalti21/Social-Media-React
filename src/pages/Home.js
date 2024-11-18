import React from 'react';
import { Grid, Paper, Typography, Button, Avatar, Divider, TextField } from '@mui/material';

const Home = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        overflowY: 'scroll',
        backgroundColor: '#f4f4f4',
        padding: '20px',
      }}
    >
      <Grid container spacing={3}>
        {/* Barre latérale gauche */}
        <Grid item xs={12} sm={4} md={3}>
          <Paper
            style={{
              padding: '20px',
              backgroundColor: '#ffffff',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Avatar
              alt="User Profile"
              src="/path/to/profile-picture.jpg"
              style={{
                width: '100px',
                height: '100px',
                margin: '0 auto',
                marginBottom: '10px',
              }}
            />
            <Typography variant="h6" align="center">
              Balti Mohamed Amine
            </Typography>
            <Typography variant="body2" align="center" color="textSecondary">
              A étudié à TEK-UP
            </Typography>
            <Divider style={{ margin: '20px 0' }} />
            <Typography variant="body2" align="center">
              Relations : <b>11</b>
            </Typography>
            <Button variant="outlined" fullWidth style={{ marginTop: '10px' }}>
              Développez votre réseau
            </Button>
          </Paper>
        </Grid>

        {/* Contenu principal (Feed) */}
        <Grid item xs={12} sm={8} md={6}>
          <Paper
            style={{
              padding: '20px',
              backgroundColor: '#ffffff',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              marginBottom: '20px',
            }}
          >
            <TextField
              fullWidth
              placeholder="Commencer un post"
              variant="outlined"
              style={{ marginBottom: '10px' }}
            />
            <Button variant="contained" color="primary" fullWidth>
              Publier
            </Button>
          </Paper>
          
          {/* Exemple de posts */}
          <Paper
            style={{
              padding: '20px',
              backgroundColor: '#ffffff',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              marginBottom: '20px',
            }}
          >
            <Typography variant="subtitle1">
              Tayssir SAIDI trouve ceci instructif
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Bouraoui CHEBILI - HR consultant & Project Manager
            </Typography>
            <Divider style={{ margin: '10px 0' }} />
            <Typography variant="body1">
              كيفاش يجب يشوف recruiter Cv ؟
            </Typography>
          </Paper>
        </Grid>

        {/* Barre latérale droite */}
        <Grid item xs={12} sm={4} md={3}>
          <Paper
            style={{
              padding: '20px',
              backgroundColor: '#ffffff',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography variant="h6" style={{ marginBottom: '20px' }}>
              Ajoutez à votre fil d’actualité
            </Typography>
            {/* Exemple de suggestions */}
            <div style={{ marginBottom: '15px' }}>
              <Typography variant="body2">Sofrecom Tunisie</Typography>
              <Button variant="outlined" fullWidth>
                + Suivre
              </Button>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <Typography variant="body2">Oumaima ..</Typography>
              <Button variant="outlined" fullWidth>
                + Suivre
              </Button>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <Typography variant="body2">Ati Rihab</Typography>
              <Button variant="outlined" fullWidth>
                + Suivre
              </Button>
            </div>
            <Button variant="outlined" fullWidth style={{ marginTop: '10px' }}>
              Voir toutes les suggestions
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
