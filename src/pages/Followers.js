import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, Avatar, IconButton } from '@mui/material';
import { PersonAdd, PersonRemove } from '@mui/icons-material';

// Données fictives pour les amis actuels et suggestions
const initialFriends = [
  { id: 1, name: 'Alice', imageUrl: 'https://via.placeholder.com/40' },
  { id: 2, name: 'Bob', imageUrl: 'https://via.placeholder.com/40' },
];

const suggestionsList = [
  { id: 3, name: 'Charlie', imageUrl: 'https://via.placeholder.com/40' },
  { id: 4, name: 'Diana', imageUrl: 'https://via.placeholder.com/40' },
  { id: 5, name: 'Eve', imageUrl: 'https://via.placeholder.com/40' },
];

const Followers = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [suggestions, setSuggestions] = useState(suggestionsList);

  // Fonction pour suivre un utilisateur
  const handleFollow = (user) => {
    setFriends([...friends, user]);
    setSuggestions(suggestions.filter((suggestion) => suggestion.id !== user.id));
  };

  // Fonction pour unfollow un utilisateur
  const handleUnfollow = (user) => {
    setFriends(friends.filter((friend) => friend.id !== user.id));
    setSuggestions([...suggestions, user]);
  };

  return (
    <div style={{ padding: '20px', background: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center' }}>Mes Amis et Suggestions</h1>
      
      {/* Liste des amis actuels */}
      <div style={{ marginBottom: '30px' }}>
        <h2>Mes Amis</h2>
        {friends.length > 0 ? (
          friends.map((friend) => (
            <Card key={friend.id} style={{ marginBottom: '10px' }}>
              <CardContent style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src={friend.imageUrl} alt={friend.name} style={{ marginRight: '10px' }} />
                <Typography variant="h6" style={{ flexGrow: 1 }}>{friend.name}</Typography>
                <IconButton onClick={() => handleUnfollow(friend)} color="secondary">
                  <PersonRemove />
                </IconButton>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="body1">Vous n'avez pas encore d'amis.</Typography>
        )}
      </div>
      
      {/* Liste des suggestions */}
      <div>
        <h2>Suggestions d'utilisateurs à suivre</h2>
        {suggestions.length > 0 ? (
          suggestions.map((suggestion) => (
            <Card key={suggestion.id} style={{ marginBottom: '10px' }}>
              <CardContent style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src={suggestion.imageUrl} alt={suggestion.name} style={{ marginRight: '10px' }} />
                <Typography variant="h6" style={{ flexGrow: 1 }}>{suggestion.name}</Typography>
                <IconButton onClick={() => handleFollow(suggestion)} color="primary">
                  <PersonAdd />
                </IconButton>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="body1">Aucune suggestion pour le moment.</Typography>
        )}
      </div>
    </div>
  );
};

export default Followers;
