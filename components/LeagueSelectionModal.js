import React, { useState } from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';
import { Card } from 'react-native-paper';
import mainStyles from '../styles/mainStyles';
import modalStyles from '../styles/modalStyles';
const LeagueSelectionModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={modalStyles.centeredView}>
          <View style={modalStyles.modalView}>
            {[
              'Ligue 1',
              'Bundesliga',
              'Serie A',
              'Primera Division',
              'Premier League',
            ].map((num) => {
              return (
                <TouchableHighlight
                  style={modalStyles.modalText}
                  underlayColor='#FDCDBE'
                  onPress={() => {
                    props.setLeagueName(num);
                    setModalVisible(!modalVisible);
                  }}>
                  <Card style={modalStyles.matchCardStyle}>
                    <Text style={modalStyles.modalText}>{num}</Text>
                  </Card>
                </TouchableHighlight>
              );
            })}

            <TouchableHighlight
              style={modalStyles.touchHighlight}
              underlayColor= '#B8F2E6'
              
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={modalStyles.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Card
        style={[mainStyles.paragraph]}
        onPress={() => {
          setModalVisible(true);
        }}>
        
        <Text style={[mainStyles.paragraph, { fontSize: 26, padding: 0 }]}>
          {props.currentLeagueName}{' '}
        </Text>
      </Card>
    </View>
  );
};

export default LeagueSelectionModal;
