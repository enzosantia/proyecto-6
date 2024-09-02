import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';

import appFirebase from '../../Credenciales';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(appFirebase);

const imagen = { uri: 'https://i.pinimg.com/736x/a4/6e/fd/a46efd6651e00b47106de378a467f320.jpg' };


export default function Login(props) {
  
  //constante de navegacion
  const reg =() => {
  props.navigation.navigate('Registro');
  }

  //variables de estado
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //funcion asincrona
  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);   
      alert('iniciando', 'Accediendo...');
      
      if (email === 'hola@gmail.com') {
        props.navigation.navigate('Pantalla2'); 
      }else{
        props.navigation.navigate('Pantallaprincipal');
      }

    } catch (error) {
      console.error(error);
      alert('Error','invalido');
    } 
      
  };

  return (
    <BackgroundImage source={imagen} style={styles.img}>
    <View style={styles.papa}>
      
        <View style={styles.cuerpo}>

          <View style={styles.caja}>
            <TextInput placeholder='correo@gmail.com' style={{ paddingHorizontal: 15 }} onChangeText={(text) => setEmail(text)} />
          </View>

          <View style={styles.caja}>
            <TextInput placeholder='contraseña' secureTextEntry={true} style={{ paddingHorizontal: 15 }} onChangeText={(text) => setPassword(text)} />
          </View>

          <View style={styles.botonContenedor}>

            <TouchableOpacity style={styles.boton} onPress={login}>
              <Text style={styles.textBoton}>Inciar secion</Text>
            </TouchableOpacity>

          </View>
        </View>

        <TouchableOpacity onPress={reg}>
          <Text style={styles.textBoton}>Registrarse</Text>
        </TouchableOpacity>

    </View>
    </BackgroundImage>
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
  img: {
    flex: 1,
    resizeMode: 'center',
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
  },
});