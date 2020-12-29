import React, { useState } from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
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
            {[0, 1, 2, 3, 4, 5, 6, 7].map((num1) => {
              return (
                <View style={modalStyles.mdgrid}>
                  {[1, 2, 3, 4, 5].map((num2) => {
                    if (num2 + 5 * num1 == props.MDnum) {
                      return (
                        <TouchableHighlight
                          style={modalStyles.mdcell}
                          onPress={() => {
                            props.setMD(num2 + 5 * num1);
                            setModalVisible(!modalVisible);
                          }}>
                          <Card style={{ backgroundColor: '#80b918' }}>
                            <Text style={modalStyles.textStyle}>
                              {num2 + 5 * num1}
                            </Text>
                          </Card>
                        </TouchableHighlight>
                      );
                    } else {
                      return (
                        <TouchableHighlight
                          style={modalStyles.mdcell}
                          onPress={() => {
                            props.setMD(num2 + 5 * num1);
                            setModalVisible(!modalVisible);
                          }}>
                          <Card>
                            <Text style={modalStyles.textStyle}>
                              {num2 + 5 * num1}
                            </Text>
                          </Card>
                        </TouchableHighlight>
                      );
                    }
                  })}
                </View>
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
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Text
              style={{
                color: '#5E6472',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 10,
                paddingTop: 4,
              }}>
              MATCH
            </Text>

            <Text
              style={{
                color: '#5E6472',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 10,
              }}>
              DAY
            </Text>
          </View>
          <Text style={[mainStyles.paragraph, { fontSize: 26, padding: 0 }]}>
            {' '}
            {props.MDnum}
          </Text>
        </View>
      </Card>
    </View>
  );
};

export default LeagueSelectionModal;
