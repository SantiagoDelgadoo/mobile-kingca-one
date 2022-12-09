import {
  ImageBackground,
  Text,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import CardHotels from "../components/CardHotels";
import Footer from "../components/Footer";
export default function Hotels(props) {
  const image = {
    uri: "https://www.negociosypymes.com/wp-content/uploads/2021/05/hotel-estrellas-cartel-1200x600.jpg",
  };
  return (
    <>
      <ScrollView style={styles.containerCityHotels}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.imagefondo}
        >
          <View style={styles.containerImg}>
            <Text>
              <Text style={styles.lineOrange}>| </Text>
              <Text style={styles.textTitleTwo}>FIND YOUR HOTEL</Text>
            </Text>
          </View>
        </ImageBackground>
        <CardHotels navigation={props.navigation} ></CardHotels>
        <Footer></Footer>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  containerCityHotels: {
    display: "flex",
    width: "100%",
    backgroundColor: "#2b3133",
  },
  containerImg: {
    backgroundColor: "rgba(0,0,0,.606)",
    height: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imagefondo: {
    width:"100%",
    height:300,
    justifyContent: "center",
    flex: 1,
    marginBottom:40,
  },
  lineOrange: {
    color: "#ea5318",
    fontSize: 40,
  },
  textTitleTwo: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 16,
  },
});
