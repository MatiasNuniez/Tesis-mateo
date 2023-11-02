import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../src/components/home/Header'
import QrDescShare from '../src/components/home/QrDescShare'
import Pictures from '../src/components/home/Pictures'
import { NavigationContainer } from '@react-navigation/native';


const HomeScreen = () => {

  return (

    <SafeAreaView style={styles.container}>

      <Header />

      <QrDescShare />

        <Pictures />


    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 15,
  }
})



export default HomeScreen;