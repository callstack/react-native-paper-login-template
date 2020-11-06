import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header>É isso pessoal</Header>
    <Paragraph>
      Desse modo você aprendeu a implementar a biometria em seu app React.
    </Paragraph>
    <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
      Sair
    </Button>
  </Background>
);

export default memo(Dashboard);
