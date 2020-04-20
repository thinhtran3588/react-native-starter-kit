import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    borderRadius: 20,
    justifyContent: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {width: 100, height: 100},
  currentTemp: {
    textAlign: 'center',
    fontSize: 60,
    margin: 40,
  },
  date: {
    marginTop: 20,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
});
