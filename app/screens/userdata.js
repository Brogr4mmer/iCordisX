import React, {Component} from 'react';
import {
  Text,
  Button,
  View,
  AppRegistry,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';
import symptomtracker from './symptomtracker'; 
import datadisplay from './datadisplay';
import LoginForm from './loginform';
import Entypo from 'react-native-vector-icons/Entypo';

export default class UserData extends Component {
      static navigationOptions = {
        title: 'User Data', 
        tabBarIcon: ({tintColor}) => (<Entypo name='user' size={20}style={styles.icon}/>)
    };
   render() {
    const { navigate } = this.props.navigation;
    return (
     <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style = {styles.container}>
        {/* <Button
          onPress={() => navigate('SymptomTracker')}
          title="Record your symptoms!"
        /> */}
        <View style={{backgroundColor:'#87cefa'}}>
        <Text style={{paddingTop:40, fontSize: 20, textAlign: 'center'}}>User Data</Text>
        <Button
          onPress={() => Linking.openURL('http://ec2-34-213-32-154.us-west-2.compute.amazonaws.com/')}
          title="Server"
        />
         </View>
          <View style={styles.formContainer}>
            <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>View ECG Data</Text>    
            </TouchableOpacity>
            <TouchableOpacity onPress = {this.props.onPress}  style={styles.buttonContainer2}>
                    <Text style={styles.buttonText}>View Journal Entries</Text>
                </TouchableOpacity>
          </View>
      </View>
    </KeyboardAvoidingView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#ffffff"
  },
logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    marginBottom: 30,
  },
logo: {
    width: 380, 
    height: 119,
  },
 buttonText: {
        textAlign: 'center', 
        color: '#FFFFFF', 
        fontWeight: '500', 
        fontSize: 16,
    },
 buttonContainer: {
        backgroundColor: '#2FD6D6',
        paddingVertical: 10, 
        marginTop: 30,
    },
 buttonContainer2: {
     backgroundColor: '#2FD6D6', 
     paddingVertical: 10, 
     marginTop: 15,
 }
});
