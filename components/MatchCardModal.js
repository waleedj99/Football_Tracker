import React, { useState } from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Button,
  Alert,
  StyleSheet,
  Pressable,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import MatchCardMini from './MatchCardMini';
import { Card } from 'react-native-paper';
import mainStyles from '../styles/mainStyles';
import modalStyles from '../styles/modalStyles';
const MatchCardModal = (props) => {
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
          <TouchableHighlight
            underlayColor= '#B8F2E6'
            style={modalStyles.touchHighlight}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text style={modalStyles.textStyle}>Close</Text>
          </TouchableHighlight>

          <ScrollView>
            <View style={modalStyles.modalView}>
              {props.matches.map((match) => {
                return (
                  <Card style={modalStyles.matchCardStyle}>
                  
                    <MatchCardMini
                      homeTeam={match.homeTeam.name}
                      awayTeam={match.awayTeam.name}
                      homeGoals={match.score.fullTime.homeTeam}
                      awayGoals={match.score.fullTime.awayTeam}
                      status={match.status}
                    />
                  </Card>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </Modal>
      {props.matches.map((match, index) => {
        if (index == 0) {
          return (
            <Pressable
              onPress={() => {
                setModalVisible(true);
              }}>
              <Text style={{margin:1,fontSize:14,fontWeight:'bold',color:'#5E6472'}}>MATCHES</Text>
              <Card style={modalStyles.matchCardStyle}>
                <MatchCardMini
                  homeTeam={match.homeTeam.name}
                  awayTeam={match.awayTeam.name}
                  homeGoals={match.score.fullTime.homeTeam}
                  awayGoals={match.score.fullTime.awayTeam}
                  status={match.status}
                />
              </Card>
            </Pressable>
          );
        }
      })}
    </View>
  );
};

export default MatchCardModal;
