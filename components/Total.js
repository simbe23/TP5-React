import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { counterActions } from '../state/actions';

class Total extends React.Component {
  renderTotal() {
    const { counters }= this.props;
    return (
      <Text> {counters.total} </Text>

      );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.counter}>Total: {this.renderTotal()} </Text>
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


  counter: {
    flex: 1,
    color: '#2c3e50',
    fontSize: 45,
    fontWeight: '700',
    textAlign: 'center',
  },
});


const mapStateToProps = state => ({
  counters: state.counter,
});

const mapDispatchToProps = {
  increaseCounter: counterActions.increaseCounter,
  decreaseCounter: counterActions.decreaseCounter,
  removeCounter: counterActions.removeCounter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Total);
