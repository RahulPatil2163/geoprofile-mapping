import React, { useState } from 'react';
import ProfileList from './components/ProfileList';
import MapContainer from './components/MapContainer';
import './App.css';

const App = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const profiles = [
    {
      id: 1,
      name: 'John Doe',
      description: 'Web Developer',
      photo: 'https://via.placeholder.com/100',
      address: '1600 Amphitheatre Parkway, Mountain View, CA',
      coordinates: { lat: 37.42216, lng: -122.08427 },
    },
    {
      id: 2,
      name: 'Jane Smith',
      description: 'Graphic Designer',
      photo: 'https://via.placeholder.com/100',
      address: 'One Apple Park Way, Cupertino, CA',
      coordinates: { lat: 37.3349, lng: -122.00902 },
    },
    // Add more profiles here
  ];

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="App">
      <h1>Profile Mapping App</h1>
      <input 
        type="text"
        placeholder="Search profiles..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="content">
        <ProfileList profiles={filteredProfiles} onProfileSelect={handleProfileSelect} />
        {selectedProfile && <MapContainer selectedProfile={selectedProfile} />}
      </div>
    </div>
  );
};

export default App;
