import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = ({ selectedProfile }) => {
  const mapStyles = { height: '400px', width: '50%' };
  const defaultCenter = {
    lat: selectedProfile.coordinates.lat,
    lng: selectedProfile.coordinates.lng,
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
