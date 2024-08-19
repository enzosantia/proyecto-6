import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import registro from '../components/rejister';
import Login from "../pages/ingreso";

const Stack = createStackNavigator();

const Rout = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Logueo" component={Login} />
      <Stack.Screen name="Logueo" component={registro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Rout;
