import React, { Component } from 'react';
import {
    Slider,
    Button,
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    AppRegistry,
    Platform
} from 'react-native';
import AutoGrowingTextInput from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export default class Journal extends React.Component {
    static navigationOptions = {
        title: 'Journal',
        tabBarIcon: ({ tintColor }) => (<Entypo name='text-document' size={20} style={styles.icon} />)
    };
    constructor(props) {
        super(props);
        this.state = { textValue: 'No noticeable symptoms.\n' };
    }
    render() {
        const { navigate } = this.props.navigation;
        const now = new Date();
        const day = now.getDate();
        const month = now.getMonth() + 1;
        const year = now.getFullYear();
        //{new Date().toString()}
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Journal Entry: {month}/{day}/{year}
                </Text>
                <View style={styles.inputcontainer}>
                    <TextInput
                        style={styles.input}
                        multiline={true}
                        value={this.state.textValue}
                        onChange={(event) => this.onChange(event)}
                        placeholder={'Journal Entry'}
                        placeholderTextColor='#66737C'
                        maxHeight={200}
                        minHeight={60}
                        ref={(r) => { this.input = r; }}
                    />
                    <TouchableOpacity style={styles.button} onPress={() => this.resetTextInput()}>
                        <Text style={styles.symptoms}>Clear Text</Text>
                    </TouchableOpacity>
                </View>
                <Button
                        // onPress={onPress} 
                        title="Submit"
                        color="#1382DE"
                        accessibilityLabel="Submit your daily symptom report to the database."
                    />
            </View>
        );
    }
    onChange(event) {
        this.setState({ textValue: event.nativeEvent.text || '' });
    }
    resetTextInput() {
        this.input.clear();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    inputcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#76c6ff',
        paddingLeft: 20,
        paddingRight: 0,
        marginTop: 4,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 1,
        fontWeight: 'bold',
        padding: 22,
    },
    symptoms: {
        fontSize: 17,
        fontWeight: '400',
        color: '#FFFFFF',
    },
    clearbutton: {
        fontSize: 16,
        fontWeight: '500',
        color: '#FFFFFF'
    },
    slider: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 3,
        marginTop: 2,
        borderBottomWidth: 0,
        backgroundColor: '#5DADE2',
        paddingTop: 4,
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '400',
    },
    input: {
        height: 150,
        width: 400,
        marginBottom: 28,
        color: '#1D9AE1',
        paddingHorizontal: 20,
        borderBottomColor: '#000000',
        backgroundColor: '#DBE9F1',
        borderBottomWidth: 0,
        paddingLeft: 20,
        fontSize: 17,
        flex: 1,
        borderWidth: 0,
    },
    icon: {
        height: 22,
        width: 20,
    }


});