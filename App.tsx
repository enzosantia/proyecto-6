import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import MyStack from "./src/Routes/MyStack";

export default function App() {

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}