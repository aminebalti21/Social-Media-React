// src/components/ProfileCard.js
const ProfileCard = ({ profile }) => {
    return (
      <div className="border p-4 rounded-md shadow-md">
        <img src={profile.avatar} alt="Profile" className="w-24 h-24 rounded-full mx-auto" />
        <h2 className="text-center text-xl">{profile.name}</h2>
        <p className="text-center text-gray-600">{profile.bio}</p>
        <div className="mt-4">
          <h3 className="font-semibold">Skills</h3>
          <ul>
            {profile.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default ProfileCard;
  