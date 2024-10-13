import "react-native-gesture-handler";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Image, Dimensions } from 'react-native';

import Login from "./src/Pages/Ingreso";
import Registro from "./src/Pages/Registro";
import Pan1 from "./src/Pages/PantUsuarios";
import Pan2 from "./src/Pages/PanAdmins"; 
import RegistroAdmins from "./src/Pages/RegistroAdmins";
import AdministratorsScreen from "./src/Pages/ModificacionAdmins";

export default function App() {

  //se establece una medida general para un cierto tipo de foto 
  const { width, height } = Dimensions.get('window');
  const ancho = width * 0.2; 
  const alto = height * 0.1;

  const Stack = createStackNavigator();
  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Logueo" component={Login} options={{
          headerTitle: () => (
            <Image
              source={{ uri: '../assets/favicon.png' }}
              style={{ width:ancho, height:alto  }}
              resizeMode="contain"
            />
          ),
          headerTitleAlign: 'center' , 
          headerStyle: { backgroundColor: '#cccccc40' },
        }}/>
        <Stack.Screen name="Registro" component={Registro} options={{
          headerTitle: () => (
            <Image
              source={{ uri: '../assets/favicon.png' }}
              style={{ width:ancho, height:alto  }}
              resizeMode="contain"
            />
          ),
          headerTitleAlign: 'center' , 
          headerStyle: { backgroundColor: '#cccccc40' },
        }}/>
        <Stack.Screen name="Pantallaprincipal" component={Pan1} options={{
          headerTitle: () => (
            <Image
              source={{ uri: '../assets/favicon.png' }}
              style={{ width:ancho, height:alto  }}
              resizeMode="contain"
            />
          ),
          headerTitleAlign: 'center' , 
          headerStyle: { backgroundColor: '#cccccc40' },
          headerLeft: () => null,
        }}/>
        <Stack.Screen name="Pantalla2" component={Pan2} options={{
          headerTitle: () => (
            <Image
              source={{ uri: '../assets/favicon.png' }}
              style={{ width:ancho, height:alto  }}
              resizeMode="contain"
            />
          ),
          headerTitleAlign: 'center' , 
          headerStyle: { backgroundColor: '#cccccc40' },
          headerLeft: () => null,
        }}/>
        <Stack.Screen name="RegAdmin" component={RegistroAdmins} />
        <Stack.Screen name="ModAdmins" component={AdministratorsScreen} />
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}