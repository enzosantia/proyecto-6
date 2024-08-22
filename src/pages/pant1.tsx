import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import { Encab } from "../components/Encabesado";
import { Piee } from "../components/Piee";

export default function Pan2() {
  return (
    <View style={styles.container}>
      <Encab />
      <Image source={{ uri: '../assets/LOL.png' }} style={styles.img} />
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