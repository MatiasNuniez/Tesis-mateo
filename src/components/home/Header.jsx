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

            <View style={styles.textcon}>
                <Text style={styles.textLogo} >
                    Enfogram
                </Text>
            </View>

            <View style={styles.touch}>
                <TouchableOpacity>
                    <Icon
                        name='bars'
                        size={25}
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
        width: '100%',
        flex: 1
    },

    touch: {
        width: '50%',
        justifyContent:'flex-end'
    },

    textcon:{
        width:'50%'
    },

    textLogo: {

        fontFamily: 'Billabong', fontSize: 40, height: 100

    }
})


export default Header;
