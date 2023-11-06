import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

const MyTouchableOpacity = ({ children, ...rest }:TouchableOpacityProps) => {
  return <TouchableOpacity {...rest}>{children}</TouchableOpacity>;
};

export { MyTouchableOpacity as TouchableOpacity };
