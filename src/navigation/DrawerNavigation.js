import React from 'react'

// Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


// Screen Navigations

import HomeNavigation from './HomeNavigation'


// Drawer Stack
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home"
                drawerStyle={{
                    backgroundColor: "#3f48cc",
                    width: '50%',
                }}
                drawerContentOptions={{
                    activeTintColor: '#3f48cc',
                    inactiveTintColor: 'white',
                    activeBackgroundColor: 'white'
                }}
                overlayColor='transparent'
            >
                <Drawer.Screen
                    name="Principal"
                    component={HomeNavigation}
                    options={{
                        title: 'Principal'
                    }}
                />

                <Drawer.Screen
                    name="Config"
                    component={HomeNavigation}
                    options={{
                        title: 'Configuração'
                    }}
                />

                <Drawer.Screen
                    name="Deslogar"
                    component={HomeNavigation}
                    options={{
                        title: 'Deslogar'
                    }}
                />
            </Drawer.Navigator>

        </NavigationContainer>
    )
}

export default DrawerNavigation;