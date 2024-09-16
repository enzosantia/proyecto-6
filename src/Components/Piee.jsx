import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Piee = () => {
  return (
    <View style={styles.pie}>
      <View style={styles.mencion}>
        <Text style={styles.titulo}>Codigo de ayuda</Text>
        <View style={styles.cajatext}>
          <Text style={styles.texto}>Codigo</Text>
          
        </View>
      </View>
      <View style={styles.cajaim}>
        <Text style={styles.imagenes}>Datos Personas</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pie: {
    backgroundColor: '#333',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  mencion: {
    flex: 1,
  },
  titulo: {
    color: '#fff',
  },
  cajatext: {
    flex: 1,
  },
  texto: {
    color: '#fff',
  },
  cajaim: {
    flexDirection: 'row',
  },
  imagenes: {
    color: '#fff',
    margin: 2,
  },
});