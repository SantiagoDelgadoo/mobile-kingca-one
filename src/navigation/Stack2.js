import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';
import Cities from '../screen/Cities';
import DetailsCity from '../screen/DetailsCity';

const StackNav = createNativeStackNavigator();


export default function Stack2() {
  return (
    <StackNav.Navigator>
        <StackNav.Screen name="Cities" component={Cities} />
        <StackNav.Screen name="DetailsCity" component={DetailsCity} />
    </StackNav.Navigator>
  )
}