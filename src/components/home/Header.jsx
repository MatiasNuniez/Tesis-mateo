import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
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
            <View>
                <Text style={styles.textLogo} >
                    Enfogram
                </Text>
            </View>

            <View>
                <TouchableOpacity style={styles.touch}>
                    <Icon
                        name='bars'
                        size={30}
                        color="grey"
                    />
                </TouchableOpacity>
            </View>
        </View>

    )
}


const styles = StyleSheet.create({

    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },

    touch:{
        width:'32px',
        marginTop:0
    },

    textLogo: {

        fontFamily: 'Billabong', fontSize: 40, height: 100

    }
})


export default Header;
