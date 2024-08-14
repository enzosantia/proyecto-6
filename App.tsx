import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/pages/form';

import Pan2 from './src/pages/paj2';

export default function App() {
  const Stack = createStackNavigator();  

  function MyStack() {
    return (
      <Stack.Navigator>
        
        <Stack.Screen name="Logueo" component={Login} />
        <Stack.Screen name="Pantallaprincipal" component={Pan2} />

      </Stack.Navigator>
    );
  };
    return(
      <NavigationContainer>
      <MyStack/>
      </NavigationContainer>
    );
};