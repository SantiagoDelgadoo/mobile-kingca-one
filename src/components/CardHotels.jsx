import React from "react";
import { useState, useEffect } from "react";
/* import SearchBar from "./FormText"; */
/* import { Link as NavLink } from "react-router-dom"; */
import { useDispatch, useSelector } from "react-redux";
import hotelsAction from "../redux/actions/hotelsAction";
import { View, Text } from "react-native";
import { StyleSheet, Image, Pressable, TextInput } from "react-native";

export default function CardHotels() {
   let [data, setData] = useState({ name: "", order: "" });
  const listFiltered = useSelector((store) => store.hotelsReducer.listFiltered);
  const dispatch = useDispatch();
/*   let inputSearch = (event) => {
    setData({ ...data, name: event.value });
  };
 */

  let inputOrder = (event) => {
    setData({ ...data, order: event.target });
  };
  useEffect(() => {
    dispatch(hotelsAction.filterHotels(data));
    console.log(data);
  }, [data]);
  return (
    <>
      <View className="filters">
        <View>
           <TextInput style={styles.inputHotels} onChange={(newText) => setData({ ...data, name: newText })}
            type="search"
            placeholder="Search Hotel" /> 
        </View>
{/*         <View>
           <form action="" className="filter-select">
            <select onChange={inputOrder}>
              <option value="">Choose an option</option>
              <option value="ASC">Ascending order</option>
              <option value="DESC">Descending order</option>
            </select>
          </form> 
        </View> */}
      </View> 

      {listFiltered.map((place) => {
        return (
          <View style={styles.containerCards} key={place.id}>
            <Text style={styles.subtituloCitiesCard}>{place.name}</Text>
            <Image style={styles.cardImg} source={{ uri: place.photo[0] }} />
            <View>
              <Pressable
                style={
                  styles.buttonDetailsCities
                } /*  onPress={() => props.props.navigate("Details Hotel", place._id)} */
              >
                <Text style={styles.tituloDetails}>Details</Text>
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
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
  },
  cardImg: {
    width: "100%",
    resizeMode: "cover",
    height: "50%",
    width: "100%",
    flexGrow: 1,
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
  inputHotels: {
    fontSize: 15,
    borderWidth: 2,
    borderColor: '#ea5318',
    padding: 8,
    borderRadius: 8,
    marginBottom:20,
    backgroundColor:"white",
  },
});
