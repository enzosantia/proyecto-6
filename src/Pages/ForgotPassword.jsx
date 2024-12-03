import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import appFirebase from '../../Credenciales';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const auth = getAuth(appFirebase);

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [timer, setTimer] = useState(0);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handlePasswordReset = async () => {
    if (!email) {
      setError("Por favor ingresa tu correo electrónico.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Se ha enviado un correo para restablecer la contraseña.");
      setError('');
    } catch (err) {
      setError(err.message || "Hubo un problema al enviar el correo.");
    }
  };

  const startTimer = () => {
    setTimer(60);
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) clearInterval(interval);
        return prev - 1;
      });
    }, 1000);
  };

  const handleResendCode = () => {
    handlePasswordReset();
    startTimer();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Contraseña</Text>
      <TextInput
        placeholder="correo@gmail.com"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      {message ? <Text style={styles.successText}>{message}</Text> : null}
      <View style={styles.buttonContainer}>
        {timer === 0 ? (
          <TouchableOpacity style={styles.button} onPress={handleResendCode}>
            <Text style={styles.buttonText}>Reenviar Código</Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.timerText}>Reenviar en {timer}s</Text>
        )}
        <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  successText: {
    color: 'green',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#008B8B',
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  timerText: {
    color: '#555',
    fontSize: 14,
    marginTop: 15,
  },
});
