import { View, ViewStyle } from 'react-native';

import styles from './Divider.style';

interface DividerProps {
 onPress: () => void;
 style?: ViewStyle | ViewStyle[];
}

const Divider = ({ style }: DividerProps) => {
  return <View style={[styles.divider, style]} />;
};

export { Divider };

