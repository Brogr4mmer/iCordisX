import { TabNavigator } from 'react-navigation';
import symptomtracker from './screens/symptomtracker'; 
import loginscreen from './screens/loginscreen';

export const Root = TabNavigator({
    Login: { screen: loginscreen },
    SymptomTracker: { screen: symptomtracker },
}); 