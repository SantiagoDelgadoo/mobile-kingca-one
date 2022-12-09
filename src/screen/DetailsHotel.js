import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { base_url } from "../api/url";
import axios from "axios";
import CardEvent from "../components/CardEvent";
import Footer from "../components/Footer";
export default function DetailsHotel(props) {
  let [hotel, setHotels] = useState([]);
  let id = props.route.params;
  useEffect(() => {
    async function captureHotel() {
      const captureObject = await axios.get(`${base_url}/hotel/${id}`);
      setHotels(captureObject.data.id);
    }
    captureHotel();
  }, []);
  let [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get(`${base_url}/show?hotelId=${id}`)
      .then((response) => setEvents(response.data.id));
  }, []);

  const image = {
    uri: "https://4.bp.blogspot.com/-VU07ON0BdWg/Vgk6UCLVN8I/AAAAAAAAEsg/3-i03zAHqmo/s1600/20467__940x_keemala-tree-house-with-pool-hr.jpg",
  };
  return (
    <ScrollView style={styles.containerCityHotels}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.imagefondo}
        imageStyle={{opacity:0.4}}
      >
        <View style={styles.containerCards}>
          <Image
            style={styles.cardImg}
            source={{ uri: hotel.photo}}
            key={hotel.id}
          />
          <View style={styles.containerDescription}>
            <Text style={styles.textTitulo}>{hotel.name}</Text>
            <Text style={styles.textDescription}>{hotel.description}</Text>
            <Text>
              <Text style={styles.textCapacity}>Capacity: </Text>
              {hotel.capacity}
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.containerCardEvents}>
      {events.map((event) => {
        return (
        <CardEvent event={event} ></CardEvent>
        );
      })}
      </View>
      <Footer></Footer>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  containerCardEvents:{
    width:"100%",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
  },
  containerCityHotels: {
    display: "flex",
    width: "100%",
    alignContent:"center",
    backgroundColor: "#2b3133",
  },
  imagefondo: {
    width:"100%",
    height:500,
    justifyContent: "center",
    flex: 1,
    marginBottom:40,
  },
  containerCards: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: "90%",
    height: 360,
    backgroundColor: "white",
    color: "black",
    borderRadius: 30,
    marginBottom: 30,
    marginTop: 20,
  },
  cardImg: {
    width: "100%",
    resizeMode: "cover",
    height: "50%",
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  containerDescription: {
    height: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  textTitulo: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: "800",
  },
  textDescription: {
    marginBottom: 15,
  },
  textCapacity: {
    fontWeight: "800",
  },
});
