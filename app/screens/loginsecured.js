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
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';
import symptomtracker from './symptomtracker'; 
import datadisplay from './datadisplay';
import LoginForm from './loginform';
import userdata from './userdata';
import Entypo from 'react-native-vector-icons/Entypo';
import { NavigationActions } from 'react-navigation';
import loginscreen from './loginscreen';


export default class LoginSecured extends Component {
      static navigationOptions = {
        title: 'User Info', 
        tabBarIcon: ({tintColor}) => (<Entypo name='user' size={20}style={styles.icon}/>)
    };
      
   render() {
    const { navigate } = this.props.navigation;
    const backAction = NavigationActions.back({
         
})
    return (
     <KeyboardAvoidingView behavior="padding" style={styles.container}>
       <View style={styles.formContainer}>
            <Text style={styles.buttonText2}>Login Secured!</Text>
          </View>
      <View style = {styles.container}>
            <TouchableOpacity onPress = {()=> this.props.navigation.dispatch(backAction)}   style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        {/* <Button
          onPress={() => navigate('SymptomTracker')}
          title="Record your symptoms!"
        /> */}
      </View>
    </KeyboardAvoidingView>
    );
  }
}




const styles = StyleSheet.create({ 
  container: {
        padding: 20
    },
    buttonContainer: {
        backgroundColor: '#2980b9', 
        paddingVertical: 10,
        marginBottom: 14,
    }, 
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 18,

    },
    buttonText2: {
        textAlign: 'center',
        color: '#2980b9',
        fontWeight: '700',
        fontSize: 18,
    },
    formContainer: {
        marginTop: 15, 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexGrow: 1,
  },
})