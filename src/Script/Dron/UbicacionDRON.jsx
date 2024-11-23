import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios'; // Biblioteca para realizar solicitudes HTTP

// Componente principal que maneja la interacción con el dron
const UbicacionDRON = () => {

  // Variables de estado
  const [status, setStatus] = useState(null); // Estado para almacenar el estado de la conexión del dron
  const [position, setPosition] = useState(null); // Estado para almacenar la posición actual del dron

  // Función para conectar al dron
  const connectToDrone = async () => {
    try {
      // Solicitud al endpoint para conectar al dron
      const response = await axios.get('http://localhost:5000/connect');
      setStatus(response.data.status); // Actualiza el estado con la respuesta del servidor
      Alert.alert('Dron conectado'); // Indicando que se conectó
    } catch (error) {
      console.error(error); 
      Alert.alert('Error al conectar al dron'); 
    }
  };

  // Función para obtener la posición del dron
  const getPosition = async () => {
    try {
      // Solicitud al endpoint para obtener la posición del dron
      const response = await axios.get('http://localhost:5000/get_position');
      setPosition(response.data.position); // Actualiza el estado con la posición recibida
      Alert.alert('Posición obtenida', JSON.stringify(response.data.position)); // Muestra la posición en una alerta
    } catch (error) {
      console.error(error); 
      Alert.alert('Error al obtener la posición'); 
    }
  };

  // Función para mover el dron
  const moveDrone = async () => {
    try {
      // Solicitud POST al endpoint para mover el dron con los parámetros especificados
      const response = await axios.post('http://localhost:5000/move_drone', {
        roll: 10, // Movimiento lateral 
        pitch: 50, // Movimiento hacia adelante
        yaw: 5, // Rotación 
        vertical_movement: 2, // Movimiento vertical 
        duration: 100, // Duración del movimiento en segundos
      });
      Alert.alert('Movimiento exitoso', response.data.message); // Indicando que el dron se movió correctamente
    } catch (error) {
      console.error(error);
      Alert.alert('Error al mover el dron'); 
    }
  };

  // Función para desconectar el dron
  const disconnectDrone = async () => {
    try {
      // Solicitud al endpoint para desconectar el dron
      const response = await axios.get('http://localhost:5000/disconnect');
      setStatus(response.data.status); // Actualiza el estado con la respuesta del servidor
      Alert.alert('Dron desconectado'); // Indicando que el dron se desconectó
    } catch (error) {
      console.error(error); 
      Alert.alert('Error al desconectar el dron'); 
    }
  };

  return (
    <View style={styles.container}>
      {/* Botones para interactuar con el dron */}
      <Button title="Conectar al Dron" onPress={connectToDrone} />
      <Button title="Obtener Posición" onPress={getPosition} />
      <Button title="Mover el Dron" onPress={moveDrone} />
      <Button title="Desconectar Dron" onPress={disconnectDrone} />

      {/* Muestra el estado de la conexión */}
      <Text style={styles.statusText}>Estado: {status}</Text>

      {/* Muestra la posición del dron si está disponible */}
      <Text style={styles.statusText}>
        Posición: {position ? JSON.stringify(position) : 'No disponible'}
      </Text>
    </View>
  );
};

// Estilos para el componente
const styles = StyleSheet.create({
  container: {
    padding: 20, 
  },
  statusText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default UbicacionDRON;
