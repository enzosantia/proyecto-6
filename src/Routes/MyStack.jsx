import { createStackNavigator } from "@react-navigation/stack";

import { Image, Dimensions } from 'react-native';

import Login from "../Pages/Ingreso";
import Registro from "../Pages/Registro";
import Pan1 from "../Pages/PantUsuarios";
import Pan2 from "../Pages/PanAdmins"; 
import RegistroAdmins from "../Pages/RegistroAdmins";
import AdministratorsScreen from "../Pages/ModificacionAdmins";

export default function MyStack() {  
  //obtiene las dimencions de la pantalla
  const { width, height } = Dimensions.get('window');

  //establese dimenciones predefinidas paara esos componentes
  const ancho = width * 0.2; 
  const alto = height * 0.1;

  const Stack = createStackNavigator();
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
