import React from "react";
import {
  ImageBackground,
  Text,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import FormSignIn from "../components/FormSignIn";

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
    height: 600,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.596)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  containerSingup: {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    padding: 40,
  }
})