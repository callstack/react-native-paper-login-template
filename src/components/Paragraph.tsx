import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import theme from '../core/theme';

type Props = {
  children: React.ReactNode;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 26,
    color: theme.colors.secondary,
    textAlign: 'center',
    marginBottom: 14,
  },
});

const Paragraph = ({ children }: Props) => (
  <Text style={styles.text}>{children}</Text>
);

export default memo(Paragraph);
