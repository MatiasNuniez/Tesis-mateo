import { View, ScrollView, Image } from 'react-native'
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

const Picturesx1 = () => {

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
        flex:1,
        backgroundColor: 'white',
        flexWrap: 'wrap',
        flexDirection: 'column'
      }}>

{
                    images?.map(itemImage => {
                        return (
                        <View key={itemImage}style={{height: 650, marginTop:10}}>
                          <Image source={{uri:itemImage}} style={{ width: '100%', height: '100%', resizeMode: 'stretch', marginLeft:-1}} />
                        </View>
                        )
                    })
                }

      </View>

    </ScrollView>
  )
}

export default Picturesx1;