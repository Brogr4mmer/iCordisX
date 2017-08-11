import React, {Component} from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';

export default class DataDisplay extends Component {
  static navigationOptions = {
    title: 'Data Display',
     tabBarIcon: ({tintColor}) => (<Entypo name='bar-graph' size={20}style={styles.icon}/>)
    
};
  render() {
    const { navigate } = this.props.navigation;
    return (
    <View style={{backgroundColor:'#87cefa'}}>
        <Text style={{paddingTop:40, fontSize: 20, textAlign: 'center'}}>Data Display</Text>
        <Button
          onPress={() => navigate('SymptomTracker')}
          title="test"
        />
    </View>
    );
  }
}
    
const styles = StyleSheet.create({ 
  icon: {
    height: 22, 
    width: 20,
  }

})