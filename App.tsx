import "react-native-gesture-handler";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./src/Pages/Ingreso";
import Registro from "./src/Pages/Registro";
import Pan1 from "./src/Pages/Pant1";
import Pan2 from "./src/Pages/Pan2"; 
import RegistroAdmins from "./src/Pages/RegistroAdmins";

export default function App() {
  const Stack = createStackNavigator();
  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Logueo" component={Login} options={{
          
        }}/>
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Pantallaprincipal" component={Pan1} />
        <Stack.Screen name="Pantalla2" component={Pan2} />
        <Stack.Screen name="RegAdmin" component={RegistroAdmins} />
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}