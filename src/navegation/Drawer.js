import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Cities from "../screen/Cities";
import Home from "../screen/Home";
import Stack from "../navigation/Stack";
import Stack2 from "../navigation/Stack2";

const DrawerNav = createDrawerNavigator();

export default function Drawer() {
  return (
    <DrawerNav.Navigator initialRouteName="Home">
      <DrawerNav.Screen name="Home" component={Home} />
      <DrawerNav.Screen name="Cities" component={Stack2} />
      <DrawerNav.Screen name="Hotels" component={Stack} />
    </DrawerNav.Navigator>
  );
}