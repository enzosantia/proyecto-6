import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { doc, updateDoc, getFirestore } from 'firebase/firestore';
import appFirebase from '../../Credenciales';

const BD = getFirestore(appFirebase); //Firestore

export default function ActualizarUser() {
  const [idUsuario, setIdUsuario] = useState('');
  const [nuevoEstado, setNuevoEstado] = useState('');

  const actualizarUser = async () => {
    if (idUsuario && nuevoEstado) {
      try {
        const usuarioRef = doc(BD, 'Usuarios', idUsuario);
        await updateDoc(usuarioRef, {
          estado: nuevoEstado,
        });
        Alert.alert('¡Éxito!', 'Usuario actualizado correctamente');
      } catch (error) {
        console.error('Error al actualizar el documento:', error);
        Alert.alert('Error', 'No se pudo actualizar el usuario');
      }
    } else {
      Alert.alert('Error', 'Por favor ingresa los datos completos');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="ID del Usuario"
        value={idUsuario}
        onChangeText={setIdUsuario}
      />
      <TextInput
        style={styles.input}
        placeholder="Nuevo Estado"
        value={nuevoEstado}
        onChangeText={setNuevoEstado}
      />
      <Button title="Actualizar Usuario" onPress={actualizarUsuario} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});
