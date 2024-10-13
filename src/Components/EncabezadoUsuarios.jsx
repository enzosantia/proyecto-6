import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

//constrccion del encabezado de pagina
export const Encab = () => {
  return (
    <View style={styles.cab}>
      <Text style={styles.logo}>Perfil</Text> 
      <Text style={styles.nom}>Ajustes</Text>
    </View>
  );
};

//estilados
const styles = StyleSheet.create({
  cab: {
    flex: 0.2,
    flexDirection: 'row',
  },
  logo: {
    
    flex: 1, 
    fontSize: 20, 
  },
  nom: {
    marginLeft: 'auto', 
  },
});