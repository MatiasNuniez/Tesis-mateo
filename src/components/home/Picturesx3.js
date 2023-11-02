import { View, Image, ScrollView, TouchableNativeFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref as storegeRef } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs} from 'firebase/firestore'
import { TouchableOpacity } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';

//FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyAh7Wr4c9nv2ON-Ysnw36E_LpHucem8Wps",
    authDomain: "enfogramtaller5.firebaseapp.com",
    projectId: "enfogramtaller5",
    databaseURL: "https://enfogramtaller5-default-rtdb.firebaseio.com/",
    storageBucket: "enfogramtaller5.appspot.com",
    messagingSenderId: "416888291101",
    appId: "1:416888291101:web:8362cbddff7e9b1de6abf4",
    measurementId: "G-6LDJPXHE6V"
};

//INICIAR FIREBASE
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)

const Picturesx3 = () => {

    const [images, setImages] = useState([]);
    const [cont, setCont] = useState();
    const navigation = useNavigation();

    const getCont = () => {

        const db = getFirestore()
        const colRef = collection(db, 'contador')
        const getDoc = getDocs(colRef).then((snapshot)=>{
            const contIn = []
            snapshot.docs.forEach((doc)=>{
                contIn.push({...doc.data()})
            })
            setCont(contIn[0].num);
            return getDoc
        })
        .catch(err => {
            console.log(err.message);
        })
    }

    const fetchImages = async () => {
        const storage = getStorage(app);
        getCont();
        try {

            for (let index = 1; index < cont + 1; index++) {
                const imagesRef = storegeRef(storage, `images/${index}-undefined`);
                console.log(imagesRef);
                console.log(getDownloadURL(imagesRef));
                await getDownloadURL(imagesRef).then((item) => {
                        setImages(current => [item, ...current]);
                })
            }
            return images
            
        } catch (error) {
            console.log(error);
        }

    }

    const goToImage = (itemImage) => {
        navigation.navigate('Image', {image:itemImage})
    }

    useEffect(() => {
        fetchImages();
    }, [cont])


    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                width: '100%',
                height: 'auto'
            }}
        >

            <View style={{
                width: '100%',
                height: 'auto',
                backgroundColor: 'white',
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>



                {
                    images?.map(itemImage => {
                        return (
                                <TouchableOpacity onPress={() => goToImage(itemImage)} key = {itemImage} style={{width: '32%', height: 200, marginTop: 1, border:'none'}}>
                                <Image source={{
                                    uri: itemImage
                                }} style={{ width: '100%', height: '100%', resizeMode:'stretch', marginLeft:-0.4}} />
                                </TouchableOpacity>
                        )
                    })
                }


            </View >

        </ScrollView >

    )
}

export default Picturesx3;