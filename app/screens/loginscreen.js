import React, {Component} from 'react';
import {
  Text,
  Button,
  View,
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';
import symptomtracker from './symptomtracker'; 
import datadisplay from './datadisplay';

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
};
   render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          onPress={() => navigate('Root')}
          title="Record your symptoms!"
        />
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  symptomtracker: { screen: symptomtracker },
});

    
 const Root = TabNavigator({
    SymptomTracker: { screen: symptomtracker },
    DataDisplay: { screen: datadisplay},
}); 

