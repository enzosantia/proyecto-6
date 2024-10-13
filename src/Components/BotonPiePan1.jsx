import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

// Construcción del botón
export const Boton = () => {
  return (
    <View style={styles.cab}>
      <View style={styles.botonContenedor}>
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.textBoton}>AUXILIO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

//obtiene las dimencions de la pantalla
const { width, height } = Dimensions.get('window');

// estilos
const styles = StyleSheet.create({
  cab: {
    alignItems: 'center',
    flex: 0.3,
    justifyContent: 'center',
  },
  botonContenedor: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  boton: {
    backgroundColor: '#525FE1',
    borderRadius: 30,
    paddingVertical: height * 0.03,
    width: width * 0.5, 
  },
  textBoton: {
    textAlign: 'center',
    fontSize: height * 0.025,
    color: '#fff',
  },
});
