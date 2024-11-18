import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    profilePicture: "https://via.placeholder.com/150",  // Image par défaut pour test
    bio: "Software developer with a passion for front-end technologies.",
    skills: ["JavaScript", "React", "Node.js", "CSS", "HTML"],
    projects: [
      {
        name: "Project One",
        description: "A description of project one.",
        link: "https://github.com/johndoe/project-one"
      },
      {
        name: "Project Two",
        description: "A description of project two."
      }
    ],
    github: "https://github.com/johndoe",
    linkedin: "https://www.linkedin.com/in/johndoe"
  });

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
