import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Encab2 = () => {

  const navigation = useNavigation();
  
    const regAdmin = () => {
      navigation.navigate('RegAdmin');
    };

    // inputs de inicio
  return (
    <View style={styles.cab}>
      <View>
      <TouchableOpacity style={styles.boton} onPress={regAdmin}>
            <Text style={styles.textBoton}>Registrarse</Text>
          </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity style={styles.boton} >
          <Text style={styles.textBoton}>Eliminar Administrador</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

//estilados

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