import { SafeAreaView, Text } from 'react-native'
import { useEffect } from 'react';
import React from 'react'
import OnlyImage from '../src/components/OnlyImage/OnlyImage'
import Icon from "react-native-vector-icons/FontAwesome5"

export default function OnlyImageScreen(props) {

  const { navigation, route:{params} } = props;

  useEffect(()=>{
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => <Icon name = "arrow-left" color = "#000" size={20} style = {{ marginLeft:20}} onPress = {() => navigation.goBack()}/>
    })
  },[navigation, params])

  return (

    <SafeAreaView>

        <OnlyImage image = {params.image}/>

    </SafeAreaView>

  )
}