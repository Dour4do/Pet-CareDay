import React from 'react'

// Navigation Imports
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { Home, Hospedagem, Creche, PetSitter, Passeios, Principal, Cadastro } from '../screens'

// Components
import DrawerButton from '../components/DrawerButton'

// Screen Stack
const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{
        title: 'Login',
        headerStyle: {
          backgroundColor: '#3f48cc',
          height: 80,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 46,
          fontFamily: 'Roboto',
          letterSpacing: 1,
          fontWeight: 'bold',
        },
        headerLeft: () => <DrawerButton />
      }} />
      <Stack.Screen name="Principal" component={Principal} options={{
        title: 'Pet CareDay',
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
      <Stack.Screen name="Cadastro" component={Cadastro} options={{
        title: 'Cadastrar',
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

      <Stack.Screen name="Hospedagem" component={Hospedagem} options={{
        title: 'Hospedagem',
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
      <Stack.Screen name="Creche" component={Creche} options={{
        title: 'Creche',
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
      <Stack.Screen name="PetSitter" component={PetSitter} options={{
        title: 'Pet Sitter',
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
      <Stack.Screen name="Passeios" component={Passeios} options={{
        title: 'Passeios',
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

export default HomeNavigation;