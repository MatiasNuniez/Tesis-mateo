import { View, Text, Image } from 'react-native'
import React from 'react'

const OnlyImage = (props) => {

  const {image} = props;

  return (

    <View key={image} style={{ height: 650, marginTop: 10 }}>
      <Image source={{ uri: image }} style={{ width: '100%', height: '100%', resizeMode: 'stretch', marginLeft: -1 }} />
    </View>

  )
}

export default OnlyImage