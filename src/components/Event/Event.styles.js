import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    // alignItems: 'center',
    position: 'absolute',
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderRadius: 7,
    flex: 1,
  },
  title: {
    textAlign: 'left',
    fontSize: 13,
  },
  description: {
    textAlign: 'left',
    fontSize: 9,
  },
  location: {
    textAlign: 'left',
    paddingTop: 4,
    paddingBottom: 2,
    fontSize: 11,
  },
});

export default styles;
