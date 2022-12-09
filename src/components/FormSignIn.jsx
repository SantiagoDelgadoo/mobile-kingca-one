import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import userActions from "../redux/actions/userActions";
import axios from "axios";
import { base_url } from "../api/url";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  Image,
  Alert,
  ImageBackground,
} from "react-native";
import Footer from "./Footer";

export default function SignIn(props) {
  const dispatch = useDispatch();
  const { login } = userActions;
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  async function entry() {
    let res = await axios.post(`${base_url}auth/signin`, user);
    console.log(user);
    if (res.data.success) {
      Alert.alert(`Welcome again ${res.data.response.user.name}`);
      props.navigation.navigate("Home");
    } else {
      Alert.alert(`${res.data.message[0]} or password!`);
    }
  }
  const image = {
    uri: "https://cdn.discordapp.com/attachments/1032383580590055512/1050556495424671864/fondo-signup.webp",
  };
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.imagefondo}
    >
      <View style={styles.containerImg}>
        <Text style={styles.segundoTexto}>
          <Text style={styles.lineOrange}>| </Text> Create your account
        </Text>
        <TextInput
          onChangeText={(newText) => setUser({ ...user, email: newText })}
          defaultValue={user.email}
          placeholder="E-Mail"
          style={styles.textTitleTwo}
        />
        <TextInput
          secureTextEntry={true}
          autoCorrect={false}
          onChangeText={(newText) => setUser({ ...user, password: newText })}
          defaultValue={user.password}
          placeholder="Password"
          style={styles.textTitleTwo}
        />
        <Pressable style={styles.ButtonDetails} onPress={entry}>
          <Text style={styles.textoBoton}>Sign In</Text>
        </Pressable>
        <Text style={styles.segundoTexto}>
          <Text style={styles.lineOrange}>|</Text> Or create a new account!
        </Text>
        <Pressable
          style={styles.ButtonDetails}
          onPress={() => props.navigation.navigate("SignUp")}
        >
          <Text style={styles.textoBoton}>Sign Up</Text>
        </Pressable>
      </View>
      <Footer></Footer>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  ButtonDetails: {
    backgroundColor: "#ea5318",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 40,
    borderRadius: 10,
    textAlign: "center",
  },
  textoBoton: {
    color: "white",
    fontWeight: "800",
  },
  segundoTexto: {
    color: "white",
    padding: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
  imagefondo: {
    height: "100%",
    justifyContent: "center",
    flex: 1,
  },
  containerImg: {
    backgroundColor: "rgba(0,0,0,.606)",
    width: "100%",
    height: "95%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  lineOrange: {
    color: "#ea5318",
    fontSize: 24,
  },
  textTitle: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 10,
  },
  textTitleTwo: {
    borderRadius: 8,
    borderWidth: 1,
    width: "70%",
    borderColor: "#ea5318",
    padding: 5,
    fontSize: 15,
    marginBottom: 10,
    backgroundColor: "white",
  },
});
