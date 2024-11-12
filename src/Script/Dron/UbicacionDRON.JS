import React, { useState, useEffect } from 'react'; 
import { View, Text, Button } from 'react-native';
import Mapa from './Mapa';  // Importamos el componente del mapa

const { DroneModule } = NativeModules;

const UbicacionDRON = () => {
  const [status, setStatus] = useState('Desconectado');
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [isDroneOn, setIsDroneOn] = useState(false); // Estado para saber si el dron está encendido

  useEffect(() => {
    connectToDrone();
  }, []);

  const connectToDrone = async () => {
    try {
      const success = await DroneModule.connect('533198');
      if (success) {
        setStatus('Conectado al dron');
        setIsDroneOn(true); // El dron está encendido
        startTrackingPosition();
      } else {
        setStatus('No se pudo conectar al dron');
      }
    } catch (error) {
      setStatus('Error al conectar');
      console.error('Error de conexión:', error);
    }
  };

  const startTrackingPosition = () => {
    // Llamar a getPosition cada cierto intervalo (por ejemplo, cada 2 segundos)
    setInterval(async () => {
      try {
        const position = await DroneModule.getPosition();
        console.log('Ubicación del dron:', position);
        setPosition(position);  // Actualizamos las coordenadas del estado
      } catch (error) {
        console.error('Error al obtener la posición:', error);
      }
    }, 2000);  // Actualizar cada 2 segundos
  };

  const disconnectDrone = async () => {
    try {
      await DroneModule.disconnect();
      setStatus('Desconectado del dron');
      setIsDroneOn(false); // El dron se apaga
    } catch (error) {
      console.error('Error al desconectar:', error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Text>{status}</Text>
      <Button title="Desconectar" onPress={disconnectDrone} />
      {/* Mostrar el mapa solo si el dron está encendido */}
      {isDroneOn && <Mapa position={position} />}
    </View>
  );
};

export default UbicacionDRON;
