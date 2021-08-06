import React from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-native-paper';
import App from './src';
import { theme } from './src/core/theme';

LogBox.ignoreLogs([/async-storage/i]);

const Main = () => (
  <Provider theme={theme}>
    <App />
  </Provider>
);

export default Main;
