import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
} from './screens';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
    <Stack.Screen name="Dashboard" component={Dashboard} />
  </Stack.Navigator>
)