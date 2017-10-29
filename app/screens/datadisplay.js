import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';
import { VictoryLine } from "victory-native";
import { VictoryChart } from "victory-native";
import { VictoryTheme } from "victory-native";
import { VictoryAxis } from "victory-native";
import { VictoryLabel } from "victory-native";
import { BleManager } from 'react-native-ble-plx';
import TimeLabel from '../components/TimeLabel';

//shift alt F to beautify
export default class DataDisplay extends Component {
  static navigationOptions = {
    title: 'Data Display',
    tabBarIcon: ({ tintColor }) => (<Entypo name='bar-graph' size={20} style={styles.icon} />)

  };
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.manager = new BleManager()
  }
  /*componentWillMount() {
    console.log('mounted')
    const subscription = this.manager.onStateChange((state) => {
      console.log('BleManager state change', state)
      if (state === 'PoweredOn') {
        this.scanAndConnect();
        subscription.remove();
      }
    }, true);
  }
  scanAndConnect() {
    this.manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.log(error);
        return
      }

      console.log('Initially', device.name)

      /*

      device.connect()
        .then((device) => {
          return device.discoverAllServicesAndCharacteristics()
        })
        .then((device) => {
          return device.services()
        })
        .then((services) => {
          console.log(services)
        })
        .catch((error) => {
          console.log(error);
        });
        
      
    })
  }
*/
  componentDidMount() {
    setInterval(() => {
      const now = new Date();

      let temp = this.state.data.slice(-49);
      temp.push({
        time: now,
        y: Math.random() * 8
      });
      this.setState({ data: temp })
    }, 250)
  }

  handlePress = () => {
    this.scanAndConnect();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#87cefa' }}>
          <Text style={{ paddingTop: 40, fontSize: 30, textAlign: 'center', color: '#FFFFFF' }}>Data Display</Text>
          <Button
            onPress={() => navigate('SymptomTracker')}
            title="start"
          />
        </View>
        <Text style={{ paddingTop: 30, fontSize: 18, justifyContent: 'center', fontFamily: 'Avenir-Heavy', textAlign: 'center' }}>Real-Time ECG Display</Text>
        <View style={styles.container}>
          <VictoryChart padding={{ top: 30, right: 50, left: 80, bottom: 55 }}>
            <VictoryAxis
              dependentAxis label='Voltage(mV)'
              style={{ axisLabel: { padding: 40 } }} />
            <VictoryAxis
              label="Time(ms)"
              // axisLabelComponent={TimeLabel}
              style={{ parent: { border: "2px solid #ccc" } }}
            />
            <VictoryLine
              theme={VictoryTheme.material}
              x="time"
              style={{
                data: { stroke: "#3393FF" },
                parent: { border: "1px solid #ccc" }
              }}
              interpolation="natural"
              data={this.state.data}
            />
          </VictoryChart>
        </View>
        <View>
          <TouchableOpacity onPress={this.handlePress} style={styles.buttonContainer2}>
            <Text style={styles.buttonText}>Record Sample</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handlePress} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Initiate Monitoring</Text>
          </TouchableOpacity>
        </View>
      </View>
    );

  }

}

const styles = StyleSheet.create({
  icon: {
    height: 22,
    width: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  chart: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    justifyContent: 'space-between',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  buttonContainer2: {
    backgroundColor: '#2FD6D6',
    paddingVertical: 15,
    marginTop: 80,
    justifyContent: 'space-between',
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 18,
    justifyContent: 'space-between',

  },
})

