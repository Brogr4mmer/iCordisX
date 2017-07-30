import React, {Component} from 'react';
import {
  Text,
  Button,
  View
} from 'react-native';
import { TabNavigator } from 'react-navigation';

export default class dataDisplay extends Component {
  static navigationOptions = {
    title: 'Data Display',
};
  render() {
    const { navigate } = this.props.navigation;
    return (
    <View style={{backgroundColor:'#87cefa'}}>
        <Text style={{paddingTop:40, fontSize: 20, textAlign: 'center'}}>Login to restore your data!</Text>
        <Button
          onPress={() => navigate('SymptomTracker')}
          title="Login!"
        />
    </View>
    );
  }
}
    

