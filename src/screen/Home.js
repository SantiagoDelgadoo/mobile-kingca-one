import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import Carousel from '../components/Carousel';
export default function Home() {
  return (
    <ScrollView style={styles.containerGrande}>
      <Text style={styles.textoGrande}><Text style={styles.linea}>|</Text> MY TINERARY TRAVELS</Text>
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
      }
  });