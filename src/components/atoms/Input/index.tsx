import React, { FC } from 'react';
import theme from '../../../styles/theme';

import { TextInput, TextInputProps, StyleSheet, Platform } from 'react-native';

interface InputProps extends TextInputProps {
  label?: string;
}

const Input: FC<InputProps> = ({ placeholder, value, ...props }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.grey900}
      value={value}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.black400,
    color: theme.colors.grey,
    paddingHorizontal: Platform.OS === 'ios' ? 16 : 24,
    height: 48,
    borderRadius: 8
  }
});

export default Input;
