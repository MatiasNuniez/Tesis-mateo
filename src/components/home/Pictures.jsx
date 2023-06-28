import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Picturesx1 from './Picturesx1';
import Picturesx3 from './Picturesx3';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

function Pictures() {

  const Tab = createMaterialTopTabNavigator()

  return (

    <Tab.Navigator style={{marginTop:0}}  screenOptions={({route})=>({
      tabBarShowLabel:false,
    })}>

      <Tab.Screen name='POSTX3' component={Picturesx3} options={{
            tabBarIcon : ({}) => (
                <Icon name = 'images'
                color= 'black'
                size={20} />
            )
        }}/>

      <Tab.Screen name='POSTX1' component={Picturesx1} options={{
            tabBarIcon : ({}) => (
                <Icon name = 'image'
                color= 'black'
                size={20} />
            )
        }}/>

    </Tab.Navigator>

  )
}

export default Pictures;