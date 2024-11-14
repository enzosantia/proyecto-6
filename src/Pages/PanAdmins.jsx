import React from "react";
import { View, StyleSheet } from "react-native";
import { useRoute } from '@react-navigation/native'; 

import { Encab2 } from "../Components/EncabezadoAdmins";
import { Piee } from "../Components/Piee";
import MapaAdmins from "../Components/MapaAdmis";

export default function Pan2() {
  const route = useRoute(); 
  const { ubicacionAuxilio } = route.params || {}; 

  return (
    <View style={styles.container}>
      <Encab2 />
      <MapaAdmins ubicacionUsuario={ubicacionAuxilio} /> 
      <Piee />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    flex: 1,
    resizeMode: 'contain', 
  },
});