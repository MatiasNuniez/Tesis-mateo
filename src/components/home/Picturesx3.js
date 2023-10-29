import { View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref as storegeRef } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs} from 'firebase/firestore'

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
    const [cont, setCont] = useState()

    const getCont = () => {

        const db = getFirestore()
        const colRef = collection(db, 'contador')
        const getDoc = getDocs(colRef).then((snapshot)=>{
            const contIn = []
            snapshot.docs.forEach((doc)=>{
                contIn.push({...doc.data()})
            })
            setCont(contIn[0].num);
        })
        .catch(err => {
            console.log(err.message);
        })
    }

    const fetchImages = async () => {

        getCont();

        const storage = getStorage(app);
        for (let index = 1; index < cont + 1; index++) {
            const imagesRef = storegeRef(storage, `images/${index}-undefined`);
            console.log(imagesRef);
            console.log(getDownloadURL(imagesRef));
            await getDownloadURL(imagesRef).then((item) => {
                    setImages(current => [item, ...current]);
            })
        }
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
                            <View key = {itemImage} style={{ width: '32%', height: 200, marginTop: 0 }}>
                                <Image source={{
                                    uri: itemImage
                                }} style={{ width: '100%', height: '100%', resizeMode:'stretch', marginLeft:-0.4}} />
                            </View>
                        )
                    })
                }



                {/* <View style={{ width: '32%', height: 200, marginTop: 0 }}>
                    <Image source={{
                        uri: images[0]
                    }} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
                </View>
                <View style={{ width: '32%', height: 200, marginTop: 0 }}>
                    <Image source={{
                        uri: images[1]
                    }} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
                </View>

                <View style={{ width: '32%', height: 200, marginTop: 0 }}>
                    <Image source={{
                        uri: "https://firebasestorage.googleapis.com/v0/b/enfogramtaller5.appspot.com/o/images%2F1-undefined.png?alt=media&token=ca3e2231-54a4-46c3-a62b-c70ab21e51ba"
                    }} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
                </View> */}


            </View >

        </ScrollView >

    )
}

export default Picturesx3;