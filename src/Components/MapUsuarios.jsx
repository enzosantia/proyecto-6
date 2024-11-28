// Importa las dependencias de React necesarias
import React from 'react'; 
import { View, Text } from 'react-native';

// Importa componentes de la biblioteca Leaflet para trabajar con mapas interactivos
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// Importa estilos necesarios para que Leaflet funcione correctamente
import 'leaflet/dist/leaflet.css';

// Importa la biblioteca Leaflet para personalizar los íconos de los marcadores
import L from 'leaflet';

// Configuración personalizada para los íconos de los marcadores en el mapa
const newicon = new L.icon({
  iconUrl: require("../../assets/marker.png"), // Ruta de la imagen del marcador
  iconSize: [30, 30], // Tamaño del icono personalizado
});

// Componente funcional que muestra un mapa interactivo con una ubicacion específica
export const Mapa = ({ ubicacion }) => {
  // Verifica si la ubicación aún no está disponible
  if (!ubicacion) {
    return (
      // Muestra un mensaje mientras se carga la ubicacion
      <View style={{ flex: 1 }}>
        <Text>Cargando ubicación...</Text>
      </View>
    );
  }

  // Si la ubicación está disponible, renderiza el mapa
  return (
    <View style={{ flex: 1 }}>
      {/* Contenedor principal del mapa */}
      <MapContainer 
        center={[ubicacion.latitude, ubicacion.longitude]} // Centro del mapa basado en la ubicación proporcionada
        zoom={13} // Nivel de zoom inicial del mapa
        style={{ height: '100%' }} // Altura del mapa para que ocupe todo el espacio disponible
      >
        {/* Capa del mapa que usa OpenStreetMap como fuente de datos */}
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // URL del proveedor de mapas
        />
        {/* Marcador que indica la ubicación actual del usuario */}
        <Marker 
          icon={newicon} // Ícono personalizado definido anteriormente
          position={[ubicacion.latitude, ubicacion.longitude]} // Posición del marcador
        >
          {/* Ventana emergente que muestra un mensaje sobre el marcador */}
          <Popup>Ubicación Actual</Popup>
        </Marker>
      </MapContainer>
    </View>
  );
};
