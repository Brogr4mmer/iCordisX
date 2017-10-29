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

async function dailyReport(createdOn, chestPain, breathingDifficulty, stressLevel, tiredness) {
  try {
    const response = await fetch('http://ec2-34-213-32-154.us-west-2.compute.amazonaws.com/api/dailyReport', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        createdOn: createdOn,
        chestPain: chestPain,
        breathingDifficulty: breathingDifficulty,
        stressLevel: stressLevel,
        tiredness: tiredness,
      })
    });
    return response.json();
  } catch (error) {
    console.log(error)
  }
}

export default class SymptomTracker extends React.Component {
  static navigationOptions = {
    title: 'Symptom Tracker',
    tabBarIcon: ({ tintColor }) => (<Entypo name='text-document' size={20} style={styles.icon} />)
  };

  state = {
    submitted: null,
    chestPain: .5,
    breathingDifficulty: .5,
    stressLevel: .5,
    tiredness: .5,
  }

  render() {
    const { navigate } = this.props.navigation;
    const now = new Date();
    now.setUTCHours(0, 0, 0, 0); //make time consistent, only use date portion (year, month, day)
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    //{new Date().toString()} 
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Daily Symptom Tracker: {month}/{day}/{year}
        </Text>
        <Text style={styles.welcome2}>
          Submitted: {this.state.submitted ? 'yes' : 'no'}
        </Text>
        <SymptomSlider
          title="  Chest Pain"
          value={this.state.chestPain}
          onValueChange={(value) => this.setState({ chestPain: value })}
        />
        <SymptomSlider
          title="  Breathing Difficulty"
          value={this.state.breathingDifficulty}
          onValueChange={(value) => this.setState({ breathingDifficulty: value })}
        />
        <SymptomSlider
          title="  Stress/Anxiety Level"
          value={this.state.stressLevel}
          onValueChange={(value) => this.setState({ stressLevel: value })}
        />
        <SymptomSlider
          title="  Tiredness"
          value={this.state.tiredness}
          onValueChange={(value) => this.setState({ tiredness: value })}
        />
        <Button
          onPress={this.handlePress}
          title="Submit"
          color="#1382DE"
          accessibilityLabel="Submit your daily symptom report to the database."
        />
      </View>
    );
    
  }
  handlePress = async () => {
    try {
      const createdOn = new Date();
      createdOn.setUTCHours(0, 0, 0, 0); // make time consistent, only use date portion (year, month, day)

      const { chestPain, breathingDifficulty, stressLevel, tiredness } = this.state

      const result = await dailyReport(createdOn, chestPain, breathingDifficulty, stressLevel, tiredness)
      this.setState({ submitted: true })
    }
    catch (error) {
      console.log(error)
    }
  }
}

class SymptomSlider extends Component {
  render() {
    return (
      <View style={styles.slider1}>
        <Text style={styles.clearbutton}>{this.props.title}</Text>
        <Slider
          style={styles.slider}
          value={this.props.value}
          onValueChange={this.props.onValueChange}
          minimumTrackTintColor={this.colorChange(this.props.value)}
        />
        <Text style = {styles.clearbutton1}> Value: {parseInt(this.props.value * 10)}</Text>
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
    padding: 10,
  },
  welcome2: {
    fontSize: 20,
    textAlign: 'center',
    margin: 1,
    fontWeight: 'bold',
    padding: 8,
    color: '#2E86C1',
  },
  symptoms: {
    fontSize: 17,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  clearbutton: {
    fontSize: 14.5,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  clearbutton1: {
    fontSize: 14.5,
    fontWeight: '400',
    color: '#FFFFFF'
  },
  slider: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    marginTop: 2,
    borderBottomWidth: 0,
    backgroundColor: '#CEF1F9', 
    paddingTop: 4,
    borderRadius: 2, 
    borderWidth: 2,
    borderColor: '#FFFFFF'
  },
  slider1: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    marginTop: 2,
    borderBottomWidth: 0,
    backgroundColor: '#2980b9',
    paddingTop: 4,
    borderRadius: 2, 
    borderWidth: 1,
    borderColor: '#FFFFFF'
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