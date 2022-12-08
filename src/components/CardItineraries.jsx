import { View, Text, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../api/url";

export default function CardItineraries({ object }) {
  return (
    <View style={styles.containerDetailsCity}>
      <View>
        <Image
          style={styles.imagefondo}
          source={{ uri: `${object?.photo}` }}
          alt="Imagen de card"
        />
      </View>
      <View style={styles.containerTextosCityDetails}>
        {/* <Reaction itinerary={object?._id}></Reaction> */}
        <Text style={styles.textDetailsT}>{object?.name}</Text>
        <Text style={styles.textDetailsD}>{object?.description}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  containerDetailsCity: {
    height: 500,
    width: 350,
    marginBottom: 20,
    backgroundColor: '#ea5318',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    marginLeft: 30,
    borderRadius: 10,
  },
  imagefondo: {
    height: 280,
    width: 350,
    borderRadius: 10,
  },
  textDetails:{
    textAlign: "center",
    color: 'white',
    fontWeight: 'bold',
    marginTop: 12,
  },
  textDetailsD:{
    color: 'white',
    fontSize: 12,
    padding: 22,
  },
  textDetailsT: {
    color: 'white',
    fontSize: 20,
    textAlign: "center",
    marginTop: 8,
  }
});
