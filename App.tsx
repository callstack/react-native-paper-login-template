import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from './src/core/theme';
import Main from './src';

const linking = {
  prefixes: [],
  config: {
    screens: {
      "Home": "home",
      "Login": "login",
      "Register": "register",
      "Forgot Password": "forgot-password",
      "Dashboard": "dashboard"
    }
  }
}

export default () => (
  <PaperProvider theme={theme}>
    <NavigationContainer linking={linking}>
      <Main />
    </NavigationContainer>
  </PaperProvider>
);