import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Cities from "../screen/Cities";

const DrawerNav = createDrawerNavigator();

export default function Drawer() {
  return (
    <DrawerNav.Navigator initialRouteName="Home">
      <DrawerNav.Screen name="Cities" component={Cities} />
    </DrawerNav.Navigator>
  );
}