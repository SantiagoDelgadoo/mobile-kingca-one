import { View, Text, ScrollView,StyleSheet } from 'react-native'
import React from "react";
import CardHotels from "../components/CardHotels";
export default function Hotels() {
  return (
    <>
      <ScrollView style={styles.containerCityHotels}>
        <CardHotels></CardHotels>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
    containerCityHotels: {
        display: "flex",
        padding: 32,
        backgroundColor:"#2b3133"
    },

  });
