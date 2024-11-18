import React, { useEffect } from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';  // Pour rediriger si nécessaire

const Profile = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);  // Ajouter ceci pour vérifier l'objet user
  }, [user]);

  if (!user) {
    navigate('/login');  // Rediriger vers la page de login si l'utilisateur n'est pas connecté
    return null;  // Ne rien afficher pendant la redirection
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex items-center mb-6">
        <img
          src={user.profilePicture || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mr-6"
        />
        <div>
          <h1 className="text-3xl font-semibold">{user.name}</h1>
          <p className="text-lg text-gray-600">{user.email}</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Bio</h2>
        <p className="text-lg text-gray-800">{user.bio || 'No bio available'}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Compétences Techniques</h2>
        <ul className="list-disc pl-5">
          {user.skills && user.skills.length > 0 ? (
            user.skills.map((skill, index) => (
              <li key={index} className="text-lg text-gray-800">{skill}</li>
            ))
          ) : (
            <li className="text-lg text-gray-800">No skills added</li>
          )}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Projets</h2>
        {user.projects && user.projects.length > 0 ? (
          user.projects.map((project, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
              <p className="text-lg text-gray-600">{project.description}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                  View Project
                </a>
              )}
            </div>
          ))
        ) : (
          <p className="text-lg text-gray-800">No projects listed</p>
        )}
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Liens</h2>
        <div className="flex space-x-4">
          {user.github && (
            <a href={user.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              GitHub
            </a>
          )}
          {user.linkedin && (
            <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              LinkedIn
            </a>
          )}
        </div>
      </div>

      <button
        onClick={logout}
        className="w-full py-2 mt-6 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600"
      >
        Log out
      </button>
    </div>
  );
};

export default Profile;
