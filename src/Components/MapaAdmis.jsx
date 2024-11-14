import React from 'react';
import { View } from 'react-native';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapaAdmins = ({ ubicacionUsuario }) => {
  const ubicacionDefault = {
    latitude: -38.95161,
    longitude: -68.0591,
  };
  
  return (
    <View style={{ flex: 1 }}>
      <MapContainer
        center={ubicacionUsuario ? [ubicacionUsuario.latitude, ubicacionUsuario.longitude] : [ubicacionDefault.latitude, ubicacionDefault.longitude]}
        zoom={13}
        style={{ height: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {ubicacionUsuario && (
          <Marker position={[ubicacionUsuario.latitude, ubicacionUsuario.longitude]}>
            <Popup>Ubicación de Auxilio</Popup>
          </Marker>
        )}
      </MapContainer>
    </View>
  );
};

export default MapaAdmins;
