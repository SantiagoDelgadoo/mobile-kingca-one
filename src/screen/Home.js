import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import Carousel from '../components/Carousel';
import { ImageBackground } from 'react-native';
export default function Home() {
    const image = { uri: "https://cdn.discordapp.com/attachments/1019318586361249852/1050131535422046268/img-itinerario.webp" };
  return (
    <ScrollView style={styles.containerGrande}>
    <ImageBackground source={image} resizeMode="cover" style={styles.imagefondo}>
    <View style={styles.containerImg} >
      <Text style={styles.textoGrande}><Text style={styles.linea}>|</Text> MY TINERARY TRAVELS</Text>
      </View>
    </ImageBackground>
      <Carousel/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    textoGrande: {
        color: "white",
        fontSize: 70,
        padding:10,
        textAlign:"center",
    },
    linea:{
        color: "#ea5318",
        fontSize: 70,
        padding:10,
        textAlign:"center",
    },
    containerGrande:{
        backgroundColor:"rgba(15, 14, 14, 0.949)"
      },

      imagefondo: {
        height: 550,
        justifyContent: 'center',
        flex: 1,
      },
      containerImg:{
        backgroundColor: "rgba(0,0,0,.606)",
        height: 550,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
  });