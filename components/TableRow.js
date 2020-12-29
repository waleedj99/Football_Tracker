import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import mainStyles from '../styles/mainStyles'







export default function TableRow(props){
  return(
    <View style={mainStyles.tableHeader}>
      <Text style={[mainStyles.tableData,{flex:1,marginLeft:5,backgroundColor:props.bgcolor}]}>{props.pos}</Text>
      <Text style={[mainStyles.tableData,{flex:5,backgroundColor:props.bgcolor}]}>{props.teamName}</Text>
      <Text style={[mainStyles.tableData,{flex:1,backgroundColor:props.bgcolor}]}>{props.played}</Text>
      <Text style={[mainStyles.tableData,{flex:1,backgroundColor:props.bgcolor}]}>{props.win}</Text>
      <Text style={[mainStyles.tableData,{flex:1,backgroundColor:props.bgcolor}]}>{props.loss}</Text>
      <Text style={[mainStyles.tableData,{flex:1,backgroundColor:props.bgcolor}]}>{props.draw}</Text>
      <Text style={[mainStyles.tableData,{flex:1,backgroundColor:props.bgcolor}]}>{props.goaldiff}</Text>
      <Text style={[mainStyles.tableData,{flex:1,backgroundColor:props.bgcolor}]}>{props.pts}</Text>
    </View>
  )
}
