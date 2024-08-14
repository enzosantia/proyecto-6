import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pan2 from '../pages/paj2';

const Stack = createStackNavigator();

const rout = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="pan2" component={Pan2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default rout;
