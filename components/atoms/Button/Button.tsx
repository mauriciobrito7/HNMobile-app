import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';

import styles from './Button.style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button = ({ title, style, ...rest }:ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, style]} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export { Button };
