import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Cities from "../screen/Cities";
import Home from "../screen/Home";
import Stack from "../navigation/Stack";
import Stack2 from "../navigation/Stack2";
import SignUp from "../screen/SignUp";
import Profile from "../screen/Profile";
import MyReactions from "../screen/MyReactions";

const DrawerNav = createDrawerNavigator();

export default function Drawer() {
  return (
    <DrawerNav.Navigator initialRouteName="Home">
      <DrawerNav.Screen name="Home" component={Home} />
      <DrawerNav.Screen name="Cities" component={Stack2} />
      <DrawerNav.Screen name="Hotels" component={Stack} />
      <DrawerNav.Screen name="SignUp" component={SignUp} />
      <DrawerNav.Screen name="Profile" component={Profile} />
      <DrawerNav.Screen name="MyReactions" component={MyReactions} />
    </DrawerNav.Navigator>
  );
}