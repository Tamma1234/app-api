import React from "react";
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Campus from "./src/views/campus";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer initialRouteName="Campus">
            <Stack.Navigator>
                <Stack.Screen name="campus" component={Campus} />
            </Stack.Navigator>
        </NavigationContainer>
       
    );
}
