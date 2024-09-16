import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export const Encab2 = () => {
  return (
    <View style={styles.cab}>
      <View>
      <TouchableOpacity style={styles.boton} >
          <Text style={styles.textBoton}>Añadir Administrador</Text>
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity style={styles.boton} >
          <Text style={styles.textBoton}>Eliminar Adiministrador</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cab: {
    backgroundColor: '#333',
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',    
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
  boton: {
    backgroundColor: '#525FE1',
    borderRadius: 30,
    paddingVertical: 20,
    width: 150,
  },
  textBoton: {
    textAlign: 'center',
  },
});