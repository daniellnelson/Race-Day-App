import { createAppContainer } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/Screens/HomeScreen';
import FiveScreen from './src/Screens/FiveScreen';
import TenScreen from './src/Screens/TenScreen';
import HalfMarathonScreen from './src/Screens/HalfMarathonScreen';
import MarathonScreen from './src/Screens/MarathonScreen';
import AddPage from './src/Components/AddPage';

const navigator = createStackNavigator({
	Home: HomeScreen,
	FiveK: FiveScreen,
	TenK: TenScreen,
	Half: HalfMarathonScreen,
	Full: MarathonScreen,
	Add: AddPage
}, {
	initialRouteName: 'Home',
	defaultNavigationOptions: {
		title: 'Race Day'
	}
});

export default createAppContainer(navigator);
	
