import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import appFirebase from '../../Credenciales';
import { getAuth, sendPasswordResetEmail, deleteUser, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

import Swal from 'sweetalert2';

// Inicializa Firestore y Auth usando las credenciales de Firebase
const firestore = getFirestore(appFirebase);
const auth = getAuth(appFirebase);

export default function ModAdmins() {
  // Navegación entre pantallas
  const navigation = useNavigation();

  // Estados para almacenar el correo electrónico del usuario y mensajes de error
  const [email, setEmail] = useState('');
  const [error, setErrors] = useState({});

  // Función para enviar un correo de restablecimiento de contraseña al usuario
  const resetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email); // Envía el correo de restablecimiento
      Swal.fire('Se ha enviado un correo para restablecer la contraseña');
    } catch (error) {
      console.error('Error al restablecer contraseña:', error);
      setErrors({ general: "Error al restablecer la contraseña" });
    }
  };

  // Función para reautenticar al usuario antes de eliminar su cuenta (requerido por Firebase)
  const reauthenticateUser = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        // Credenciales para reautenticar usando email y contraseña
        const credential = EmailAuthProvider.credential(user.email, 'CONTRASEÑA_DEL_USUARIO'); // Cambia 'CONTRASEÑA_DEL_USUARIO' por la contraseña actual
        await reauthenticateWithCredential(user, credential); // Reautentica al usuario
        return true;
      }
    } catch (error) {
      console.error("Error al reautenticar el usuario:", error);
      setErrors({ general: "Error al reautenticar el usuario" });
      return false; // Devuelve falso si la reautenticación falla
    }
  };

  // Función para eliminar la cuenta del usuario en Firebase
  const deleteAccount = async () => {
    try {
      const user = auth.currentUser;
      const isReauthenticated = await reauthenticateUser(); // Reautentica antes de eliminar

      if (isReauthenticated) {
        const userRef = doc(firestore, "Usuarios", email); // Referencia al documento del usuario en Firestore
        const userDoc = await getDoc(userRef); // Obtiene los datos del usuario

        if (userDoc.exists()) {
          await deleteUser(user); // Elimina al usuario de Firebase Auth
          await userRef.delete(); // Borra los datos del usuario en Firestore
          alert('Cuenta eliminada');
          navigation.navigate('Pantalla2'); // Navega a otra pantalla tras eliminar
        } else {
          setErrors({ email: "El usuario no existe en la base de datos" });
        }
      } else {
        setErrors({ general: "Necesitas iniciar sesión nuevamente para eliminar esta cuenta" });
      }
    } catch (error) {
      console.error('Error al borrar la cuenta:', error);
      setErrors({ general: "Error al borrar la cuenta" });
    }
  };

  // Función para inhabilitar al usuario en Firestore, cambiando el rol de "admin" a "false"
  const disableUser = async () => {
    try {
      const userRef = doc(firestore, "Usuarios", email); // Referencia al documento del usuario
      const userDoc = await getDoc(userRef); // Obtiene el documento del usuario

      if (userDoc.exists()) {
        await updateDoc(userRef, { admin: false }); // Cambia el campo `admin` a `false`
        alert('El usuario ha sido inhabilitado');
        navigation.navigate('Pantalla2'); // Navega a otra pantalla tras inhabilitar
      } else {
        setErrors({ email: "El usuario no existe" });
      }
    } catch (error) {
      console.error('Error al inhabilitar el usuario:', error);
      setErrors({ general: "Error al inhabilitar el usuario" });
    }
  };

  // Diseño de la interfaz de usuario
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Administrar Usuarios</Text>
        
        {/* Input para ingresar el correo electrónico */}
        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={24} color="#525FE1" />
          <TextInput 
            placeholder='Correo@example.com'
            style={styles.input}
            onChangeText={(text) => setEmail(text)} 
          />
        </View>

        {/* Mensaje de error si el correo no existe */}
        {error.email ? (
          <Text style={styles.errorText}>{error.email}</Text>
        ) : null}

        {/* Botón para restablecer contraseña */}
        <TouchableOpacity style={styles.button} onPress={resetPassword}>
          <Text style={styles.buttonText}>Restablecer Contraseña</Text>
        </TouchableOpacity>

        {/* Botón para borrar cuenta */}
        <TouchableOpacity style={styles.button} onPress={deleteAccount}>
          <Text style={styles.buttonText}>Borrar Cuenta</Text>
        </TouchableOpacity>

        {/* Botón para inhabilitar usuario */}
        <TouchableOpacity style={styles.button} onPress={disableUser}>
          <Text style={styles.buttonText}>Inhabilitar Usuario</Text>
        </TouchableOpacity>

        {/* Mensaje de error general */}
        {error.general ? (
          <Text style={styles.errorText}>{error.general}</Text>
        ) : null}
      </View>
    </View>
  );
}

// Estilos del componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '85%',
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#525FE1',
    borderRadius: 30,
    paddingVertical: 15,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});
