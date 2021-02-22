import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import theme from '../core/theme';

type Props = {
  children: React.ReactNode;
};

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    color: '#ff8000',
    fontWeight: 'bold',
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Header = ({ children }: Props) => (
  <Text style={styles.header}>{children}</Text>
);

export default memo(Header);
