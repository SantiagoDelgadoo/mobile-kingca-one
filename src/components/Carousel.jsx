import React from "react";
import cities from "../data/cities";
import places from "../data/places";
import { useState, useEffect } from "react";
import { ScrollView,View,Text,Image,StyleSheet } from "react-native";

export default function Carousel() {
  let [numberOfChange, setNumberOfChange] = useState(0);
  let [id, setId] = useState(0);

  let next = () => {
    if (numberOfChange + 2 < places.length - 1) {
      setNumberOfChange(numberOfChange + 1);
    } else {
      setNumberOfChange(0);
    }
    clearInterval(id);
  };
  let prev = () => {
    if (numberOfChange === 0) {
      setNumberOfChange(cities.length - 3);
    } else {
      setNumberOfChange(numberOfChange - 1);
    }
    clearInterval(id);
  };
  useEffect(() => {
    let idInterval = setInterval(() => {
      next();
    }, 5000);
    setId(idInterval);
    return clearInterval(id);
  }, [numberOfChange]);

  return (
    <ScrollView style={styles.containerGrande}>
        <Text style={styles.textTitulo}>
            CITIES 
        </Text >
          <View style={styles.carousel}>
            <Image
              source={{uri:cities[numberOfChange].photo}}

              style={styles.photoCarrusel}
            />
            <Image
              source={{uri:cities[numberOfChange +1 ].photo}}

              style={styles.photoCarrusel}
            />
        </View>

        <Text style={styles.textTitulo}>
          PLACES
        </Text>
          <View style={styles.carousel}>
            <Image
              source={{uri:places[numberOfChange].photo[0]}}

              style={styles.photoCarrusel}
            />
            <Image
              source={{uri:places[numberOfChange].photo[1]}}

              style={styles.photoCarrusel}
            />
     </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  carousel:{
    display: "flex",
    flex:1,
    flexDirection:"column",
    alignItems: "center",
    height:450,
    padding:5,
  },
  photoCarrusel:{
    width:"100%",
    height:200,
    marginBottom:10,
  },
  textTitulo:{
    textAlign:"center",
      color: "#ea5318",
     padding: 32,
      fontSize: 32,
  },
/*   containerGrande:{
    backgroundColor:"rgba(15, 14, 14, 0.949)"
  } */
});