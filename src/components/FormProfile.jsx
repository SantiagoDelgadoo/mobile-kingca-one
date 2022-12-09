import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import userActions from "../redux/actions/userActions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Alert,
  TextInput,
  Pressable,
} from "react-native";

export default function FormEditShow() {
  let { logged, role, id } = useSelector((store) => store.userReducer);

  const { reIngress } = userActions;
  const dispatch = useDispatch();
  async function getToken() {
    try {
      let token = await AsyncStorage.getItem("token");
      token = JSON.parse(token);
      if (token) {
        dispatch(reIngress(token.token.user));
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  React.useEffect(() => {
    getToken();
  }, []);
  const [info, setInfo] = useState({
    name: "",
    lastName: "",
    photo: "",
    age: "",
  });
  let editar = async() => {
    let edit = {
      id: id,
      info: info,
    };
   const update = await dispatch(userActions.editUser(edit));
    /*  if (res.data.success) {
          Alert.alert(`Edit Update`);
        } else {
          Alert.alert(`Update Failed`);
        } */
  };
  return (
    <View style={styles.containerImg}>
      <Text style={styles.segundoTexto}>
        <Text style={styles.lineOrange}>| </Text> Edit your account
      </Text>
      <TextInput
        onChangeText={(newText) => setInfo({ ...info, name: newText })}
        defaultValue={info.name}
        placeholder="Name"
        style={styles.textTitleTwo}
      />
      <TextInput
        onChangeText={(newText) => setInfo({ ...info, lastName: newText })}
        defaultValue={info.lastName}
        placeholder="LastName"
        style={styles.textTitleTwo}
      />
      <TextInput
        onChangeText={(newText) => setInfo({ ...info, photo: newText })}
        defaultValue={info.photo}
        placeholder="Photo"
        style={styles.textTitleTwo}
      />
      <TextInput
        onChangeText={(newText) => setInfo({ ...info, age: newText })}
        defaultValue={info.age}
        placeholder="Age"
        style={styles.textTitleTwo}
      />
      <Pressable style={styles.ButtonDetails} onPress={editar}>
        <Text style={styles.textoBoton}>Edit</Text>
      </Pressable>
    </View>
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
    color: "black",
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
    width: "100%",
    height: 600,
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
