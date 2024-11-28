import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Ayuda () {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Cómo usar nuestra aplicación de Seguridad En La Ciudad</Text>
      <Text style={styles.description}>
        Nuestra aplicación está diseñada para ayudarte a estar más seguro en situaciones de peligro. Sigue estos pasos para utilizarla:
      </Text>

      <View style={styles.section}>
        <Text style={styles.title}>1. Registro</Text>
        <Text style={styles.text}>• Inicia la Aplicación.</Text>
        <Text style={styles.text}>• Regístrate con tu correo electrónico y contraseña.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>2. Funciones Principales</Text>
        <Text style={styles.subtitle}>Botón de Pánico</Text>
        <Text style={styles.text}>
          • En caso de peligro, presiona el botón de pánico en la pantalla principal.
        </Text>
        <Text style={styles.text}>
          • Esto enviará automáticamente una alerta a la Comisaría de policía más cercana con tu ubicación en tiempo real.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>3. Consejos de Seguridad</Text>
        <Text style={styles.text}>
          • Consulta la sección de consejos para saber cómo actuar en diferentes situaciones de peligro.
        </Text>
        <Text style={styles.text}>
          • Asegúrate de tener tu ubicación activada para que las autoridades puedan encontrarte con más exactitud.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>4. Mantén tu App Actualizada</Text>
        <Text style={styles.text}>
          • Para garantizar un mejor servicio, asegúrate de tener la última versión instalada.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>5. Cómo Contactar Soporte</Text>
        <Text style={styles.text}>
          • Si tienes dudas o problemas, accede a la opción “Ayuda” desde el menú y comunícate con nuestro equipo.
        </Text>
        <Text style={styles.text}>
          • Recuerda: Esta aplicación es una herramienta para mejorar tu seguridad, pero siempre es importante estar alerta y tomar precauciones.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'justify',
    color: '#555',
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#007BFF',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#555',
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
    color: '#555',
  },
});
