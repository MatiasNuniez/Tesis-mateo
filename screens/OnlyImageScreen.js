import { SafeAreaView, Text } from 'react-native'
import React from 'react'
import OnlyImage from '../src/components/OnlyImage/OnlyImage'

export default function OnlyImageScreen(props) {

  const { navigation, route:{params} } = props;

  return (

    <SafeAreaView>

        <OnlyImage image = {params.image}/>

    </SafeAreaView>

  )
}