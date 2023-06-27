import { View, Text, ScrollView, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import img from '../../../assets/Imgs-profile/img1.jpg'

const Picturesx1 = () => {

  const [images, setImages] = useState([]);


  const getSize = async() => {

    try {

      const res = await fetch('http://192.168.1.2:3001');
      const data = await res.json();
      var cont = parseInt(data)
      var array = [{}]
      for (let index = 0; index < cont; index++) {
        array.push(index)
      }
      setImages(array)
      console.log(images);
    } catch (error) {

      console.error(error);

    }
  }

  useEffect(() => {
    getSize()
  },[])
  

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    style={{width:'100%',
            height:'100%'}}
    >

    <View style={{width:'100%',
                  height:'100%',
                  backgroundColor:'white',
                  flexWrap:'wrap',
                  flexDirection:'column',
                  paddingVertical:5,
                  justifyContent:'space-between'}}>
                    
    <Image source = {img} style={{width:'100%', height:230, marginTop:5, resizeMode:'cover'}}/>
    <Image source={img1} style={{width:'100%', height:250, marginTop:5}}/>
    <Image source={img1} style={{width:'100%', height:250, marginTop:5}}/>
    <Image source={img1} style={{width:'100%', height:250, marginTop:5}}/>

    </View>

    </ScrollView>
  )
}

export default Picturesx1;