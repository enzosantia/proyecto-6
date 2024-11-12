import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Importación de componentes externos
import { Encab } from "../Components/EncabezadoUsuarios";
import { Boton } from "../Components/BotonPiePan1";
import Mapa from "../Components/Map";

// Definir el tipo de datos para la ubicación
type Ubicacion = {
  latitude: number;
  longitude: number;
} | null;

const Pan1 = () => {
  const [darkMode, setDarkMode] = useState(false); // Estado para el modo oscuro
  const [geolocalizacionTxt, setGeolocalizacionTxt] = useState(''); // Estado para la geolocalización
  const [ubicacion, setUbicacion] = useState<Ubicacion>(null); // Estado para la ubicación, inicializado como null

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode); // Alternar entre modo oscuro y modo claro
  };

  // Guardar geolocalización en AsyncStorage
  const datosGeo = async () => {
    try {
      await AsyncStorage.setItem('geolocalizacionTxt', geolocalizacionTxt);
    } catch (error) {
      console.log('Error al guardar geolocalización:', error);
    }
  };

  // Obtener geolocalización desde AsyncStorage
  const getDatosGeo = async () => {
    try {
      const savedLocation = await AsyncStorage.getItem('geolocalizacionTxt');
      if (savedLocation) {
        setGeolocalizacionTxt(savedLocation);
        console.log('Datos de geolocalización obtenidos:', savedLocation);
      }
    } catch (error) {
      console.log('Error al obtener geolocalización:', error);
    }
  };

  // Obtener la geolocalización del usuario
  const datoGeolocalizacion = () => {
    if (!navigator.geolocation) {
      setGeolocalizacionTxt('El navegador no es compatible con API Geolocation');
      datosGeo(); // Guardar de inmediato el mensaje de error en almacenamiento
    } else {
      navigator.geolocation.getCurrentPosition(
        // Éxito
        (position) => {
          const locationText = `Latitud: ${position.coords.latitude}, Longitud: ${position.coords.longitude}`;
          setGeolocalizacionTxt(locationText);
          setUbicacion({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          datosGeo(); // Guardar en almacenamiento después de obtener la posición
          console.log('Posición obtenida:', locationText);
        },
        // Error
        () => {
          setGeolocalizacionTxt('La geolocalización no se ha realizado');
          datosGeo(); // Guardar mensaje de error en almacenamiento
          console.log('Error de geolocalización:', geolocalizacionTxt);
        }
      );
    }
  };

  // Llamar a datoGeolocalizacion cuando el componente se monta
  useEffect(() => {
    datoGeolocalizacion();
    getDatosGeo();
  }, []);

  return (
    <View style={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]}>
      <Encab darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Mapa ubicacion={ubicacion} /> {/* Pasamos `ubicacion` como prop a `Mapa` */}
      <Boton />
      <Text style={{ color: darkMode ? '#ffffff' : '#000000' }}>{geolocalizacionTxt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  darkContainer: {
    backgroundColor: '#121212', // fondo oscuro
  },
  lightContainer: {
    backgroundColor: '#ffffff', // fondo claro
  },
  img: {
    flex: 1,
    resizeMode: 'contain',
  },
});

export default Pan1;
