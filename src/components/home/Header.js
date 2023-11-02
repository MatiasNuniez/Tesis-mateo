import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';


const Header = () => {

    const [fontsLeaded] = useFonts({

        Billabong: require("../../../assets/fonts/Billabong.ttf")

    })

    useEffect(() => {
        fontsLeaded
    }, [])

    return (

        <View style={styles.container}>

            <View style={styles.leftContainer}>
                <Text style={{fontFamily:'Billabong', fontSize:40}} >
                    Enfogram
                </Text>
            </View>

        </View>

    )
}


const styles = StyleSheet.create({

    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal:20,
        marginBottom:40
    },
    leftContainer:{
        flex:1,
        alignItems:'flex-start'
      }
})


export default Header;
