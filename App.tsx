import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import "./global.css"

import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/Register';

import Home from './src/screens/home/Home';

export default function App() {

  const Stack = createNativeStackNavigator();

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
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        </Stack.Navigator>
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
