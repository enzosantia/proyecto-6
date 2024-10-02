//constantes importadas de react native y react base
import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';

//inportando conponentes de navgacion
import { useNavigation } from '@react-navigation/native';

//se inportan componentes de firebase
import appFirebase from '../../Credenciales';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

//se inicializa firebase
const firestore = getFirestore(appFirebase)
//se inicializada una autenticacion de la info de firebase
const auth = getAuth(appFirebase);

//funcion que se expportara como conponente dinal al APP
export default function RegistroAdmins() {

  //constante de navegacion entre pantallas
  const navigation = useNavigation();

  //variables de estado que guardan informacion
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrors] = useState({});

  // validacion de formato de password
  const RegularPassword = /^(?=.*\d)(?=.*[a-zA-Z])[A-Za-z\d]{6,}$/;

  //funcion asincrona de logueo
  const login = async () => {

    try {

      //espera al creado del usuario, almacena informacion corespondiente en variables y ademas balida informacion de los mismos
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userId = user.uid;
      
      //setea la informacion de los usuarios validandolos como admins en la base de datos en la coleccion (Admins)
      await setDoc(doc(firestore, "Admins" , userId), {
        email: email,
        admin: true,
      });

      //alertas y navegaciones si se cumplen las condiciones previas
      alert('Cuenta creada');
      navigation.navigate('Pantalla2'); 

      // caso de errores
    } catch (error) {

      //mensaje de error en la consola
      console.error('Error al crear usuario:', error);

      //se envia informacion a la bariable de estado de error
      setErrors({
        email: !email ? "El correo electrónico es obligatorio" : null,
        password: !password ? "La contraseña es obligatoria" : !RegularPassword.test(password) ? "La contraseña debe tener 6 caracteres, sin caracteres epeciales" : null,
      });
    
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

//estilados

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
