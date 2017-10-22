import React, { Component } from 'react';
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
import { post } from '../api';
import { get } from '../api';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker';
import { NavigationActions } from 'react-navigation';

var radio_props = [
  { label: 'Male     ', value: 0 },
  { label: 'Female', value: 1 }
];

class CreateAccount extends Component {
  static navigationOptions = {
    title: 'User Info',
    tabBarIcon: ({ tintColor = '#87cefa' }) => (<Entypo name='user' size={20} style={styles.icon} />
    ),
  }
  constructor(props) {
    super(props);
    this.state = {
      usertext: '',
      passtext: '',
    };
  }
  render() {
    console.log(this.state)
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.container}>
          {/* <Button
          onPress={() => navigate('SymptomTracker')}
          title="Record your symptoms!"
        /> */}
          <View style={styles.formContainer}>
            <TextInput style={styles.input}
              placeholder="First Name"
              placeholderTextColor="rgba(255,255,255,0.7)"
              returnKeyType="next"
              //value={this.state.usertext}
              onSubmitEditing={() => this.passwordInput.focus()} />
            <TextInput style={styles.input}
              placeholder="Last Name"
              placeholderTextColor="rgba(255,255,255,0.7)"
              returnKeyType="next"
              //value={this.state.usertext}
              onSubmitEditing={() => this.passwordInput.focus()} />
            <DatePicker style={styles.birthday}
              style={{ width: 200 }}
              date={this.state.date}
              mode="date"
              placeholder="Select Birthday"
              format="YYYY-MM-DD"
              minDate="1937-01-01"
              maxDate="2007-12-30"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => { this.setState({ date: date }) }}
            />
            <View style={styles.gender}>
              <RadioForm
                radio_props={radio_props}
                initial={0}
                onPress={(value) => { this.setState({ value: value }) }}
                formHorizontal={true}
                labelHoritonztal={true}
                animation={true}
                buttonSize={20}
                buttonWrapStyle={{ marginLeft: 40 }}
                borderWidth={1}
              />
            </View>
            <TextInput style={styles.input0}
              placeholder="Username"
              placeholderTextColor="rgba(255,255,255,0.7)"
              returnKeyType="next"
              value={this.state.usertext}
              onSubmitEditing={() => this.passwordInput.focus()}
              onChangeText={(usertext) => this.setState({ usertext })}
            />
            <TextInput style={styles.input0}
              placeholder="Password"
              placeholderTextColor="rgba(255,255,255,0.7)"
              returnKeyType="go"
              value={this.state.passtext}
              secureTextEntry
              //ref={(input) => this.passwordInput = input}
              onChangeText={(passtext) => this.setState({ passtext })}
            />
            <Button
              title="Submit"
              color="#1382DE"
              accessibilityLabel="Create Account"
              onPress={this.handlePress}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
  handlePress = async () => {

    const { dispatch } = this.props.navigation;
    const resetAction = NavigationActions.reset({
      index: 0,
      actions:
      [
        NavigationActions.navigate({ routeName: 'loginsecured' })
      ]
    })

    try {
      const result = await fetch('https://cordisx.com/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.usertext,
          password: this.state.passtext,
        })
      })
      /* const result = await post('user', {
 
       })
       */
      console.log(result)
      const body = await result.text()
      console.log(body)
      dispatch(resetAction)
    }
    catch (error) {
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
    marginBottom: 17,
    color: '#000000',
    paddingHorizontal: 10
  },
  input0: {
    height: 40,
    width: 250,
    backgroundColor: '#1368C7',
    marginBottom: 17,
    color: '#000000',
    paddingHorizontal: 10,
  },
  gender: {
    alignItems: 'flex-start',
    marginBottom: 12,
    marginTop: 12
  },
  birthday: {
    height: 30
  }

});

export default CreateAccount