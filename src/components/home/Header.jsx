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
                <TouchableOpacity >
                    <Icon
                        name='bars'
                        size={27}
                        color="grey"
                        style={{marginTop:'0px'}}
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
        marginHorizontal: 20
    },

    textLogo: {

        fontFamily: 'Billabong', fontSize: 40, height: 100

    }
})


export default Header;
