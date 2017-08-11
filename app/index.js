import { TabNavigator } from 'react-navigation';
import {DrawerNavigator} from'react-navigation';
import symptomtracker from './screens/symptomtracker'; 
import loginscreen from './screens/loginscreen';
import loginsecured from './screens/loginsecured';
import userdata from './screens/userdata';
import datadisplay from './screens/datadisplay';
import { StackNavigator } from 'react-navigation';
//import location from './screens/location';
import calltext from './screens/calltext';
import journal from './screens/journal';
import PropTypes from 'prop-types'


const Drawer = DrawerNavigator({
  loginscreen: {screen: loginscreen},
  userdata: {screen: userdata},
})

const DrawerTwo = DrawerNavigator({
  //location: { screen: location },
  callText: { screen: calltext }, 
})

const DrawerThree = DrawerNavigator({
    symptomTracker: {screen: symptomtracker},
    journal: { screen: journal },
})

export const Root = TabNavigator(
    {
        LoginScreen: {screen: Drawer},
        SymptomTracker: { screen: DrawerThree },
        DataDisplay: { screen: datadisplay},
        Emergency: { screen: DrawerTwo },
    },
    {
        initialRouteName: "LoginScreen",
    }
); 

export const Toot = StackNavigator({
    LoginScreen: { screen: loginscreen },
    SymptomTracker: { screen: symptomtracker}, 
})