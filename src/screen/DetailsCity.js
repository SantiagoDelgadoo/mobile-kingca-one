/* import { View, Text, Image, StyleSheet } from 'react-native' */
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, } from "react-native";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { base_url } from '../api/url';
import Footer from "../components/Footer";
import CardItineraries from "../components/CardItineraries";

export default function DetailsCity(props) {
  console.log(props.route.params);
  let [citiesCapture, setCitiesCapture] = useState()
  async function petition() {
    axios.get(`${base_url}city/${props.route.params}`)
      .then((response) => setCitiesCapture(response.data.id))
  }
  useEffect(() => {
    petition()
  }, [])

  let [itineraris,setItineraris] = useState([])
  useEffect(()=>{
    axios.get(`${base_url}itinerary?cityId=${props.route.params}`)
    .then((response)=>setItineraris(response.data.id))
  },[])
  

  const image = { uri: "https://cdn.discordapp.com/attachments/1032383580590055512/1050508309796495440/img-camellos.jpg" };
  return (
    <ScrollView>
    <ImageBackground source={image} resizeMode="cover" style={styles.imagenfondo}>
     <View style={styles.containerDetailsCity} >
      <View style={styles.fondo}>
      <Image style={styles.imagefondo} source={{uri:`${citiesCapture?.photo}`,
          }} alt="Imagen de card" />
          <View style={styles.containerTextosCityDetails} >
        <Text style={styles.textDetails}>{citiesCapture?.name}</Text>
        <Text style={styles.textDetails}>{citiesCapture?.continent}</Text>
        <Text style={styles.textDetails}>{citiesCapture?.population}</Text>
      </View>
      </View>  
    </View>
    </ImageBackground>
    {itineraris.map(itinerary=><CardItineraries object={itinerary} key={itinerary.name}></CardItineraries>)}
    <Footer></Footer>
    </ScrollView>
  )
} 
const styles = StyleSheet.create({
  imagefondo: {
    height: 250,
    width: 175,
    borderRadius: 10,

  },
  containerDetailsCity: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  fondo: {
    backgroundColor: '#ea5418b9',
    width: 350,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
  },
  textDetails:{
    textAlign: "center",
    color: 'white',
    fontWeight: 'bold',
    marginTop: 40,
    marginLeft: 12,
  },
  imagenfondo: {
    height: 550,
    justifyContent: 'center',
    flex: 1,
  },
});