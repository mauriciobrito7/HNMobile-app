import { StyleSheet } from 'react-native';

import colors from '@/theme/color';
import size from '@/theme/fonts';

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
    fontSize: size.body1,
  },
});

export default styles;
