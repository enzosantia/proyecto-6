import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Encab2 = () => {

  const navigation = useNavigation();

  const regAdmin = () => {
    navigation.navigate('RegAdmin');
  };

  const modAdmis = () => {
    navigation.navigate('ModAdmins');
  };

  return (
    <View style={styles.cab}>
      <TouchableOpacity style={styles.boton} onPress={regAdmin}>
        <Text style={styles.textBoton}>Registrarse</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.boton} onPress={modAdmis}>
        <Text style={styles.textBoton}>Modificar Administrador</Text>
      </TouchableOpacity>
    </View>
  );
};

//obtiene las dimencions de la pantalla
const { width, height } = Dimensions.get('window');

// Estilos
const styles = StyleSheet.create({
  cab: {
    backgroundColor: '#333',
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: width * 0.05, 
  },
  boton: {
    backgroundColor: '#525FE1',
    borderRadius: 30,
    paddingVertical: height * 0.02, 
    paddingHorizontal: width * 0.05, 
    width: width * 0.4, 
  },
  textBoton: {
    textAlign: 'center',
    color: '#fff',
    fontSize: height * 0.02, 
  },
});
