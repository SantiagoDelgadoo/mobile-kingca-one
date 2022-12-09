import { View, Text, StyleSheet, Image, Button, Alert, } from 'react-native'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from '../components/Footer'
import { ScrollView } from 'react-native-gesture-handler';
import userActions from '../redux/actions/userActions'

export default function Profile() {
    let { name, lastName, user, logged, id, role, photo, token } =
        useSelector((store) => store.userReducer)
    const dispatch = useDispatch()
    const { Logout, getUser } = userActions
    useEffect(() => {
        dispatch(getUser(id))
    }, []
    )
    console.log(name, lastName, token);
    const desconect = async () => {
        await dispatch(Logout(token))
        Alert.alert('Bye, see you later')
    }
    return (
        <ScrollView>
            <View style={styles.containerProfile}>
                <Text style={styles.textoUno}>Hello Santiago{name}</Text>
                <Image
                    style={styles.imageUser}
                    source={{
                        uri: `https://www.clarin.com/img/2021/12/03/scaloni-volvio-a-subir-un___XAUV0IDDy_2000x1500__1.jpg`,
                    }}
                />
                <View style={styles.containerTextProfile}>
                    <Text style={styles.textProfile}>Name: Santiago</Text>
                    <Text style={styles.textProfile}>LastName: Delgado</Text>
                    <Text style={styles.textProfile}>Age: 19</Text>
                    <Text style={styles.textProfile}>Email: csssss@hotmail.com</Text>
                </View>
            </View>
            <Footer></Footer>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
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
    containerTextProfile:{
        marginVertical: 20,
    },
    textProfile: {
        fontSize: 20,
        marginVertical: 8,
    },

});