import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  { createStackNavigator }  from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import TotalScreen from './screens/TotalScreen';

export default class App extends React.Component {
  render () {
      return(
        <AppStackNavigator />
      );
  }
}

const AppStackNavigator = new createStackNavigator({
  welcomeScreen:{screen:WelcomeScreen},
  totalScreen:{screen:TotalScreen}
})

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent: 'center',
  }
})
