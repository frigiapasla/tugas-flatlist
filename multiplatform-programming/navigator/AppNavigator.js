import React from 'react';
import { StyleSheet, Text, View, createStackNavigator, createAppContainer } from 'react-navigation';

import ComponentScreen from '../screens/ComponentScreen';
import StudentScreen from '../screens/StudentScreen';
import HomeScreen from '../screens/HomeScreen';
import ListKost from '../screens/ListKost';


const navigator = createStackNavigator({
    Component: ComponentScreen,
    Student: StudentScreen,
    Home: HomeScreen,
    Kost: ListKost
},{
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerTitle: 'App MultiPlatform'
    }
});

export default createAppContainer(navigator);