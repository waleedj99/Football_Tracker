//matchcard
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
export default modalStyles = StyleSheet.create({
  centeredView: {
    marginTop: 22,
  },
  matchCardStyle: {
    backgroundColor: '#FFA69E',
    margin: 4,
  },
  modalText: {
    fontSize: 22,
    padding: 10,
    marginBottom: 2,
    textAlign: 'center',
  },
  modalView: {
    margin: 1,
    backgroundColor: '#FAF3DD',
    borderRadius: 10,
    padding: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  touchHighlight: {
    color: '#5E6472',
    backgroundColor: '#AED9E0',
    
  },
  openButton: {
    color: '#5E6472',
  },
  textStyle: {
    color: '#5E6472',
    fontWeight: 'bold',
    fontSize: 22,
    padding: 10,
    textAlign: 'center',
  },
  mdcell: {
    padding: 0,
    flex: 2,
    backgroundColor: 'green',
    borderWidth: 2,
  },
  mdgrid: {
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
  },
});
