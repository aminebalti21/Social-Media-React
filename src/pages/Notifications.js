import { useEffect, useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simuler l'ajout de notifications en temps réel
    setTimeout(() => {
      setNotifications((prev) => [...prev, 'New Like on your post!']);
    }, 5000);
  }, []);

  return (
    <div>
      <h3>Notifications</h3>
      <ul>
        {notifications.map((notif, index) => (
          <li key={index}>{notif}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
