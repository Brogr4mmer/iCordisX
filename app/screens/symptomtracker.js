import React, {Component} from 'react';
import {
Slider,
Button,
Text,
View,
StyleSheet
} from 'react-native';

export default class SymptomTracker extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{padding: 26, fontWeight: 'bold', fontSize: 20}}>
          Daily Symptom Tracker 
          {new Date().toString()}
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
          title="Nausea"
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
        <Text style={styles.symptoms}>{this.props.title}</Text>
        <Slider
          style={styles.slider}
          value={this.state.value}
          onValueChange={this.handleValueChange}
        />
        <Text style = {styles.slider}>Value: {parseInt(this.state.value*10)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
    fontWeight: 'bold',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  symptoms: {
    fontSize: 15,
    fontWeight: '300',
  },
  slider: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5.5,
    borderBottomWidth: 0.75,
    backgroundColor: '#b0c4de',
  },
});