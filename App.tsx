import "react-native-gesture-handler";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./src/Pages/Ingreso";
import Pan2 from "./src/Pages/Pant1";
import Registro from "./src/Components/Registro";
  
export default function App() {
  const Stack = createStackNavigator();
  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Logueo" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Pantallaprincipal" component={Pan2} />
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

