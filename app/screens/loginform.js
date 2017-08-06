import React, {Component} from 'react'; 
import {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native'; 
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';
import symptomtracker from './symptomtracker'; 
import {Root} from '../index.js';

export default class LoginForm extends Component{ 
    render() {
        return (
            <View style={styles.container}> 
            <TouchableOpacity onPress = {this.props.register}  style={styles.buttonContainer2}>
                    <Text style={styles.buttonText2}>Create an Account</Text>    
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
                
                />
                <TextInput style={styles.input}
                placeholder="Password"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="go"
                secureTextEntry          
                ref={(input) => this.passwordInput = input}
                />
                <TouchableOpacity onPress = {this.props.onPress}  style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
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
        marginBottom: 10, 
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
        marginBottom: 25,
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