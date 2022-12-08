import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';
import Hotel from '../screen/Hotel';
import DetailsHotel from '../screen/DetailsHotel';

const StackNav = createNativeStackNavigator();


export default function Stack() {
  return (
    <StackNav.Navigator>
        <StackNav.Screen name= "Hotel" component={Hotel}/>
        <StackNav.Screen name="Home" component={Home} />
        <StackNav.Screen name="DetailsHotel" component={DetailsHotel} />
    </StackNav.Navigator>
  )
}