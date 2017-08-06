import React, {Component} from 'react';
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

export default class SymptomTracker extends React.Component {
  static navigationOptions = {
        title: 'Symptom Tracker',
    };
  constructor(props) {
    super(props);
    this.state = {textValue: 'No noticeable symptoms.\n'};
  }
  render() {
    const now = new Date(); 
    const day = now.getDate(); 
    const month = now.getMonth()+1;
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
      <View style={styles.inputcontainer}>
        <AutoGrowingTextInput 
            style = {styles.input}
            value={this.state.textValue}
            onChange={(event) => this._onChange(event)}
            placeholder={'Journal Entry'}
            placeholderTextColor='#66737C'
            maxHeight={200}
            minHeight={45}
             ref={(r) => { this._input = r; }}  
          />
          <TouchableOpacity style={styles.button} onPress={() => this._resetTextInput()}>
            <Text>Clear Text</Text>
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
    _onChange(event) {
    this.setState({ textValue: event.nativeEvent.text || '' });
  }
      _resetTextInput() {
    this._input.clear();
    this._input.resetHeightToMin();
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
  },
  inputcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#76c6ff',
        paddingLeft: 8,
        paddingRight: 8
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
  slider: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    marginTop: 4,
    borderBottomWidth: 0,
    backgroundColor: '#5DADE2',
    paddingTop: 4,
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '400',
  },
  input: {
        height: 50, 
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
  green: {
    color: '#1DE14F',
  }, 
  yellow: {
    color: '#D8E11D',
  },
  red: {
    color: '#E13E1D',
  }


});