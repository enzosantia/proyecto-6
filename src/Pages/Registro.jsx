//constantes importadas de react native y react base
import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';

//importamos react navigation
import { useNavigation } from '@react-navigation/native';

//se importan componentes de firebase
import appFirebase from '../../Credenciales';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

//se inicializada una autenticacion de la info de firebase
const auth = getAuth(appFirebase);

//importacion de imagen
const imagen = {uri: '../assets/leotut.png'};

export default function Registro() {

  //constante de navegacion
  const navigation = useNavigation();
  
  //variables de estado que guardan informacion
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrors] = useState({});

  // validacion de formato de password
  const RegularPassword = /^(?=.*\d)(?=.*[a-zA-Z])[A-Za-z\d]{6,}$/;

  //funcion asincrona
  const login = async () => {

    try {
      //se crea un usuario
      await createUserWithEmailAndPassword(auth, email, password);

      //alerta de usuario creado y se redirecciona
      alert('Cuenta creada');
      navigation.navigate('Logueo'); 

    } catch (error) {

      //mensajes de error
      setErrors({
        email: !email ? "El correo electrónico es obligatorio" : null,
        password: !password ? "La contraseña es obligatoria" : !RegularPassword.test(password) ? "La contraseña debe tener 6 caracteres, sin caracteres epeciales" : null,
      });
   
    } 
  };

  // construccion del form
  return (
    <BackgroundImage source={imagen} style={styles.img}>
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
    </BackgroundImage>

  );
}

//estilos
const styles = StyleSheet.create({
  papa: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cuerpo: {
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    width: '40%',
    height: '55%',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    opacity: 0.9,
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
  img: {
    flex: 1,
    resizeMode: 'center',
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    
  },
  textBoton: {
    textAlign: 'center',
  },
});


