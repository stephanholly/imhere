import React from 'react';
import { StackNavigator } from 'react-navigation';

// import components here
import HomeScreen from './components/HomeScreen'


const Navigator = StackNavigator({
  HomeScreen: {screen: HomeScreen}

});

export default Navigator;
