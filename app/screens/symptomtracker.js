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

export default class SymptomTracker extends React.Component {
  static navigationOptions = {
    title: 'Symptom Tracker',
    tabBarIcon: ({ tintColor }) => (<Entypo name='text-document' size={20} style={styles.icon} />)
  };
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
          Daily Symptom Tracker: {month}/{day}/{year}
        </Text>
        <SymptomSlider
          title="Chest Pain"
        />
        <SymptomSlider
          title="Breathing Difficulty"
        />
        <SymptomSlider
          title="Stress/Anxiety Level"
        />
        <SymptomSlider
          title="Tiredness"
        />
        <Button
          // onPress={onPress} 
          title="Submit"
          color="#1382DE"
          accessibilityLabel="Submit your daily symptom report to the database."
        />
      </View>
    );
  }
}

class SymptomSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: .5,
    };
  }
  handleValueChange = (value) => {
    this.setState({
      value: value,
    });
  }
  render() {
    return (
      <View style={styles.slider}>
        <Text style={styles.clearbutton}>{this.props.title}</Text>
        <Slider
          style={styles.slider}
          value={this.state.value}
          onValueChange={this.handleValueChange}
          minimumTrackTintColor={this.colorChange(this.state.value)}
        />
        <Text style={styles.slider}>Value: {parseInt(this.state.value * 10)}</Text>
      </View>
    );
  }
  colorChange(value) {
    if (value <= .25) {
      return 'green';
    }
    else if (value > .25 && value <= .5) {
      return 'yellow';
    }
    else if (value > .5 && value <= .75) {
      return 'orange';
    }
    else {
      return 'red';
    }
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
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 24,
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
    marginBottom: 10,
    marginTop: 2,
    borderBottomWidth: 0,
    backgroundColor: '#5DADE2',
    paddingTop: 4,
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '400',
  },
  input: {
    height: 60,
    width: 400,
    marginBottom: 10,
    color: '#1D9AE1',
    paddingHorizontal: 10,
    borderBottomColor: '#000000',
    backgroundColor: '#DBE9F1',
    borderBottomWidth: 1,
    paddingLeft: 10,
    fontSize: 17,
    flex: 1,
    borderWidth: 0,
  },
  icon: {
    height: 22,
    width: 20,
  }


});