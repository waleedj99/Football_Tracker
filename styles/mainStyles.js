import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
export default mainStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    backgroundColor: 'white',
  },
  paragraph: {
    color: '#5E6472',
    padding: 5,
    marginRight: 2,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#FAF3DD',
  },
  tableHeader: {
    flexDirection: 'row',
    marginTop: 1,
    justifyContent: 'center',
    flexWrap: 'nowrap',
  },
  tableData: {
    textAlign: 'center',
    marginLeft: 2,
  },
  activityStyle: {
    top: '50%',
  },
});
