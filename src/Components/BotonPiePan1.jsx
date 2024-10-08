import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// construccion del boton
export const Boton = () => {
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

//estilados
const styles = StyleSheet.create({
  cab: {
    backgroundColor: '#333',
    alignItems: 'center',
    flex: 0.3,
    justifyContent: 'center',
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
