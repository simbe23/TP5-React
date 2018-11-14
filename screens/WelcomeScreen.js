import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { totalActions } from '../state/actions';

import store from './../state/store';
import TotalContainer from './../components/TotalContainer';

class WelcomeScreen extends Component {


  render () {

      return(
        <ReduxProvider store={store}>
          <View style={styles.container}>
            <Text style={styles.titulo}>Totales</Text>
            <TouchableOpacity style={styles.buttonAdd} onPress={() => this.props.navigation.navigate('totalScreen')} >
              <Text style={styles.icon}>+</Text>
            </TouchableOpacity>

            <TotalContainer />
          </View>
        </ReduxProvider>
      );
  }
}



export default WelcomeScreen;


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
  },

  titulo: {
    fontSize:32,
  },
  buttonAdd: {
    backgroundColor: '#2ecc71',
    paddingVertical: 15,
    paddingHorizontal: 35,
  },
  icon: {
    color: 'white',
    fontSize: 45,
  },
})
