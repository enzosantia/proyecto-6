import React from 'react';
import { View } from 'react-native';

// Se importa leaflet para el mapa
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';  // Importar los estilos de Leaflet

const Mapa = () => {
    //cordenadas de Neuquen  
    const ubicacion = {
        latitude: -38.95161, 
        longitude: -68.0591
    };

    return (
      <View style={{ flex: 1 }}>
        {/*Contenedor del mapa junto con sus estylos para acomodarlo dode se decea que se vicione */}
        <MapContainer center={[ubicacion.latitude, ubicacion.longitude]} zoom={13} style={{ height: '100%' }}>
        {/*permite que el mapa sea vicible*/}
          <TileLayer 
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
          />
          {/*Deja vicible un punto en el mapa*/}
          <Marker position={[ubicacion.latitude, ubicacion.longitude]}/>
        </MapContainer>
      </View>
    );
  };

export default Mapa;
