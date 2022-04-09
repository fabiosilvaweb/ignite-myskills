import React from 'react';
import theme from '../../../styles/theme';
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const Button = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={onPress}>
      <Text style={styles.buttonText}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 48,
    backgroundColor: theme.colors.blue,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16
  },
  buttonText: {
    color: theme.colors.black,
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default Button;
