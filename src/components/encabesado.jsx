import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export const Encab = () => {
  return (
    <View style={styles.cab}>
      
      <Text style={styles.logo}> LOGO </Text>
      <Text style={styles.nombre}>nombre de la APP</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cab: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  logo: {
    color: '#fff',
    width: 50, 
    height: 50,
  },
  nombre: {
    color: '#fff',
  },
});
