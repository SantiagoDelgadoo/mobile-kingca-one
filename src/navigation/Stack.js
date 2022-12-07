import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';

const StackNav = createNativeStackNavigator();


export default function Stack() {
  return (
    <StackNav.Navigator>
        <StackNav.Screen name="Home" component={Home} />
    </StackNav.Navigator>
  )
}