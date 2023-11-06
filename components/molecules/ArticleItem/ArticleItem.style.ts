import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
  },
  date: {
    color: '#666',
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    flex: 1,
    width: 100,
  },
  deleteButtonText: {
    color: 'white',
    paddingHorizontal: 10,
    fontWeight: '600',
    fontSize: 16,
  },
});

export default styles;
