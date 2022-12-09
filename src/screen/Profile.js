import { View, Text, StyleSheet, Image, Button, Alert,Pressable } from 'react-native'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from '../components/Footer'
import { ScrollView } from 'react-native-gesture-handler';
import userActions from '../redux/actions/userActions'
import FormProfile from '../components/FormProfile'
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Profile() {
    let { name, lname, user, logged, id, role, photo, token, age, email } =
        useSelector((store) => store.userReducer)

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
    const { Logout, getUser } = userActions
    useEffect(() => {
        dispatch(getUser(id))
    }, []
    )
    console.log(id);
    async function desconect () {
        await dispatch(Logout(token))
        Alert.alert('Bye, see you later')
    }
    return (
        <ScrollView>
            <View style={styles.containerProfile}>
                <Text style={styles.textoUno}>Hello {name}</Text>
                <Image
                    style={styles.imageUser}
                    source={{
                        uri: `${photo}`,
                    }}
                />
                <View style={styles.containerTextProfile}>
                    <Text style={styles.textDescription}>
                        <Text style={styles.textCapacity}>Name: </Text>{name}
                    </Text>
                    <Text style={styles.textDescription}>
                        <Text style={styles.textCapacity}>LastName: </Text>{lname}
                    </Text>
                    <Text style={styles.textDescription}>
                        <Text style={styles.textCapacity}>Age: </Text>{age}
                    </Text>
                    <Text style={styles.textDescription}>
                        <Text style={styles.textCapacity}>Email: </Text>{email}
                    </Text>
                </View>
                <Pressable style={styles.ButtonDetails} onPress={desconect}>
                    <Text style={styles.textoBoton}>Logout</Text>
                </Pressable>
            </View>
            <FormProfile></FormProfile>
            <Footer></Footer>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    textDescription: {
        width: 300,
      },
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
    textCapacity: {
        fontWeight: "800",
    },
    containerProfile: {
        height: 595,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageUser: {
        width: 200,
        height: 200,
        borderRadius: 180,
    },
    textoUno: {
        marginBottom: 20,
        fontSize: 25,
        fontWeight: 'bold',
    },
    containerTextProfile: {
        marginVertical: 20,
    },
    textProfile: {
        fontSize: 20,
        marginVertical: 8,
    },

});