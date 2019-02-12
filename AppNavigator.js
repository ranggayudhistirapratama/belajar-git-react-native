import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Friends from './Friends';

const Navigasi = createStackNavigator({
  Home: { screen: Home },
  Friends: { screen: Friends},
});

const AppNavigator = createAppContainer(Navigasi);

export default AppNavigator;