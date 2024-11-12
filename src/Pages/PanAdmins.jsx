//constantes importadas de react native y react base
import React from "react";
import { View, StyleSheet, Image } from "react-native";

//importacion de componentes externos
import { Encab2 } from "../Components/EncabezadoAdmins";
import { Piee } from "../Components/Piee";
import MapaAdmins from "../Components/EncabezadoAdmins";

//funcion a exportar con el contenido de la pantalla 2
export default function Pan2() {
  return (
    <View style={styles.container}>
      <Encab2 />
      <MapaAdmins/>
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