import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import { Encab } from "../Components/Encabezado";
import { Piee } from "../Components/Piee";

export default function Pan2() {
  return (
    <View style={styles.container}>
      <Encab />
      <Image source={{ uri: '../assets/Lucas_uwu.png' }} style={styles.img} />
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