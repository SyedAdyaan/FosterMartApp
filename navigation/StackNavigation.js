import { NavigationContainer } from '@react-navigation/native';
import { View,Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Homepage } from '../src/screens/Homepage';
import { SignIn } from '../src/screens/SignIn';
import DrawerNavigation from './DrawerNavigation';

import 'react-native-gesture-handler';

export default function StackNavigation(){
    const Stack = createStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Stack' screenOptions={{headerShown:false}}>
                <Stack.Screen name='Stack' component={DrawerNavigation}/>
                <Stack.Screen name='HomePage' component={Homepage}/>
                <Stack.Screen name='SignIn' component={SignIn}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}