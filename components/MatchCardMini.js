import React ,{useState} from 'react';
import { Text, View, StyleSheet , Pressable ,Image } from 'react-native';
import {Card} from 'react-native-paper';

function MatchTeamLine(props){
  return(
    <View style={styles.container}>
      <Text style={{flex:4}}>{props.teamName}</Text>
      <Text style={{flex:1}}>{props.goals}</Text>
    </View>
  )
}

export default function MatchCardMini(props){
  return(
      <View style={styles.container}>
        <View style={{flex:5}}>
          <MatchTeamLine teamName = {props.homeTeam} goals = {props.homeGoals} />
          <MatchTeamLine teamName = {props.awayTeam} goals = {props.awayGoals}/>
        </View>
        <View style={[styles.container,{flex:1,alignItems:"center"}]}>
          <View>
            <Text style={{alignSelf:"flex-end",fontSize:11,fontWeight:'bold'}}>
            
            {(props.status=="SCHEDULED"?"SCHLD":props.status)}</Text>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row',
    padding:5,
    flexWrap:'nowrap',
    justifyContent:'flex-start',
    alignContent:"stretch"
  },
  matchCardText:{
    color:'#5E6472'
  },
})