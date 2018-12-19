import React from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet, Image, geolocation } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Tabs from './Tabs';
import Feed from './feed';
import CheckIn from './checkIn';
import PlanAhead from './planAhead';


class HomeScreen extends React.Component {

  componentDidMount = () => {
  }

  static navigationOptions = ({ navigation }) => ({
    title: <Ionicons name="md-checkmark-circle" style={styles.iconCenter} />,

    headerRight: <TouchableOpacity onPress={() => navigation.navigate('Page2')}>
    <Ionicons name="md-cog" style={styles.iconRight} /></TouchableOpacity>,

    headerStyle: {
      backgroundColor: '#FFF',
    },
  });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.userName}>Stephan Holly</Text>
        <Image
        style={styles.picture}
        source={require('../../assets/icon.png')}
        />
        <Tabs/>
          {(this.props.checkIn === true)? <CheckIn /> : null}
          {(this.props.feed === true)? <Feed /> : null}
          {(this.props.planAhead === true)? <PlanAhead /> : null}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconCenter: {
    fontSize: 32,
  },
  iconRight: {
    marginRight: 15,
    fontSize: 32,
    color: "grey",
  },
  userName: {
    fontSize: 32,
    paddingTop: 5,
  },
  picture: {
    margin: 10,
  }
});

const mapStateToProps = (state) => {
  return {
    planAhead: state.tabs.planAhead,
    feed: state.tabs.feed,
    checkIn: state.tabs.checkIn,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
