import React from 'react';
import { View, Text } from 'react-native'; // Agregar `Text` aquí
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Mapa = ({ ubicacion }) => {
  if (!ubicacion) {
    return (
      <View style={{ flex: 1 }}>
        <Text>Cargando ubicación...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <MapContainer center={[ubicacion.latitude, ubicacion.longitude]} zoom={13} style={{ height: '100%' }}>
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        />
        <Marker position={[ubicacion.latitude, ubicacion.longitude]} />
      </MapContainer>
    </View>
  );
};

export default Mapa;
