import React, { FC } from 'react';
import theme from '../../../styles/theme';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
}

const Button: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} {...props}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

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
});

export default Button;
