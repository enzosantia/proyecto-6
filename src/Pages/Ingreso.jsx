import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { useNavigation } from '@react-navigation/native';

import appFirebase from '../../Credenciales';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const auth = getAuth(appFirebase);
const firestore = getFirestore();

const imagen = { uri: '../assets/leotut.png' };

export default function Login() {
  
  //constante de navegacion
  const navigation = useNavigation();
  const reg =() => {
  navigation.navigate('Registro');
  }

  //variables de estado
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrors] = useState({});

  //validacion de Usuario admin
  const comprobacion = async (user) => {
    try {
    const docRef = doc(firestore, `Admins/${user.uid}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      const isAdmin = userData.admin;

      if (isAdmin) {
        navigation.navigate('Pantalla2');
      }
    }else {
      navigation.navigate('Pantallaprincipal'); 
    }
    }catch (error) {
      console.error('error de usuario')
      //setErrors({ general: "Error al comprobar el usuario." });
    }
  }

  //funcion asincrona
  //validacion de inicio de sesion
  const login = async () => {
    setErrors({}) //se restablece el seteo de errores
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);   
      alert('iniciando', 'Accediendo...');
      await comprobacion(userCredential.user);
    } catch (error) {
      setErrors({
        email: !email ? "El correo electrónico es obligatorio" : null,
        password: !password ? "La contraseña es obligatoria" : null,
        general: "El correo o la contraseña es incorrecta",
      });
    } 
      
  };

  // construccion de form
  return (
    <BackgroundImage source={imagen} style={styles.img}>
    <View style={styles.papa}>
      
        <View style={styles.cuerpo}>

          <View style={styles.caja}>
            <TextInput placeholder='correo@gmail.com' style={{ paddingHorizontal: 15 }} onChangeText={(text) => setEmail(text)} />
          </View>
            {error.email ? (
              <Text style={styles.errorText}>{error.email}</Text>
            ) : null}

          <View style={styles.caja}>
            <TextInput placeholder='contraseña' secureTextEntry={true} style={{ paddingHorizontal: 15 }} onChangeText={(text) => setPassword(text)} />
          </View>
            {error.password ? (
               <Text style={styles.errorText}>{error.password}</Text>
            ) : null}
            
            {error.general ? (
              <Text style={styles.errorText}>{error.general}</Text>
            ) : null}

          <View style={styles.botonContenedor}>

            <TouchableOpacity style={styles.boton} onPress={login}>
              <Text style={styles.textBoton}>Iniciar sesion</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={reg}>
          <Text style={styles.textBoton}>Registrarse</Text>
        </TouchableOpacity>

          </View>
        </View>

        

    </View>
    </BackgroundImage>
  );
}

//estilados
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
    marginVertical:35,
   
    
  },
  botonContenedor: {
    alignItems: 'center',
    justifyContent:'space-between',
    flexDirection:'row',

  },
  textBoton: {
    textAlign: 'center',
    backgroundColor: '#008B8B',
    borderRadius: 15,
    paddingVertical: 15,
    width: 150,
    marginTop: 15,
    alignItems:'center',

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
});