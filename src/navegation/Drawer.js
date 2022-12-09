import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useDispatch, useSelector } from "react-redux";
import Cities from "../screen/Cities";
import Home from "../screen/Home";
import SignIn from "../screen/SignIn";
import Stack from "../navigation/Stack";
import Stack2 from "../navigation/Stack2";
import SignUp from "../screen/SignUp";
import Profile from "../screen/Profile";
import userActions from "../redux/actions/userActions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DrawerNav = createDrawerNavigator();

export default function Drawer() {
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
  return (
    <DrawerNav.Navigator initialRouteName="Home">
      <DrawerNav.Screen name="Home" component={Home} />
      <DrawerNav.Screen name="Cities" component={Stack2} />
      <DrawerNav.Screen name="Hotels" component={Stack} />
      <DrawerNav.Screen name="SignIn" component={SignIn}/>
      <DrawerNav.Screen name="SignUp" component={SignUp} />
      <DrawerNav.Screen name="Profile" component={Profile} />
    </DrawerNav.Navigator>
  );
}