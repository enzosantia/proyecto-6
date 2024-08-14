import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native';

import appFirebase from '../../credenciales';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(appFirebase);

export default function Login(props)   
 {

    //variables de estado
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    //funcion asincrona
  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Initiating', 'Accessing...'); 
      props.navigation.navigate('Pantallaprincipal'); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.papa}>
      <View style={styles.cuerpo}>
        <View style={styles.caja}>
          <TextInput
            placeholder='correo@gmail.com'
            style={{ paddingHorizontal: 15 }}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.caja}>   

          <TextInput
            placeholder='Password'
            secureTextEntry={true}
            style={{ paddingHorizontal: 15 }}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <View style={styles.botonContenedor}>   

          <TouchableOpacity style={styles.boton} onPress={login}>
            <Text style={styles.textBoton}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  papa: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cuerpo: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '80%',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  caja: {
    paddingVertical: 20,
    backgroundColor: '#cccccc40',
    borderRadius: 30,
    marginVertical: 10,
  },
  botonContenedor: { 
    alignItems: 'center',
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
