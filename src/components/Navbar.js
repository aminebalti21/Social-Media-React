import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { FaBell, FaUserCircle, FaSearch, FaHome, FaStream, FaPooStorm } from 'react-icons/fa'; // Ajout d'icônes supplémentaires
import { IoMdArrowDropdown } from 'react-icons/io';

import { GroupAdd, PostAdd, PostAddOutlined } from '@mui/icons-material';


const NavBar = () => {
  const { user, logout } = useUser();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'Nouvelle connexion à votre compte', read: false },
    { id: 2, text: 'Vous avez été suivi par John Doe', read: false },
    { id: 3, text: 'Commentaire sur votre publication', read: false },
  ]);

  const navigate = useNavigate();

  const unreadNotificationsCount = notifications.filter(n => !n.read).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
    setShowNotifications(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      {/* Logo ou Nom du Site */}
      <div className="text-white font-bold text-xl cursor-pointer" onClick={() => navigate('/Home')}>
        MyLinkedIn
      </div>

      {/* Zone de recherche */}
      <div className="relative text-gray-600">
        <input
          type="text"
          placeholder="Rechercher..."
          className="bg-gray-200 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
        />
        <FaSearch
          size={20}
          className="absolute right-0 top-0 mt-3 mr-4 cursor-pointer"
        />
      </div>

      {/* Icônes de Navigation */}
      <div className="flex items-center">
        {/* Icône de Home */}
        <div className="text-white mx-4 cursor-pointer" onClick={() => navigate('/home')}>
          <FaHome size={24} />
        </div>

        
        {/* Icône de followers */}
        <div className="text-white mx-4 cursor-pointer" onClick={() => navigate('/followers')}>
          <GroupAdd size={24} />
        </div>

        {/* Icône pour les Posts */}
        <div className="text-white mx-4 cursor-pointer" onClick={() => navigate('/posts')}>
          <PostAdd size={24} />
        </div>

        {/* Icône de Notification avec compteur */}
        <div className="relative mx-4">
          <FaBell
            size={24}
            className="text-white cursor-pointer"
            onClick={() => setShowNotifications(!showNotifications)}
          />
          {unreadNotificationsCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs px-2">
              {unreadNotificationsCount}
            </span>
          )}
          {/* Affichage des notifications */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg">
              <div className="p-2 border-b">
                <button
                  onClick={markAllAsRead}
                  className="text-blue-500 text-sm underline">
                  Marquer tout comme lu
                </button>
              </div>
              <ul>
                {notifications.map(notification => (
                  <li
                    key={notification.id}
                    className={`p-2 ${notification.read ? 'text-gray-500' : 'text-black'} hover:bg-gray-100`}>
                    {notification.text}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Image de profil avec menu dropdown */}
        <div className="relative">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            {/* Image de profil ou icône par défaut */}
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="User Profile"
                className="rounded-full w-8 h-8 object-cover"
              />
            ) : (
              <FaUserCircle size={32} className="text-white" />
            )}
            <span className="ml-2 text-white">{user?.name}</span>
            <IoMdArrowDropdown size={20} className="ml-1 text-white" />
          </div>

          {/* Menu déroulant pour options utilisateur */}
          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
              <ul>
                <li
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => navigate('/profile')}>
                  Consulter Profil
                </li>
                <li
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => navigate('/settings')}>
                  Paramètres
                </li>
                <li
                  className="p-2 hover:bg-gray-100 cursor-pointer text-red-500"
                  onClick={handleLogout}>
                  Déconnexion
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
