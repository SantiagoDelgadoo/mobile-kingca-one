import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import CardCity from '../components/CardCity';
import { useDispatch, useSelector } from 'react-redux';
import citiesAction from '../redux/actions/citiesAction';
import Footer from '../components/Footer';

export default function Cities(props) {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const citiesFiltered = useSelector((store) => store.citiesReducer.listCities);
  useEffect(() => {
      dispatch(citiesAction.getCities({text:text})); 
    }, [text]);
    
  const image = { uri: "https://cdn.discordapp.com/attachments/1032383580590055512/1050147644737081374/img-header-mano.jpg" };
  return (
    <ScrollView>
      <ImageBackground source={image} resizeMode="cover" style={styles.imagefondo}>
        <View style={styles.containerImg} >
          <Text style={styles.textTitle}>Where would you like to go?</Text>
          <Text>
            <Text style={styles.lineOrange}>| </Text><Text style={styles.textTitleTwo}>WE HAVE THE BEST
            DESTINATIONS FOR YOU
          </Text></Text>
        </View>
        </ImageBackground>
      <View style={styles.searchCities}>
          <TextInput style={styles.inputCities} onChangeText={(newText) => setText(newText)}
            type="search"
            placeholder="Search here for the name of the city you want"
          />
      </View>
      <View style={styles.containerCardsCities}>
      {citiesFiltered.map(city=><CardCity props={props.navigation} cities={city}></CardCity>)}
      </View>
      <Footer></Footer>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
  imagefondo: {
    height: 550,
    justifyContent: 'center',
    flex: 1,
  },
  containerImg:{
    backgroundColor: "rgba(0,0,0,.606)",
    height: 550,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textTitle: {
    color: '#ea5318',
    fontSize: 20,
    fontWeight: 'bold',
  },
  lineOrange: {
    color: '#ea5318',
    fontSize: 40,
  },
  textTitleTwo: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  searchCities: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30
  },
  inputCities: {
    fontSize: 15,
    borderWidth: 2,
    borderColor: '#ea5318',
    padding: 8,
    borderRadius: 8,
  },
  containerCardsCities: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});