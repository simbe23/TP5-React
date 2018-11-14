import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { counterActions } from '../state/actions';     //CREAR ACTIONS

class TotalContainer extends React.Component {

    renderTotal() {
      const { total, removeTotal, addTotal } = this.props;
      return total.totales.map((data,index) => (
        <View key={index} style={styles.container} >
          <Text style={styles.index}> {index + 1} </Text>
          <Text style={styles.counter}> {data} </Text>
        </View>

        ));
    }

    render() {
      return (
        <View>
          {this.renderTotal()}
        </View>
      );
    }
  }





const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#eee',
    borderBottomWidth: 2,
    borderColor: '#e1e1e1',
    marginVertical: 10,
  },

  index: {
    color: '#999',
    paddingLeft: 7,
    paddingBottom: 50,
  },

  counter: {

    color: '#2c3e50',
    fontSize: 45,
    fontWeight: '700',
    textAlign: 'center',
  },

  buttonsContainer: {
    flexDirection: 'row',
  },

  buttonAdd: {
    backgroundColor: '#2ecc71',
    paddingVertical: 15,
    paddingHorizontal: 35,
  },

  buttonRemove: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 35,
  },

  buttonDelete: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 35,
  },

  icon: {
    color: 'white',
    fontSize: 45,
  },
});

const mapStateToProps = state => ({
  total:state.total,
});

const mapDispatchToProps = {
    removeTotal: counterActions.removeTotal,
    addTotal: counterActions.addTotal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TotalContainer);
