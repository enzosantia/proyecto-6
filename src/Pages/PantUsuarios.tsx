import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";

// importación de componentes externos
import { Encab } from "../Components/EncabezadoUsuarios";
import { Boton } from "../Components/BotonPiePan1";
import Mapa from "../Components/Map";

// función que exporta por defecto la pantalla
const Pan1 = () => {
  const [darkMode, setDarkMode] = useState(false); // Estado para el modo oscuro

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode); // Alternar entre modo oscuro y modo claro
  };

  return (
    <View style={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]}>
      <Encab darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Mapa/>
      <Boton />
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
