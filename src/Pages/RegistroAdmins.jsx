import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput, Alert } from 'react-native';

import appFirebase from '../../Credenciales';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(appFirebase);

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
const firestore = getFirestore(appFirebase)

export default function RegistroAdmins(props) {

  //variables de estado
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrors] = useState({});
  const [rol, setRol] = ('admin');

  const RegularPassword = /^(?=.*\d)(?=.*[a-zA-Z])[A-Za-z\d]{6,}$/;

  //funcion asincrona
  const login = async () => {

    try {
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;   

      const userId = user.uid;
      
      await setDoc(doc(firestore, "Admins", userId), {
        email: email,
        role: rol
      });
      props.navigation.navigate('Login');
      props.console.prom('cuenta creada')
      alert('Cuenta creada, redirigiendo a inicio')

    } catch (error) {

      console.error('Error al crear usuario:', error);

      /*setErrors({
        email: !email ? "El correo electrónico es obligatorio" : null,
        password: !password ? "La contraseña es obligatoria" : !RegularPassword.test(password) ? "La contraseña debe tener 6 caracteres, sin caracteres epeciales" : null,
      });*/
    
    } 
  };

  return (
    <View style={styles.papa}>
      <View style={styles.cuerpo}>
        
        <View style={styles.caja}>

          <TextInput placeholder='Correo@gmail.com' style={{ paddingHorizontal: 15 }} onChangeText={(text) => setEmail(text)}/>
            
        </View>

          {error.email ? (
            <Text style={styles.errorText}>{error.email}</Text>
          ) : null}

        <View style={styles.caja}>

          <TextInput placeholder='Contraseña' secureTextEntry={true} style={{ paddingHorizontal: 15 }} onChangeText={(text) => setPassword(text)}/>

        </View>

        {error.password ? (
          <Text style={styles.errorText}>{error.password}</Text>
        ) : null}

        <View style={styles.botonContenedor}>

          <TouchableOpacity style={styles.boton} onPress={login}>
            <Text style={styles.textBoton}>Registrarse</Text>
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
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});
