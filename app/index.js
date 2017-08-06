import { TabNavigator } from 'react-navigation';
import symptomtracker from './screens/symptomtracker'; 
import loginscreen from './screens/loginscreen';
import datadisplay from './screens/datadisplay';
import { StackNavigator } from 'react-navigation';

export const Root = TabNavigator(
    {
        LoginScreen: { screen: loginscreen },
        SymptomTracker: { screen: symptomtracker },
        DataDisplay: { screen: datadisplay},
    },
    {
        initialRouteName: "LoginScreen"
    }
); 

export const Toot = StackNavigator({
    LoginScreen: { screen: loginscreen },
    SymptomTracker: { screen: symptomtracker}, 
})