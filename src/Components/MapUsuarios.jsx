import React from 'react';
import { View, Text } from 'react-native';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
// Config de los markers


const newicon = new L.icon({
  iconUrl: require("../../assets/marker.png"),
  iconSize: [30, 30]
});

export const Mapa = ({ ubicacion }) => {
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
        <Marker icon={newicon} position={[ubicacion.latitude, ubicacion.longitude]}>
        <Popup>Ubicacion Actual</Popup>
        </Marker>
      </MapContainer>
    </View>
  );
};
