import React from 'react'
import theme from '../../../styles/theme'

import { TextInput, StyleSheet, Platform } from 'react-native'

const Input = ({ placeholder, value, onChange }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.grey900}
      value={value}
      onChangeText={onChange}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.black400,
    color: theme.colors.grey,
    paddingHorizontal: Platform.OS === 'ios' ? 16 : 24,
    height: 48,
    borderRadius: 8
  }
})

export default Input;
