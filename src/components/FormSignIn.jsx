import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import userActions from "../redux/actions/userActions";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  Image,
  Alert,
} from "react-native";

export default function SignIn(props) {
  const dispatch = useDispatch();
  const {login} = userActions;
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  async function entry () {
      let res = dispatch(login(user))
      console.log(res);
     /*  if (res.payload.response.success){ */
       /*  Alert.alert(`Welcome again ${res.payload.response.da.name}`) */
        /* console.log(res.payload.response); */
        /* .then(props.navigation.navigate("Home")); */

    /*   } */
/*       else {
        res.payload.payload.map((message) => {
          Alert.alert(`${message}`);
        })
      } */
  }
  return (
    <>
      <View style={styles.formSignUp}>
        <Text style={styles.titulo}>Welcome to My-Tinerary!</Text>
        <Text style={styles.textoLog}>Sign In with your account</Text>
        <TextInput
          onChangeText={(newText) =>
            setUser({ ...user, email: newText })
          }
          defaultValue={user.email}
          placeholder="E-Mail"
          style={styles.inputSearch}
        />
        <TextInput
          secureTextEntry={true}
          autoCorrect={false}
          onChangeText={(newText) =>
            setUser({ ...user, password: newText })
          }
          defaultValue={user.password}
          placeholder="Password"
          style={styles.inputSearch}
        />
        <Pressable style={styles.botonColor} onPress={entry}>
          <Text style={styles.fondoBoton}>Sign In</Text>
        </Pressable>
        <Text style={styles.textoLog2}>Or create a new account!</Text>
      {/*   <Pressable
          style={styles.botonColor}
          onPress={() => props.navigation.navigate("Sign Up")}
        >
          <Text style={styles.fondoBoton}>Sign Up</Text>
        </Pressable> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  signUp: {
    height: "100%",
    display: "flex",
  },
  formSignUp: {
    height: "88%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  textoLog: {
    marginBottom: 5,
  },

  textoLog2: {
    marginBottom: 5,
    marginTop: 45,
  },

  inputSearch: {
    height: 40,
    width: 180,
    backgroundColor: "white",
    marginBottom: 10,
    fontSize: 12,
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 4,
  },

  botonColor: {
    backgroundColor: "#ff3648",
    height: 40,
    width: 180,
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 4,
  },

  fondoBoton: {
    backgroundColor: "#ff3648",
    height: 18,
    width: 180,
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 4,
    fontSize: 13,
    color: "white",
  },

  logo: {
    width: 120,
    height: 120,
  },

  titulo: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
});