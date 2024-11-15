import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';

// Se importan funciones de firebase
import { ref, onValue, remove } from "firebase/database"
import { appFirebase } from '../../Credenciales';

// Se importan componentes
import { Encab2 } from "../Components/EncabezadoAdmins";
import { Piee } from "../Components/Piee";
import MapaAdmins from "../Components/MapaAdmis";

export default function Pan2() {
  const [ubicacionUsuario, setUbicacionUsuario] = useState(null); // Variable de estado para la ubicación recibida

  useEffect(() => {
    // Establecer conexión con Firebase para recibir actualizaciones en tiempo real
    const locationRef = ref(appFirebase, 'ubicaciones/usuario'); // Ruta en Firebase para extraer la ubicación
    const extracto = onValue(locationRef, (snapshot) => { // Detener la extraccion en Firebase
      const data = snapshot.val();
      console.log("Ubicación recibida desde Firebase:", data); // Verifica en consola si llegan los datos
      // Verificacion de datos
      if (data) {
        setUbicacionUsuario({
          latitude: data.latitude,
          longitude: data.longitude,
        });
      }
    });

    return () => {
      extracto();
    };
  }, []); 

  // Función para limpiar las señales de auxilio de Firebase
  const limpiarSeñalesAuxilio = async () => {
    const locationRef = ref(appFirebase, 'ubicaciones'); // Limpiar todas las ubicaciones bajo la ruta ubicaciones

    try {
      await remove(locationRef); // Eliminar las ubicaciones de todos los usuarios
      console.log("Todas las señales de auxilio fueron eliminadas.");
      setUbicacionUsuario(null); // Limpiar el estado de la ubicación
    } catch (error) {
      console.error("Error al eliminar las señales de auxilio:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Encab2 />
      <MapaAdmins ubicacionUsuario={ubicacionUsuario} /> {/* Pasar la ubicación al mapa */}
      <Button title="Limpiar señales de auxilio" onPress={limpiarSeñalesAuxilio} /> {/* Botón para limpiar las señales */}
      <Piee />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
