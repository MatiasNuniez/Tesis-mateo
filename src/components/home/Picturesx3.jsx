import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import img1 from '../../../assets/Imgs-profile/img1.jpg'


const Picturesx3 = () => {

    // const [size, setSize] = useState(0);


    // const getSize = async() => {
      
    //   try {
  
    //     const res = await fetch('http://192.168.1.2:3001');
    //     const data = await res.json();
    //     setSize(parseInt(data))
  
    //   } catch (error) {
  
    //     console.error(error);
  
    //   }
    // }
  
    // useEffect(() => {
    //   getSize()
    // }, [getSize()])
    

    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{width:'100%',
                height:'auto'}}
        >

        <View style={{width:'100%',
                      height:'auto',
                      backgroundColor:'white',
                      flexWrap:'wrap',
                      flexDirection:'row',
                      paddingVertical:2,
                      justifyContent:'space-between'}}>
        <Image source={img1} style={{width:'100%', height:230, marginTop:2, resizeMode:'contain'}}/>
        <Image source={img1} style={{width:'100%', height:230, marginTop:2, resizeMode:'contain'}}/>
        <Image source={img1} style={{width:'100%', height:230, marginTop:2, resizeMode:'contain'}}/>
        <Image source={img1} style={{width:'100%', height:230, marginTop:2, resizeMode:'contain'}}/>


        </View>

        </ScrollView>

    )
}

const styles = StyleSheet.create({})

export default Picturesx3;