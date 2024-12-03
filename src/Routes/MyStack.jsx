import { createStackNavigator } from "@react-navigation/stack";
import { Image, Dimensions } from 'react-native';
import React, { useState } from 'react';

// Importación de pantallas
import Login from "../Pages/Ingreso";
import Registro from "../Pages/Registro";
import Pan1 from "../Pages/PantUsuarios";
import Pan2 from "../Pages/PanAdmins";
import Quejas from "../Pages/Quejaspan";
import Info from "../Pages/Masinfo";
import RegistroAdmins from "../Pages/RegistroAdmins";
import AdministratorsScreen from "../Pages/ModificacionAdmins";
import UbicacionDRON from '../Script/Dron/UbicacionDRON';
import Ayuda from "../Pages/Ayuda";
import ListarAdmis from "../Pages/ListarAdmin";
import ForgotPassword from '../Pages/ForgotPassword'; // Pantalla de recuperación de contraseña
import ListarUsuarios from "../Pages/ListarUsers";
import ActualizarUsers from "../Pages/ModificarUsers";

export default function MyStack() {
  // Estado para el modo oscuro
  const [darkMode, setDarkMode] = useState(false);

  // Obtiene las dimensiones de la pantalla
  const { width, height } = Dimensions.get('window');
  const ancho = width * 0.2;
  const alto = height * 0.1;

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      {/* Pantalla de Logueo */}
      <Stack.Screen name="Logueo" component={Login} options={{
        headerTitle: () => (
          <Image
            source={{ uri: '../assets/favicon.png' }}
            style={{ width: ancho, height: alto }}
            resizeMode="contain"
          />
        ),
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: darkMode ? '#1c1c1c' : '#cccccc40' },
      }} />

      {/* Pantalla de Registro */}
      <Stack.Screen name="Registro" component={Registro} options={{
        headerTitle: () => (
          <Image
            source={{ uri: '../assets/favicon.png' }}
            style={{ width: ancho, height: alto }}
            resizeMode="contain"
          />
        ),
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: darkMode ? '#1c1c1c' : '#cccccc40' },
      }} />

      {/* Pantalla de Recuperación de Contraseña */}
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{
        headerTitle: "Recuperar Contraseña",
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: darkMode ? '#1c1c1c' : '#cccccc40' },
      }} />

      {/* Pantalla Principal */}
      <Stack.Screen name="Pantallaprincipal" component={Pan1} options={{
        headerTitle: () => (
          <Image
            source={{ uri: '../assets/favicon.png' }}
            style={{ width: ancho, height: alto }}
            resizeMode="contain"
          />
        ),
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: darkMode ? '#1c1c1c' : '#cccccc40' },
        headerLeft: () => null,
      }} />

      {/* Pantalla Administradores */}
      <Stack.Screen name="Pantalla2" component={Pan2} options={{
        headerTitle: () => (
          <Image
            source={{ uri: '../assets/favicon.png' }}
            style={{ width: ancho, height: alto }}
            resizeMode="contain"
          />
        ),
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: darkMode ? '#1c1c1c' : '#cccccc40' },
        headerLeft: () => null,
      }} />

      {/* Registro de Administradores */}
      <Stack.Screen name="RegAdmin" component={RegistroAdmins} options={{
        headerTitle: () => (
          <Image
            source={{ uri: '../assets/favicon.png' }}
            style={{ width: ancho, height: alto }}
            resizeMode="contain"
          />
        ),
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: darkMode ? '#1c1c1c' : '#cccccc40' },
      }} />

      {/* Modificación de Administradores */}
      <Stack.Screen name="ModAdmins" component={AdministratorsScreen} options={{
        headerTitle: () => (
          <Image
            source={{ uri: '../assets/favicon.png' }}
            style={{ width: ancho, height: alto }}
            resizeMode="contain"
          />
        ),
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: darkMode ? '#1c1c1c' : '#cccccc40' },
      }} />

      {/* Ubicación del DRON */}
      <Stack.Screen name="UbicacionDRON" component={UbicacionDRON} />

      {/* Pantalla de Ayuda */}
      <Stack.Screen name="Ayuda" component={Ayuda} options={{
        headerTitle: "Ayuda",
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: darkMode ? '#1c1c1c' : '#cccccc40' },
      }} />

      {/* Listar Administradores */}
      <Stack.Screen name="ListarAdmin" component={ListarAdmis} options={{
        headerTitle: () => (
          <Image
            source={{ uri: '../assets/favicon.png' }}
            style={{ width: ancho, height: alto }}
            resizeMode="contain"
          />
        ),
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: darkMode ? '#1c1c1c' : '#cccccc40' },
      }} />

      {/* Pantalla de Quejas */}
      <Stack.Screen name="Quejas" component={Quejas} options={{
        headerTitle: () => (
          <Image
            source={{ uri: '../assets/favicon.png' }}
            style={{ width: ancho, height: alto }}
            resizeMode="contain"
          />
        ),
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: darkMode ? '#1c1c1c' : '#cccccc40' },
      }} />
      <Stack.Screen name="ListarUsuarios" component={ListarUsuarios} options={{
        headerTitle: () => (
          <Image
            source={{ uri: '../assets/favicon.png' }}
            style={{ width: ancho, height: alto }}
            resizeMode="contain"
          />
        ),
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: darkMode ? '#1c1c1c' : '#cccccc40' },
      }} />
      <Stack.Screen name="ActualizarUsers" component={ActualizarUsers} options={{
        headerTitle: () => (
          <Image
            source={{ uri: '../assets/favicon.png' }}
            style={{ width: ancho, height: alto }}
            resizeMode="contain"
          />
        ),
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: darkMode ? '#1c1c1c' : '#cccccc40' },
      }} />
      {/* Información */}
      <Stack.Screen name="Info" component={Info} options={{
        headerTitle: () => (
          <Image
            source={{ uri: '../assets/favicon.png' }}
            style={{ width: ancho, height: alto }}
            resizeMode="contain"
          />
        ),
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: darkMode ? '#1c1c1c' : '#cccccc40' },
      }} />
    </Stack.Navigator>
  );
}
