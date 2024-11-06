import React, { useState, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import appFirebase from '../../Credenciales';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

//se inicializa firebase
const firestore = getFirestore(appFirebase)
//se inicializada una autenticacion de la info de firebase
const auth = getAuth(appFirebase);

const AdministratorsScreen = () => {
  const [administrators, setAdministrators] = useState([]);
  const [selectedAdministrator, setSelectedAdministrator] = useState(null);
}
// Función que se exportará como componente final al APP
export default function ModAdmins() {
  // Constante de navegación entre pantallas
  const navigation = useNavigation();

  // Variables de estado que guardan información
  const [email, setEmail] = useState('');
  const [error, setErrors] = useState({});

  // Función asincrónica para modificar el rol del administrador
  const modifyAdminStatus = async () => {
    try {
      // Busca el usuario en la base de datos
      const userRef = doc(firestore, "Usuarios", email); // Asumiendo que el email es el ID del documento
      const userDoc = await getDoc(userRef);

      // Verifica si el usuario existe
      if (userDoc.exists()) {
        // Actualiza el campo admin a false
        await updateDoc(userRef, {
          admin: false,
        });

        // Alerta y navegación si se cumplen las condiciones previas
        alert('Rol de administrador modificado a usuario');
        navigation.navigate('Pantalla2');
      } else {
        // Si el usuario no existe, muestra un error
        setErrors({ email: "El usuario no existe" });
      }
    } catch (error) {
      // Mensaje de error en la consola
      console.error('Error al modificar el usuario:', error);
      setErrors({ general: "Error al modificar el usuario" });
    }
  };

  // Construcción del formulario
  return (
    <View style={styles.papa}>
      <View style={styles.cuerpo}>
        <View style={styles.caja}>
          <TextInput 
            placeholder='Correo@gmail.com' 
            style={{ paddingHorizontal: 15 }} 
            onChangeText={(text) => setEmail(text)} 
          />
        </View>

        {error.email ? (
          <Text style={styles.errorText}>{error.email}</Text>
        ) : null}

        <View style={styles.botonContenedor}>
          <TouchableOpacity style={styles.boton} onPress={modifyAdminStatus}>
            <Text style={styles.textBoton}>Modificar Administrador a Usuario</Text>
          </TouchableOpacity>
        </View>

        {error.general ? (
          <Text style={styles.errorText}>{error.general}</Text>
        ) : null}
      </View>
    </View>
  );  
};

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
