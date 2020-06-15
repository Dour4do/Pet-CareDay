import React from 'react'

// Navigation Imports
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { Deslogar } from '../screens'

// Components
import DrawerButton from '../components/DrawerButton'

// Screen Stack
const Stack = createStackNavigator();

const DeslogarNavigation = () => {
  return (
      <Stack.Navigator initialRouteName="Deslogar">
        <Stack.Screen name="Deslogar" component={Deslogar} options={{
          title: 'Deslogando',
          headerStyle: {
            backgroundColor: '#3f48cc',
            height: 80,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 40,
            fontFamily: 'Roboto',
            letterSpacing: 1,
            fontWeight: 'bold',
          },
          headerLeft: () => <DrawerButton />
        }} />
      </Stack.Navigator>
  );
}

export default DeslogarNavigation;