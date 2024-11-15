import React from 'react';
import { View } from 'react-native';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapaAdmins = ({ ubicacionUsuario }) => {
  // Ubicación por defecto en la que centrar el mapa
  const ubicaciondef = {
    latitude: -38.95161,
    longitude: -68.0591,
  };

  // Verifica que los datos del usuario sean válidos
  const location = ubicacionUsuario || ubicaciondef;

  return (
    <View style={{ flex: 1 }}>
      <MapContainer
        center={[location.latitude, location.longitude]}
        zoom={13}
        style={{ height: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        
        {/* Mostrar el marcador solo si hay una ubicación válida */}
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
