import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation

import { Encab } from "../Components/EncabezadoUsuarios";
import { Boton } from "../Components/BotonPiePan1";
import Mapa from "../Components/MapUsuarios";

type Ubicacion = {
  latitude: number;
  longitude: number;
} | null;

const Pan1 = () => {
  const navigation = useNavigation(); // Inicializar useNavigation
  const [darkMode, setDarkMode] = useState(false);
  const [geolocalizacionTxt, setGeolocalizacionTxt] = useState('');
  const [ubicacion, setUbicacion] = useState<Ubicacion>(null);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const datosGeo = async () => {
    try {
      await AsyncStorage.setItem('geolocalizacionTxt', geolocalizacionTxt);
    } catch (error) {
      console.log('Error al guardar geolocalización:', error);
    }
  };

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

  const datoGeolocalizacion = () => {
    if (!navigator.geolocation) {
      setGeolocalizacionTxt('El navegador no es compatible con API Geolocation');
      datosGeo();
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const locationText = `Latitud: ${position.coords.latitude}, Longitud: ${position.coords.longitude}`;
          setGeolocalizacionTxt(locationText);
          setUbicacion({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          datosGeo();
          console.log('Posición obtenida:', locationText);
        },
        () => {
          setGeolocalizacionTxt('La geolocalización no se ha realizado');
          datosGeo();
          console.log('Error de geolocalización:', geolocalizacionTxt);
        }
      );
    }
  };

  useEffect(() => {
    datoGeolocalizacion();
    getDatosGeo();
  }, []);

  const handleAuxilio = () => {
    if (ubicacion) {
      console.log("Ubicación enviada al mapa admin:", ubicacion);
      // Navegar a la pantalla 2 y pasar la ubicación
      navigation.navigate('Pan2', { ubicacionAuxilio: ubicacion });
    }
  };

  return (
    <View style={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]}>
      <Encab darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Mapa ubicacion={ubicacion} />
      <Boton onPress={handleAuxilio} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  lightContainer: {
    backgroundColor: '#ffffff',
  },
});

export default Pan1;