// Importación de módulos necesarios
import React, { useState } from "react"; // Importa React y el hook useState para manejar estados locales.
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native"; 

// Importación de Firebase 
import appFirebase from '../../Credenciales';
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Funciones para interactuar con la bd

// Inicializa la base de datos Firestore utilizando la configuración de Firebase
const BaseD = getFirestore(appFirebase);


const Quejas = () => {
  // Declaración de estados locales para manejar los datos del formulario
  //almacena el texto 
  const [queja, setQueja] = useState(""); 
  const [nombre, setNombre] = useState(""); 

  // Función para enviar la queja a la base de datos
  const enviarQueja = async () => {
    // ve si los dos campos estan completos
    if (!queja.trim() || !nombre.trim()) {
      Alert.alert("Error", "Por favor, completa todos los campos."); // error
      return; // si faltan datos se detiene el envio
    }

    try {
      // Agrega un nuevo documento a la colección "Quejas" en Firestore
      await addDoc(collection(BaseD, "Quejas"), {
        nombre, // Guarda el nombre ingresado por el usuario
        queja, // Guarda el texto de la queja
        fecha: new Date().toISOString(), 
      });

      // Si el proceso es exitoso, muestra un mensaje de confirmación
      Alert.alert("Éxito", "Tu queja ha sido enviada.");
      setQueja(""); // Reinicia el campo de la queja
      setNombre(""); // Reinicia el campo del nombre
    } catch (error) {
      Alert.alert("Error", "Hubo un problema al enviar la queja.");
      console.error("Error al guardar la queja:", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Título del formulario */}
      <Text style={styles.title}>Formulario de Quejas</Text>

      {/* Campo de entrada para el nombre */}
      <TextInput
        style={styles.input}
        placeholder="Tu nombre" // Texto de marcador de posición
        value={nombre} // Asocia el estado 'nombre' con este campo
        onChangeText={setNombre} // Actualiza el estado 'nombre' cuando el usuario escribe
      />

      {/* Campo de entrada para la queja */}
      <TextInput
        style={[styles.input, styles.textArea]} // Combina estilos para este campo
        placeholder="Escribe tu queja aquí..." // Texto de marcador de posición
        value={queja} // Asocia el estado 'queja' con este campo.
        onChangeText={setQueja} // Actualiza el estado 'queja' cuando el usuario escribe
        multiline 
        numberOfLines={4} 
      />

      {/* Botón para enviar la queja */}
      <Button title="Enviar Queja" onPress={enviarQueja} />
    </View>
  );
};

// Estilos 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20, 
    backgroundColor: "#f8f8f8", 
  },
  title: {
    fontSize: 20, 
    fontWeight: "bold", 
    marginBottom: 20, 
    textAlign: "center", 
  },
  input: {
    borderWidth: 1, 
    borderColor: "#ccc", 
    borderRadius: 5, 
    padding: 10, 
    marginBottom: 15, 
    backgroundColor: "#fff", 
  },
  textArea: {
    height: 100, 
    textAlignVertical: "top", 
  },
});

export default Quejas; // Exporta el componente 
