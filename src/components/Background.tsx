import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type Props = {
  children: React.ReactNode;
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: '#000000',
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Background = ({ children }: Props) => (
  // eslint-disable-next-line react/jsx-no-undef
  <View style={styles.background}>
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="always"
    >
      {children}
    </KeyboardAwareScrollView>
  </View>
);

export default memo(Background);
