import React, { Component } from 'react';
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
import userdata from './userdata';
import Entypo from 'react-native-vector-icons/Entypo';
import loginsecured from './loginsecured';
import createaccount from './createaccount';

async function login(username, password) {

  const myRequest = new Request('http://ec2-34-213-32-154.us-west-2.compute.amazonaws.com/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: username,
      password: password,
    })
  })
  const response = await fetch(myRequest)
  return response.json();
}
  class LoginScreen extends Component {
    static navigationOptions = {
      title: 'User Info',
      tabBarIcon: ({ tintColor = '#87cefa' }) => (<Entypo name='user' size={20} style={styles.icon} />
      )

    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.container}>
            {/* <Button
          onPress={() => navigate('SymptomTracker')}
          title="Record your symptoms!"
        /> */}
            <View style={styles.logoContainer}>
              <Image style={styles.logo}
                source={require('../../cordisx.png')} />
            </View>
            <View style={styles.formContainer}>
              <LoginForm onPress={() =>navigate('loginsecured')} register={() => navigate('createaccount')} />
            </View>
          </View>
        </KeyboardAvoidingView>
      );
    }
    handlePress = async (username, password) => {
      try {
        const result = await login(username, password)
        if (result.token == token) {
          this.props.navigation.navigate('loginsecured')
        }
        else {
          this.props.navigation.navigate('LoginScreen')
        }
      }
      catch (error) {
        console.log(error)
      }
    }
  }
  //register navigate to createAccount

  // const SimpleApp = StackNavigator({
  //   LoginScreen: { screen: loginscreen}, 
  //   LoginSecured: { screen: loginsecured},
  // });

  const Stack = StackNavigator({
    loginscreen: { screen: LoginScreen },
    loginsecured: { screen: loginsecured },
    createaccount: { screen: createaccount },
  })

  //  const Stack1 = StackNavigator({
  //      loginscreen: {screen: LoginScreen},
  //      createaccount: {screen: createaccount},
  //  })

  //  const Root = TabNavigator({
  //     SymptomTracker: { screen: symptomtracker },
  //     DataDisplay: { screen: datadisplay},
  // }); 

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    logo: {
      width: 380,
      height: 119,
      marginTop: 16
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
    },
    icon: {
      width: 20,
      height: 22,
    },

  });

  export default Stack