import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from './pages/Feed';

import logo from './assets/instagram.png';

const AppStack = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                screenOptions={{
                    headerTitle: props => <Image source={logo} />,
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#f5f5f5',
                    },
                }}
            >
                <AppStack.Screen name="Feed" component={Feed} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
