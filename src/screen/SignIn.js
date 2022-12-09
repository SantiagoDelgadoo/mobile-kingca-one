import React from "react";
import {
  ImageBackground,
  Text,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import FormSignIn from "../components/FormSignIn";
import Footer from "../components/Footer";

export default function SignIn(props) {
  return (
    <View  style={styles.ContainerDeSingUp} >
      <View style={styles.containerSingup} >
         <FormSignIn navigation={props.navigation} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  ContainerDeSingUp:{
    color: "white",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.596)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  containerSingup: {
    width: "100%",
    height:"100%",
    display: "flex",
    justifyContent: "center",
  }
})