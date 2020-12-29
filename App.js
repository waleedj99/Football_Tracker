import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Pressable,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';

import mainStyles from './styles/mainStyles';
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import LeagueSelectionModal from './components/LeagueSelectionModal';
import TableRow from './components/TableRow';
import MatchCardModal from './components/MatchCardModal';
import MDSelectionModal from './components/MDSelectionModal';
import MatchCardMini from './components/MatchCardMini';
export default function App() {
  const apiLink = 'https://api.football-data.org/v2/';
  const [currentLeagueName, setLeagueName] = useState('Ligue 1');
  const [MDnum, setMD] = useState(1);
  const [LeagueStandings, setLeagueStandings] = useState([]);
  const [Matches, setMatches] = useState([]);
  const LeagueDic = {
    'Ligue 1': 'FL1',
    Bundesliga: 'BL1',
    'Serie A': 'SA',
    'Primera Division': 'PD',
    'Premier League': 'PL',
  };

  useEffect(() => {
    fetch(
      apiLink +
        'competitions/' +
        LeagueDic[currentLeagueName] +
        '/matches?matchday=' +
        MDnum,
      {
        headers: {
          'X-Auth-Token': 'b3892323d6a84696af56d72e9459da5b',
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        //console.log(result['matches']);
        setMatches(result['matches']);
        //console.log(Matches);
      });
  }, [MDnum, currentLeagueName]);

  useEffect(() => {
    fetch(
      apiLink + 'competitions/' + LeagueDic[currentLeagueName] + '/standings',
      {
        headers: {
          'X-Auth-Token': 'b3892323d6a84696af56d72e9459da5b',
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        setLeagueStandings(result.standings[0].table);
        setMD(result.season.currentMatchday);
        //console.log(LeagueStandings)
      });
  }, [currentLeagueName]);

  useEffect(() => {
    fetch(
      apiLink + 'competitions/' + LeagueDic[currentLeagueName] + '/standings',
      {
        headers: {
          'X-Auth-Token': 'b3892323d6a84696af56d72e9459da5b',
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        setLeagueStandings(result.standings[0].table);
        //console.log(LeagueStandings);
      });
  }, []);
  if (
    Matches == undefined ||
    LeagueStandings == undefined ||
    Matches == [] ||
    LeagueStandings == []
  ) {
    return (
      <ActivityIndicator
        style={mainStyles.activityStyle}
        size="large"
        color="#00ff00"
      />
    );
  }
  return (
    <ScrollView>
      <View
        style={{
          top: 20,
          flex: 1,
          flexDirection: 'column',
          flexWrap: 'nowrap',
          justifyContent: 'space-around',
          alignContent: 'flex-start',
        }}>
        <View style={mainStyles.container}>
          <View style={{ flex: 5 }}>
          
            <LeagueSelectionModal
              currentLeagueName={currentLeagueName}
              setLeagueName={setLeagueName}
            />
          </View>

          <View style={{ flex: 2 }}>
            <MDSelectionModal MDnum={MDnum} setMD={setMD} />
          </View>
        </View>

        <View style={mainStyles.container}>
          <View style={[mainStyles.paragraph, { flexGrow: 5 }]}>
            <MatchCardModal matches={Matches} />
          </View>
        </View>

        <Card style={mainStyles.paragraph}>
          <Text style={[mainStyles.paragraph, { fontWeight: 'bold' }]}>
            LEAGUE TABLE
          </Text>
          
          <TableRow
            pos={'Pos'}
            teamName={'Team Name'}
            played={'P'}
            win={'W'}
            loss={'L'}
            draw={'D'}
            goaldiff={'GD'}
            pts={'PT'}
            
          />
          
          {LeagueStandings.map((team, index) => {
            if (index % 2 == 0) {
              return (
                <TableRow
                  pos={team.position}
                  teamName={team.team.name}
                  played={team.playedGames}
                  win={team.won}
                  loss={team.lost}
                  draw={team.draw}
                  goaldiff={team.goalDifference}
                  pts={team.points}
                  bgcolor="#B8F2E6"
                />
              );
            } else {
              return (
                <TableRow
                  pos={team.position}
                  teamName={team.team.name}
                  played={team.playedGames}
                  win={team.won}
                  loss={team.lost}
                  draw={team.draw}
                  goaldiff={team.goalDifference}
                  pts={team.points}
                  bgcolor="#AED9E0"
                />
              );
            }
          })}
        </Card>
      </View>
    </ScrollView>
  );
}
