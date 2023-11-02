import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import OnlyImageScreen from '../screens/OnlyImageScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const MainStackNavigation = () => {

    return (

        <NavigationContainer>

            <Stack.Navigator>

                <Stack.Screen name='home' component={HomeScreen} options={{headerShown:false}}/>
                <Stack.Screen name='Image' component={OnlyImageScreen} />

            </Stack.Navigator>
            
                

        </NavigationContainer>


    )
}

export default MainStackNavigation;