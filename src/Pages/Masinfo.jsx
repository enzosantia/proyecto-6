// Importación de módulos necesarios desde React y React Native
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native"; // Componentes esenciales para la interfaz de usuario.

const Masinfo = () => {
  return (
    // agrega un scroll
    <ScrollView style={styles.container}>
      
      
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Sobre el Proyecto</Text>
      </View>

      
      <View style={styles.contentContainer}>
        
        
        <Text style={styles.sectionHeader}>Motivación del Proyecto</Text>
        <Text style={styles.sectionText}>
          Este proyecto surge de la necesidad de abordar los crecientes problemas
          de vandalismo y emergencias urbanas, ofreciendo una solución tecnológica
          rápida y eficiente. La inseguridad en las calles ha generado una
          creciente demanda de sistemas que puedan actuar de manera inmediata
          ante situaciones de emergencia. Nuestra aplicación busca ser un puente
          entre el usuario en peligro y una respuesta rápida mediante el despliegue
          de drones para asistencia.
        </Text>


        <Text style={styles.sectionHeader}>Objetivo Principal</Text>
        <Text style={styles.sectionText}>
          La aplicación tiene como objetivo brindar una herramienta sencilla e
          intuitiva que permita a los ciudadanos solicitar ayuda con solo presionar
          un botón. A través de la tecnología GPS, el sistema localiza al usuario y
          despliega un dron de auxilio que puede brindar vigilancia, grabar la
          escena o incluso servir como un elemento disuasorio para actividades
          delictivas.
        </Text>

        
        <Text style={styles.sectionHeader}>Fecha de creacion:</Text>
        <Text style={styles.sectionText}>Marzo 2024</Text>

        
        <Text style={styles.sectionHeader}>Nombre de los Creadores y Desarrolladores</Text>
        <Text style={styles.sectionText}>
          {"\n"}- Santiago Nuñez 6°2
          {"\n"}- Leonidas Herrera 6°2
          {"\n"}- Nehemias Altamirano 6°2
          {"\n"}- Nicolas Elgueta 6°2
          {"\n"}- Joako Troncoso 6°2
        </Text>

    
        <Text style={styles.sectionHeader}>Impacto Esperado</Text>
        <Text style={styles.sectionText}>
          Se espera que esta solución tecnológica reduzca el tiempo de respuesta
          ante emergencias y contribuya a la prevención del vandalismo. Además,
          fomenta un mayor sentido de seguridad en la comunidad al introducir una
          herramienta innovadora al servicio de la ciudadanía.
        </Text>

        <Text style={styles.sectionHeader}>Visión a Futuro</Text>
        <Text style={styles.sectionText}>
          A largo plazo, aspiramos a expandir el sistema para incluir funciones
          avanzadas como inteligencia artificial para detección de comportamiento
          sospechoso, drones automatizados y colaboración directa con fuerzas de
          seguridad locales. Esto permitirá una cobertura más amplia y una
          integración eficiente en los sistemas de seguridad urbana.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo el espacio disponible.
    backgroundColor: "#f8f9fa", 
    padding: 10, 
  },
    // Estilo para el contenedor del encabezado
  headerContainer: {
    backgroundColor: "#4a90e2", 
    padding: 20, 
    borderRadius: 10,
    marginBottom: 15, 
    alignItems: "center", 
  },
 // Estilo para el texto del encabezado
  headerText: {
    fontSize: 24, 
    fontWeight: "bold", // Texto en negrita.
    color: "#ffffff", 
    textAlign: "center", 
  },
  // Estilo para el contenedor del contenido
  contentContainer: {
    padding: 10, 
    backgroundColor: "#ffffff", 
    borderRadius: 10, 
    elevation: 2, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 4, 
  },
  // Estilo para los encabezados de las secciones
  sectionHeader: {
    fontSize: 20, 
    fontWeight: "bold", 
    color: "#333",
    marginBottom: 10, 
    marginTop: 15, 
  },
  // Estilo para el texto de las secciones
  sectionText: {
    fontSize: 16,
    lineHeight: 24, 
    color: "#555", 
    textAlign: "justify", 
  },
});

export default Masinfo; // Exporta el componente 
