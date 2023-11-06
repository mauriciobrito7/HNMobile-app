import { StyleSheet } from 'react-native';

import colors from '@/theme/color';
import size from '@/theme/fonts';

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderBottomWidth: 1,
    width: '100%',
    height: 96,
    display: 'flex',
    gap:4,
  },
  title: {
    fontWeight: 'bold',
  },
  date: {
    color: colors.secondaryText,
  },
  deleteButton: {
    backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    flex: 1,
    width: 100,
  },
  deleteButtonText: {
    color: colors.white,
    paddingHorizontal: 10,
    fontWeight: '600',
    fontSize: size.body1,
  },
});

export default styles;
