import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import theme from '../../../styles/theme';

const ScreenBase = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    paddingTop: 24,
    paddingHorizontal: 30,
    paddingBottom: 8
  }
})

export default ScreenBase;
