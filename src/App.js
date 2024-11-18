import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { UserProvider } from './context/UserContext'; // Importer UserProvider
import Home from './pages/Home';
import Profile from './pages/Profile';
import Posts from './pages/Posts';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Notifications from './pages/Notifications';
import Followers from './pages/Followers'; // Crée cette page
import Navbar from './components/Navbar'; // Importer le composant NavBar


// Fonction pour conditionner l'affichage de la navbar
const ConditionalNavbar = () => {
  const location = useLocation();

  // Masquer la navbar sur les pages de login et signup
  if (location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }

  return <Navbar />;
};

function App() {
  return (
    <UserProvider> {/* Envelopper tout l'app avec UserProvider */}
      <Router>
        <ConditionalNavbar /> {/* Ajouter la barre de navigation conditionnellement */}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/followers" element={<Followers />} /> {/* Ajoute cette route */}
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
