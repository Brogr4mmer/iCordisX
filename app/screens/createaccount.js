import React, {Component} from 'react';
import {
  Text,
  Button,
  View,
  AppRegistry,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';
import symptomtracker from './symptomtracker'; 
import datadisplay from './datadisplay';
import LoginForm from './loginform';
import userdata from './userdata';
import Entypo from 'react-native-vector-icons/Entypo';
import loginsecured from './loginsecured';
import loginscreen from './loginscreen';


class CreateAccount extends Component {
      static navigationOptions = {
        title: 'User Info', 
        tabBarIcon: ({tintColor= '#87cefa'}) => (<Entypo name='user' size={20}style={styles.icon}/>
  ),}
    constructor(props) {
      super(props);
        this.state = {
            usertext: '', passtext: ''
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
          <View style={styles.formContainer}>

            <TextInput style={styles.input}
                placeholder="Username" 
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                value={this.state.usertext}
                onSubmitEditing={() => this.passwordInput.focus()}
                onChangeText = {(usertext) => this.setState({usertext})}
                />
            <TextInput style={styles.input}
                placeholder="Password"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="go"
                value={this.state.passtext}
                secureTextEntry          
                //ref={(input) => this.passwordInput = input}
                onChangeText = {(passtext) => this.setState({passtext})}
                />
             <Button
           // onPress={onPress} 
            title="Submit"
            color="#1382DE"
            accessibilityLabel="Create Account"
            onPress = {this.handlePress}
            />
          </View>
      </View>
    </KeyboardAvoidingView>
    );
  }
  handlePress = async () => {
    try{
    const result = await fetch('ec2-34-213-32-154.us-west-2.compute.amazonaws.com/api/user', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.usertext, 
        password: this.state.passtext,
      })
  })
    this.props.navigation.navigate('loginsecured')
    }
    catch (error){
      console.log(error)
    }
}
}

// const SimpleApp = StackNavigator({
//   LoginScreen: { screen: loginscreen}, 
//   LoginSecured: { screen: loginsecured},
// });

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
 input: {
    height: 40, 
    width: 250,
    backgroundColor: '#b0c4de',
    marginBottom: 10, 
    color: '#000000',
    paddingHorizontal: 10,
    },
});

export default CreateAccount