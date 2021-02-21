import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';
import img = require('../assets/logo.png');

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 128,
    marginBottom: 12,
  },
});

const Logo = () => <Image source={img} style={styles.image} />;

export default memo(Logo);
