import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { DrawerNavigator } from 'react-navigation';
import symptomtracker from './symptomtracker';
import { Root } from '../index.js';
import loginscreen from './loginscreen';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usertext: '', passtext: ''
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.register} style={styles.buttonContainer2}>
                    <Text style={styles.buttonText2}>Create Account</Text>
                </TouchableOpacity>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="blue"
                />
                <TextInput style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    onChangeText={(usertext) => this.setState({ usertext })}
                />
                <TextInput style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="go"
                    secureTextEntry
                    onChangeText={(passtext) => this.setState({ passtext })}
                />
                <TouchableOpacity onPress={this.handlePress} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
    handlePress = async () => {
        const { usertext, passtext } = this.state
        if (usertext && passtext) {
            try {
                const result = await fetch('https://cordisx.com/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: usertext,
                        password: passtext,
                    })
                })
                const body = await result.json()
                console.log(result, body)
                //const body = await result.text()
                //console.log(body)
                if (body.success === true) {
                    this.props.onPress(usertext, passtext);
                }
            }
            catch (error) {
                console.log(error)
            }

        }
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        width: 250,
        backgroundColor: '#b0c4de',
        marginBottom: 18,
        color: '#000000',
        paddingHorizontal: 10,
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 10,
        marginBottom: 14,
    },

    buttonContainer2: {
        backgroundColor: '#2FD6D6',
        paddingVertical: 10,
        marginBottom: 30,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 18,

    },
    buttonText2: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: 16,
    }

});