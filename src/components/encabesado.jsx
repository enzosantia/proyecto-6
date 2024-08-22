import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export const Encab = () => {
  return (
    <View style={styles.cab}>

      <View style={styles.botonContenedor}>

        <TouchableOpacity style={styles.boton} >
          <Text style={styles.textBoton}>AUXILIO</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  cab: {
    backgroundColor: '#333',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  boton: {
    backgroundColor: '#525FE1',
    borderRadius: 30,
    paddingVertical: 20,
    width: 150,
    marginTop: 20,
  },
  textBoton: {
    textAlign: 'center',
  },
});
