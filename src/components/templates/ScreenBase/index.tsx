import React, { FC } from 'react';
import {
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  Keyboard,
  StyleSheet
} from 'react-native';
import theme from '../../../styles/theme';

const ScreenBase: FC<TouchableWithoutFeedbackProps> = ({
  children,
  ...props
}) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} {...props}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        {children}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    paddingTop: 24,
    paddingHorizontal: 30,
    paddingBottom: 8
  }
});

export default ScreenBase;
