import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';
import PropTypes from 'prop-types';
import Entypo from 'react-native-vector-icons/Entypo';


export default class Location extends Component {
  static navigationOptions = {
        title: 'Location', 
        tabBarIcon: ({tintColor}) => (<Entypo name='location' size={20}style={styles.icon}/>)
    };
  render() {
    return (
    <MapView
      style = {styles.map}
      initialRegion={{
        latitude: 33.6645854,
        longitude: -117.81885789999998,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0521, //.0421
      }}
    /> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});