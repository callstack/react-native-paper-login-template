import React from 'react';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import App from './src';
import { theme } from './src/core/theme';

const Main = () => (
  <Provider theme={theme}>
    <NavigationContainer>
      <App />
    </NavigationContainer>
  </Provider>
);

export default Main;
