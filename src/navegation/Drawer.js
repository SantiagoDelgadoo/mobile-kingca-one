import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Cities from "../screen/Cities";
import Home from "../screen/Home";
import SignIn from "../screen/SignIn";
import Stack from "../navigation/Stack";
import Stack2 from "../navigation/Stack2";
import SignUp from "../screen/SignUp";

const DrawerNav = createDrawerNavigator();

export default function Drawer() {
  return (
    <DrawerNav.Navigator initialRouteName="Home">
      <DrawerNav.Screen name="Home" component={Home} />
      <DrawerNav.Screen name="Cities" component={Stack2} />
      <DrawerNav.Screen name="Hotels" component={Stack} />
<<<<<<< HEAD
      <DrawerNav.Screen name="SignIn" component={SignIn}/>
=======
      <DrawerNav.Screen name="SignUp" component={SignUp} />
>>>>>>> fb8e3104719453f0896d4de8d37a0838ae10f760
    </DrawerNav.Navigator>
  );
}