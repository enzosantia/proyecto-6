//constantes importadas de react native y react base
import React from "react";
import { View, StyleSheet, Image } from "react-native";

//importacion de componentes externos
import { Encab2 } from "../Components/Encabezado2";
import { Piee } from "../Components/Piee";

//funcion a exportar con el contenido de la pantalla 2
export default function Pan2() {
  return (
    <View style={styles.container}>
      <Encab2 />
      <Image source={{ uri: '../assets/Lucas_uwu.png' }} style={styles.img} />
      <Piee />
    </View>
  );
};

//estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    flex: 1,
    resizeMode: 'contain', 
  },
});