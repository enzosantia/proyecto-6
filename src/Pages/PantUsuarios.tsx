import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Se importan funcones de firebase
import { ref, set } from "firebase/database"
import { appFirebase } from '../../Credenciales';

// Se importan componentes
import { Encab } from "../Components/EncabezadoUsuarios";
import { Boton } from "../Components/BotonPiePan1";
import { Mapa } from "../Components/MapUsuarios";

// Guarda la ubicasion junto con los numeros
type Ubicacion = {
  latitude: number;
  longitude: number;
} | null;

const Pan1 = () => {
  
  // Documenten lo que hacen
  const [darkMode, setDarkMode] = useState(false);
  const [geolocalizacionTxt, setGeolocalizacionTxt] = useState('');

  const [ubicacion, setUbicacion] = useState<Ubicacion>(null); // Es una constante de estado que seta la ubicacion del usuario al precionar el boton

  // Documenten pipiipipippipiipipiipipipippi
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

  // Esta funcion es la que hace actual al boton de auxilio
  const handleAuxilio = async () => {
    if (ubicacion && ubicacion.latitude && ubicacion.longitude) {  // Verificar si la ubicación tiene valores válidos
      console.log("Ubicación enviada al mapa admin:", ubicacion);
      
      // Embia los datos a Firebase Realtime Database
      const locationRef = ref(appFirebase, 'ubicaciones/usuario'); // Ruta donde almacenarás la ubicación
      // Datos que almacena
      await set(locationRef, {
        latitude: ubicacion.latitude,
        longitude: ubicacion.longitude,
      });
      alert('Ubicación enviada con éxito.'); // Alerta de verificacion
    } else {
      console.error('No se pudo obtener la ubicación del usuario.');
      alert('Error al enviar la ubicación. Por favor, intente nuevamente.');
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