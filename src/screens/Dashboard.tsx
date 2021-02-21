import React, { memo } from 'react';
import { View } from 'react-native';
import { Calculator } from 'react-native-calculator';
import Background from '../components/Background';
import Button from '../components/Button';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => (
  <Background>
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Calculator style={{ flex: 1, flexDirection: 'row' }} />
    </View>
    <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
      Logout
    </Button>
  </Background>
);

export default memo(Dashboard);
