import React from "react";
/* import { useState, useEffect } from "react"; */
/* import SearchBar from "./FormText"; */
/* import { Link as NavLink } from "react-router-dom"; */
/* import { useDispatch, useSelector } from "react-redux";
import hotelsAction from "../redux/actions/hotelsAction"; */
import { View, Text } from "react-native";
import { StyleSheet, Image, Pressable } from "react-native";
import data from "../data/places";

export default function CardHotels() {
  let hotels = data;
  /*   let [data, setData] = useState({ name: "", order: "" });
  const listFiltered = useSelector((store) => store.hotelsReducer.listFiltered);
  const dispatch = useDispatch();
  let inputSearch = (event) => {
    setData({ ...data, name: event.target.value });
  };

  let inputOrder = (event) => {
    setData({ ...data, order: event.target.value });
  };
  useEffect(() => {
    dispatch(hotelsAction.filterHotels(data));
  }, [data]); */
  return (
    <>
      {/*       <View className="filters">
        <View>
           <SearchBar onChange={inputSearch} /> 
        </View>
        <View>
           <form action="" className="filter-select">
            <select onChange={inputOrder}>
              <option value="">Choose an option</option>
              <option value="ASC">Ascending order</option>
              <option value="DESC">Descending order</option>
            </select>
          </form> 
        </View>
      </View> */}

      {hotels.map((place) => {
        return (
          <View style={styles.containerCards} key={place.id}>
            <Image style={styles.cardImg} source={{ uri: place.photo[0] }} />
            <Text style={styles.subtituloCitiesCard}>{place.name}</Text>
            <View>
              <Pressable
                style={
                  styles.buttonDetailsCities
                } /*  onPress={() => props.props.navigate("Details Hotel", place._id)} */
              >
                <Text style={styles.tituloDetails}>Deatils</Text>
              </Pressable>
            </View>
          </View>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  containerCards: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 380,
    backgroundColor: "white",
    color: "black",
    borderRadius: 30,
    marginBottom: 30,
    /*  boxShadow: "rgba(50, 50, 93, 0.25)", */
  },
  subtituloCitiesCard: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    width: "100%",
    backgroundColor: "#2020209d",
    padding: 10,
  },
  cardImg: {
    width: "100%",
    resizeMode: "contain",
    height: "50%",
    width: "100%",
    flexGrow: 1,
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
  },
  buttonDetailsCities: {
    width: 350,
    height: 50,
    backgroundColor: "#ea5318",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    borderBottomRightRadius:30,
    borderBottomLeftRadius:30,
  },
  tituloDetails: {
    color: "white",
    textDecoration: "none",
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
  },
});
