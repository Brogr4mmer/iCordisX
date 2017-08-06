import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import {Root} from './app/index.js'
import {Toot} from './app/index.js'

export default class iCordisX extends Component {
  render() {
     return (
      <Root />
   )
  }
}

AppRegistry.registerComponent('iCordisX', () => iCordisX);

