import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import "./global.css"

import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/Register';

import Home from './src/screens/home/Home';
import Connection from './src/screens/home/Connection';
import Account from './src/screens/home/Account';
import Contact from './src/screens/home/Contact';

export default function App() {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const AuthStack = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
          <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
        </Stack.Navigator>
    )
  }

  const MainStack = () => {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Tab.Screen name="Connection" component={Connection} options={{headerShown: false}} />
          <Tab.Screen name="Contact" component={Contact} options={{headerShown: false}} />
          <Tab.Screen name="Account" component={Account} options={{headerShown: false}} />
        </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="authStack" component={AuthStack} options={{headerShown: false}}/>
      <Stack.Screen name="mainStack" component={MainStack} options={{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}
