// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

import {
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';

import Main from './pages/Main';
import Profile from './pages/Profile';

const MainNavigator = createStackNavigator(
    {
        Main: {
            screen: Main,
            navigationOptions: { title: 'DevRadar'},
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no Github',
            },
        },
    },
    {
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#7d40e7',
            },
        },
    }
);

const Routes = createAppContainer(MainNavigator);
export default Routes;