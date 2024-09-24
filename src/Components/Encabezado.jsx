import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//constrccion del encabezado de pagina
export const Encab = () => {
  return (
    <View style={styles.cab}>
      <Text style={styles.logo}>Logo</Text> 
      <Text style={styles.nom}>Nombre</Text>
    </View>
  );
};

//estilados

const styles = StyleSheet.create({
  cab: {
    backgroundColor: '#333',
    flex: 0.2,
    flexDirection: 'row',
  },
  logo: {
    color: '#fff',
    flex: 1, 
    fontSize: 20, 
  },
  nom: {
    color: '#fff',
    marginLeft: 'auto', 
  },
});