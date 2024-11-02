//se importan componentes de react y react native
import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';

//se importa react navigation
import { useNavigation } from '@react-navigation/native';

//se importan componentes de firebase
import appFirebase from '../../Credenciales';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

//se inicializa firebase
const firestore = getFirestore(appFirebase)
//se inicializada una autenticacion de la info de firebase
const auth = getAuth(appFirebase);

//se inporta una imagen
const imagen = { uri: '../assets/leotut.png' };

export default function Login() {
  
  //constante de navegacion
  const navigation = useNavigation();
  const reg =() => {
  navigation.navigate('Registro');
  }

  //variables de estado que guardan informacion
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrors] = useState({});

  //funcion para recuperar contraseña
  const handlePasswordReset = async () => {
    if (!email) {
      Alert.alert("Error", "Por favor ingresa tu correo electrónico.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert("Éxito", "Se ha enviado un correo para restablecer la contraseña.");
    } catch (error) {
      Alert.alert("Error", error.message || "Hubo un problema. Intenta de nuevo.");
    }
  }

  //validacion de Usuario admin como funcion asyncrona
  const comprobacion = async (user) => {
    //se busca dentro del servidor la seccion Admins y se balida el user ID de la misma
    try {
    const docRef = doc(firestore, `Usuarios/${user.uid}`);
    //se realiza un get de la misma informacion como promesa
    const docSnap = await getDoc(docRef);

    //se valida si la informacion existe
    if (docSnap.exists()) {
      const userData = docSnap.data();
      const isAdmin = userData.admin;

      //si el usuario es admind true
      if (isAdmin) {
        navigation.navigate('Pantalla2');
      }
      //si el usuario no es admind true
    }else {
      navigation.navigate('Pantallaprincipal'); 
    }
    //caso de error
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
      //se inicia secion bajo una promesa
      const userCredential = await signInWithEmailAndPassword(auth, email, password);   
      alert('iniciando', 'Accediendo...');
      //se llama a la funcion de comprobacion enviando la constante userCredential y la credencial unser
      await comprobacion(userCredential.user);
    } catch (error) {
      
      //casos de error
      setErrors({
        email: !email ? "El correo electrónico es obligatorio" : null,
        password: !password ? "La contraseña es obligatoria" : null,
        general: "El correo o la contraseña es incorrecta",
      });
    } 
      
  };

  // construccion del form
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
          <TouchableOpacity style={styles.botonReset} onPress={handlePasswordReset}>
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