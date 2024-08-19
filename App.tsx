import "react-native-gesture-handler";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./src/pages/ingreso";
import Pan2 from "./src/pages/pant1";
import Registro from "./src/components/rejister";

export default function App() {
  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Logueo" component={Login} />
        <Stack.Screen name="Pantallaprincipal" component={Pan2} />
        <Stack.Screen name="Registro" component={Registro} />
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
