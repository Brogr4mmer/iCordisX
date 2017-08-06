import React, {Component} from 'react';
import {
  Text,
  Button,
  View,
  AppRegistry,
  Image,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';
import symptomtracker from './symptomtracker'; 
import datadisplay from './datadisplay';
import LoginForm from './loginform';
import loginsecured from './loginsecured';
import Entypo from 'react-native-vector-icons/Entypo';


export default class LoginScreen extends Component {
      static navigationOptions = {
        title: 'User Info', 
        render() {
          <View>
              <Entypo name='user' />
          </View>
        }
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
          <View style = {styles.logoContainer}> 
             <Image style = {styles.logo}
            source = {require('../../cordisx.png')}/>
          </View> 
          <View style={styles.formContainer}>
            <LoginForm onPress = {()=> navigate('Root')}  register = {()=> navigate ('SymptomTracker')}/>
          </View>
      </View>
    </KeyboardAvoidingView>
    );
  }
}

// const SimpleApp = StackNavigator({
//   LoginScreen: { screen: loginscreen}, 
//   LoginSecured: { screen: loginsecured},
// });

    
 const Root = TabNavigator({
    SymptomTracker: { screen: symptomtracker },
    DataDisplay: { screen: datadisplay},
}); 

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#ffffff"
  },
  logo: {
    width: 380, 
    height: 119,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    marginBottom: 30,
  },
  formContainer: {
    marginTop: 35, 
    justifyContent: 'center', 
    alignItems: 'center', 
    flexGrow: 1,
  }

});
