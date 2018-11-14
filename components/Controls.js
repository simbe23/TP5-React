import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { counterActions } from '../state/actions';




class Controls extends React.Component {
  render() {
    const { addCounter, removeCounter, addTotal } = this.props;



    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonAdd} onPress={addCounter} >
          <Text style={styles.text}> + </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonAdd}>
          <Text style={styles.text} onPress={addTotal}> Guardar </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  buttonAdd: {
    backgroundColor: '#2ecc71',
    paddingVertical: 15,
    paddingHorizontal: 35,
  },

  buttonRemove:{
    backgroundColor: '#e74c3c',
    paddingVertical: 15,
    paddingHorizontal: 35,
  },

  text: {
    color: 'black',
    fontWeight: '700',
  },
});

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  addCounter: counterActions.addCounter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Controls);
