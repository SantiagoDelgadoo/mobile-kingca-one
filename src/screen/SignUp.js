import { View, Text, TextInput, Button, ImageBackground, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '../components/Footer';
import axios from 'axios';
import { base_url } from '../api/url';

export default function SignUp() {
    const [datosOfNewUser, setDatosOfNewUser] = useState({
        name: "",
        lastName: "",
        photo: "",
        age: null,
        email: "",
        password: "",
        role: 'user',
    });
    async function newUser() {

        axios
            .post(`${base_url}auth/sign-up`, datosOfNewUser)
            .then((Response) => {
                if (!Response.data.success) {
                    Response.data.message.map((message)=>{
                        Alert.alert(`${message}`)
                    })
                } else {
                    Alert.alert(`Your account was successfully created `)
                }
            })
    }
    const image = { uri: "https://cdn.discordapp.com/attachments/1032383580590055512/1050556495424671864/fondo-signup.webp" };
    return (
        <ScrollView>
            <ImageBackground source={image} resizeMode="cover" style={styles.imagefondo}>
                <View style={styles.containerImg}>
                    <View>
                        <View style={styles.textTitleContainer}>
                            <Text style={styles.segundoTexto}><Text style={styles.lineOrange}>| </Text> Create your account</Text>
                            <TextInput onChangeText={(newText) =>
                                setDatosOfNewUser({ ...datosOfNewUser, name: newText })
                            }
                                defaultValue={datosOfNewUser.name} style={styles.textTitleTwo} type="text" placeholderTextColor="black" placeholder="Enter your first name" />

                            <TextInput onChangeText={(newText) =>
                                setDatosOfNewUser({ ...datosOfNewUser, lastName: newText })
                            }
                                defaultValue={datosOfNewUser.lastName} style={styles.textTitleTwo} type="text" placeholderTextColor="black" placeholder="Enter your last name" />

                            <TextInput onChangeText={(newText) =>
                                setDatosOfNewUser({ ...datosOfNewUser, age: newText })
                            }
                                defaultValue={datosOfNewUser.age} style={styles.textTitleTwo} type="text" placeholderTextColor="black" placeholder="Enter your age" />

                            <TextInput onChangeText={(newText) =>
                                setDatosOfNewUser({ ...datosOfNewUser, email: newText })
                            }
                                defaultValue={datosOfNewUser.email} style={styles.textTitleTwo} type="text" placeholderTextColor="black" placeholder="Enter your email" />

                            <TextInput onChangeText={(newText) =>
                                setDatosOfNewUser({ ...datosOfNewUser, photo: newText })
                            }
                                defaultValue={datosOfNewUser.photo} style={styles.textTitleTwo} type="text" placeholderTextColor="black" placeholder="Enter your photo" />

                            <TextInput onChangeText={(newText) =>
                                setDatosOfNewUser({ ...datosOfNewUser, password: newText })
                            }
                                defaultValue={datosOfNewUser.password} style={styles.textTitleTwo} secureTextEntry={true}
                                autoCorrect={false} placeholderTextColor="black" placeholder="Enter your password" />

                            <Button onPress={newUser} title='Send' color={'#ea5318'}></Button>
                        </View>
                        <View>
                            <Text style={styles.segundoTexto} ><Text style={styles.lineOrange}>|</Text> Already have an account?</Text>
                            <Button title='Sign in with account' color='#ea5318'></Button>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <Footer></Footer>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    imagefondo: {
        height: 590,
        justifyContent: 'center',
        flex: 1,
    },
    containerImg: {
        backgroundColor: "rgba(0,0,0,.606)",
        height: 700,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lineOrange: {
        color: '#ea5318',
        fontSize: 24,
    },
    textTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        padding: 10,
    },
    textTitleTwo: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ea5318',
        padding: 5,
        fontSize: 15,
        marginVertical: 5,
        backgroundColor: 'white',
    },
    segundoTexto: {
        color: 'white',
        padding: 10,
        fontSize: 22,
        fontWeight: 'bold',
    },
});