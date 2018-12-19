import React from 'react';
import {TouchableOpacity,Text,Image, View, Button, StyleSheet, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import components here
import * as tabs from '../actions/tabs';


class Tabs extends React.Component {

  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity style={styles.button}>
            <Button onPress={() => this.props.tabs.checkInTab()} style={styles.button} color='#2D9CDB' title="check in"/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Button onPress={() => this.props.tabs.feedTab()} style={styles.button} color='#2D9CDB' title="feed"/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Button onPress={() => this.props.tabs.planAheadTab()} style={styles.button} color='#2D9CDB' title="plan ahead"/>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',

  },
  button: {
    width: "33.333%",
    height: 45,
    paddingTop: 3,
    backgroundColor: 'white',
    borderColor: '#2D9CDB',
    borderWidth: 0.5,
  }
});

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      tabs: bindActionCreators(tabs, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
