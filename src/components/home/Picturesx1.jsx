import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import img1 from '../../../assets/Imgs-profile/img1.png'
import img2 from '../../../assets/Imgs-profile/img2.png'
import img3 from '../../../assets/Imgs-profile/img3.png'

const Picturesx1 = () => {

  // const [images, setImages] = useState([]);


  // const getSize = async () => {

  //   try {

  //     const res = await fetch('http://192.168.1.2:3001');
  //     const data = await res.json();
  //     var cont = parseInt(data)
  //     var array = [{}]
  //     for (let index = 0; index < cont; index++) {
  //       array.push(index)
  //     }
  //     setImages(array)
  //     console.log(images);
  //   } catch (error) {

  //     console.error(error);

  //   }
  // }

  // useEffect(() => {
  //   getSize()
  // }, [])


  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        width: '100%',
        height: 'auto'
      }}
    >

      <View style={{
        flex:1,
        backgroundColor: 'white',
        flexWrap: 'wrap',
        flexDirection: 'column'
      }}>
        <View style={{height: 650, marginTop:10}}>
          <Image source={img1} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
        </View>
        <View style={{height: 650 , marginTop:10}}>
          <Image source={img2} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
        </View>
        <View style={{height: 650, marginTop:10}}>
          <Image source={img3} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
        </View>

      </View>

    </ScrollView>
  )
}

export default Picturesx1;