import React from "react";
import { Button, View, Image, Text, StyleSheet } from "react-native";

export default function CardCity(props) {
  let cities = props.cities;
  console.log(cities);
  return (
    <View style={styles.card} >
      <View>
      <Text style={styles.textoCard}>{cities.name}</Text>
        <Image style={styles.imagefondo} source={{uri:`${cities?.photo}`,
          }} alt="Imagen de card" />
        
      </View>
      <View>
        <Button style={styles.buttonCities}
          color="#ea5318"
          onPress={() => props.props.navigate("DetailsCity", cities._id)} 
          title="More details"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    imagefondo: {
        height: 300,
        width: 300,
    },
    textoCard:{
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: "rgba(0,0,0,.606)",
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      },
      buttonCities: {
        width: 300,
        fontSize: 1,
        fontWeight: 'bold',
    },
    card: {
        width: 300,
        display: "flex",
        justifyContent: 'center',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        marginBottom: 32,
    }
  });