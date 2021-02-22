import React, { memo } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

type Props = {
  goBack: () => void;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    left: 10,
  },
  image: {
    width: 24,
    height: 24,
  },
});

const BackButton = ({ goBack }: Props) => (
  <TouchableOpacity onPress={goBack} style={styles.container}>
    <Image
      style={styles.image}
      // eslint-disable-next-line global-require
      source={require('../assets/ios-back-icon-10.png')}
    />
  </TouchableOpacity>
);

export default memo(BackButton);
