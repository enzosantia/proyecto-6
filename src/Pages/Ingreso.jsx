//se importan componentes de react y react native
import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';

//se importa react navigation
import { useNavigation } from '@react-navigation/native';

import { comprobacion } from '../Script/VerificacionIngreso';

//se importan componentes de firebase
import appFirebase from '../../Credenciales';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
//se inicializa una autenticacion de la info de firebase
const auth = getAuth(appFirebase);

//se importa una imagen
const imagen = { uri: '../assets/leotut.png' };

// Importar SweetAlert2
import Swal from 'sweetalert2';

export default function Login() {
  
  //constante de navegacion
  const navigation = useNavigation();
  const reg = () => {
    navigation.navigate('Registro');
  }

  //variables de estado que guardan informacion
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrors] = useState({});

  //funcion para recuperar contraseña
  const handlePasswordReset = async () => {
    if (!email) {
      Swal.fire("Error", "Por favor ingresa tu correo electrónico.", "error");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      Swal.fire("Éxito", "Se ha enviado un correo para restablecer la contraseña.", "success");
    } catch (error) {
      Swal.fire("Error", error.message || "Hubo un problema. Intenta de nuevo.", "error");
    }
  }

  //funcion asincrona
  //validacion de inicio de sesion
  const login = async () => {
    setErrors({}); //se restablece el seteo de errores
    try {
      //se inicia sesion bajo una promesa
      const userCredential = await signInWithEmailAndPassword(auth, email, password);   
      Swal.fire('Iniciando', 'Accediendo...', 'info');
      //se llama a la funcion de comprobacion enviando la constante userCredential y la credencial unser
      await comprobacion(userCredential.user, navigation);
    } catch (error) {
      //casos de error
      setErrors({
        email: !email ? "El correo electrónico es obligatorio" : null,
        password: !password ? "La contraseña es obligatoria" : null,
        general: "El correo o la contraseña es incorrecta",
      });
      Swal.fire("Error", error.message || "El correo o la contraseña es incorrecta", "error");
    } 
  };

  // construccion del form
  return (
    <BackgroundImage source={imagen} style={styles.img}>
      <View style={styles.papa}>
        <View style={styles.cuerpo}>
          <View style={styles.caja}>
            <TextInput 
              placeholder='correo@gmail.com' 
              style={{ paddingHorizontal: 15 }} 
              onChangeText={(text) => setEmail(text)} 
            />
          </View>
          {error.email ? (
            <Text style={styles.errorText}>{error.email}</Text>
          ) : null}

          <View style={styles.caja}>
            <TextInput 
              placeholder='contraseña' 
              secureTextEntry={true} 
              style={{ paddingHorizontal: 15 }} 
              onChangeText={(text) => setPassword(text)} 
            />
          </View>
          {error.password ? (
            <Text style={styles.errorText}>{error.password}</Text>
          ) : null}
          
          {error.general ? (
            <Text style={styles.errorText}>{error.general}</Text>
          ) : null}

          <View style={styles.botonContenedor}>
            <TouchableOpacity style={styles.boton} onPress={login}>
              <Text style={styles.textBoton}>Iniciar sesión</Text>
            </TouchableOpacity> 
            <TouchableOpacity onPress={reg}>
              <Text style={styles.textBoton}>Registrarse</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
  style={styles.botonReset}
  onPress={() => navigation.navigate('ForgotPassword')} // Navegación
>
  <Text style={styles.resetText}>Recuperar contraseña</Text>
</TouchableOpacity>

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
    height: '70%',
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
    borderRadius: 20,
    marginVertical: 35,
  },
  botonContenedor: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textBoton: {
    textAlign: 'center',
    backgroundColor: '#008B8B',
    borderRadius: 15,
    paddingVertical: 15,
    width: 150,
    marginTop: 15,
    alignItems: 'center',
  },
  img: {
    flex: 1,
    resizeMode: 'center',
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  botonReset: {
    alignSelf: 'center',
    marginTop: 10,
    paddingVertical: 5,
  },
  resetText: {
    color: '#007AFF',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

