import { TabNavigator, DrawerNavigator, StackNavigator } from 'react-navigation';

import symptomtracker from './screens/symptomtracker';
import loginscreen from './screens/loginscreen';
import loginsecured from './screens/loginsecured';
import userdata from './screens/userdata';
import datadisplay from './screens/datadisplay';
import location from './screens/location';
import calltext from './screens/calltext';
import journal from './screens/journal';
import createaccount from './screens/createaccount';


const LoginStack = StackNavigator({
    loginscreen: { screen: loginscreen },
    loginsecured: { screen: loginsecured },
    createaccount: { screen: createaccount },
})

const LoginDrawer = DrawerNavigator({
    loginscreen: { screen: LoginStack },
    userdata: { screen: userdata },
})

const EmergencyDrawer = DrawerNavigator({
    location: { screen: location },
    callText: { screen: calltext },
})

const TrackerDrawer = DrawerNavigator({
    symptomTracker: { screen: symptomtracker },
    journal: { screen: journal },
})

export const Root = TabNavigator(
    {
        LoginScreen: { screen: LoginDrawer },
        SymptomTracker: { screen: TrackerDrawer },
        DataDisplay: { screen: datadisplay },
        Emergency: { screen: EmergencyDrawer },
    },
    {
        initialRouteName: "LoginScreen",
    }
);
