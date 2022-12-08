import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import hotelsAction from "../redux/actions/hotelsAction";
import { View, Text } from "react-native";
import { StyleSheet, Image, Pressable, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
export default function CardHotels() {
  let [data, setData] = useState({ name: "", order: "ASC" });
  const listFiltered = useSelector((store) => store.hotelsReducer.listFiltered);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hotelsAction.filterHotels(data));
  }, [data]);
  return (
    <>
      <View className="filters">
        <View>
          <TextInput
            style={styles.inputHotels}
            onChangeText={(newText) => setData({ ...data, name: newText })}
            type="search"
            placeholder="Search Hotel"
          />
        </View>
        <View>
          <Picker
          style={styles.inputHotels}
            selectedValue={data.order}
            onValueChange={(itemValue, itemIndex) =>
              setData({ ...data, order: itemValue })
            }
          >
            <Picker.Item label="Ascending order" value="ASC" />
            <Picker.Item label="Descending order" value="DESC" />
          </Picker>
        </View>
      </View>

      {listFiltered.map((place) => {
        return (
          <View style={styles.containerCards} key={place.id}>
            <Text style={styles.subtituloCitiesCard} key={place.id}>
              {place.name}
            </Text>
            <Image
              style={styles.cardImg}
              source={{ uri: place.photo[0] }}
              key={place.id}
            />
            <View key={place.id}                 style={
                  styles.viewDetailsCities
                }>
              <Pressable
                style={
                  styles.buttonDetailsCities
                } /*  onPress={() => props.props.navigate("Details Hotel", place._id)} */
                key={place.id}
              >
                <Text style={styles.tituloDetails} key={place.id}>
                  Details
                </Text>
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
    alignSelf:"center",
    alignItems: "center",
    width: "90%",
    height: 360,
    backgroundColor: "white",
    color: "black",
    borderRadius: 30,
    marginBottom: 30,
  },
  subtituloCitiesCard: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    width: "100%",
    backgroundColor: "#2020209d",
    padding: 10,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  cardImg: {
    width: "100%",
    resizeMode: "cover",
    height: "50%",
    width: "100%",
    flexGrow: 1,
  },
  buttonDetailsCities: {
    width: "100%",
    height: 50,
    backgroundColor: "#ea5318",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  viewDetailsCities:{
    width: "100%",
  },
  tituloDetails: {
    color: "white",
    textDecoration: "none",
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
  },
  inputHotels: {
    width:"90%",
    alignSelf:"center",
    fontSize: 15,
    borderWidth: 2,
    borderColor: "#ea5318",
    padding: 8,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: "white",
  },
});
