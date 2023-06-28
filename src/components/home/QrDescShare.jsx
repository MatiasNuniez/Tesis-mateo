import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import ProfilePicture from '../../../assets/ProfilePicture.png'

function QrDescShare() {

  return (

    <View style={styles.containerText}>
      <View style={styles.imageContainer}>
      <Image source = {ProfilePicture}  style = {styles.image} />
      </View>
      <Text style={styles.bold}>Enfoque + Telegrama</Text>
      <Text style={styles.nobold}>Transforma tus perspectiva en imágenes cautivadoras,
        reflejando tus metas y mostrando tu visión única del mundo</Text>
        <View style={styles.touchContainer}>
        <View style={styles.touchStyle}>
          <TouchableOpacity>
          <Text style={styles.touchbold}>Compartir Perfil</Text>
          </TouchableOpacity>
        </View>
        </View>

    </View>

  )
}

const styles = StyleSheet.create({

  containerText:{
    flex:1,
    flexDirection:'column',
    width:'100%',
    marginBottom:0,
    height:'50vh'
  },

  touchContainer:{

    alignItems:'center'
    
  },

  touchStyle:{
    backgroundColor:'#efefef',
    marginTop:10,
    alignItems:'center',
    padding:10,
    borderRadius:10,
    width:'90%'
  },
  imageContainer:{
    justifyContent:'flex-start',
    marginBottom:50
  },
  image:{
    resizeMode:'cover',
    width:80,
    height:80,
    marginLeft:15
    
  },
  bold:{
    fontWeight:'bold',
    fontSize:15,
    justifyContent:'flex-start'
  },
  nobold:{
    fontSize:13,
    justifyContent:'flex-start'
  },
  touchbold:{
    fontWeight:'bold'
  }
})




export default QrDescShare;