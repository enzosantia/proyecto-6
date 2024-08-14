import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Piee = () => {
  return (
    <View style={styles.pie}>
      <View style={styles.mencion} >
      <Text style={styles.titulo}>CREADORES</Text>
        <View style={styles.text}>
        <Text>nombre</Text>
        <Text>mombre</Text>
        </View>
      </View>
      <View style={styles.imagenes}>
        <Text>imagen</Text>
        <Text>imagen</Text>
        <Text>imagen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pie: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    display: 'flex',
  },
  mencion: {
    
  },
  titulo: {

  },
  text: {
    
  },
  imagenes: {
    alignItems: 'flex-end',
  },
});
