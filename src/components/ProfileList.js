import React from 'react';

const ProfileList = ({ profiles, onProfileSelect }) => {
  return (
    <div className="profile-list">
      {profiles.map((profile) => (
        <div key={profile.id} className="profile-card">
          <img src={profile.photo} alt={profile.name} />
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
          <button onClick={() => onProfileSelect(profile)}>Summary</button>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
