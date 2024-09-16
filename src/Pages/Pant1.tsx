import React from "react";
import { View, StyleSheet, Image } from "react-native";

import { Encab } from "../Components/Encabezado";
import { Boton } from "../Components/BotonPiePan1";

export default function Pan1() {
  return (
    <View style={styles.container}>
      <Encab />
      <Image source={{ uri: '../assets/LOL.png' }} style={styles.img} />
      <Boton/>
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