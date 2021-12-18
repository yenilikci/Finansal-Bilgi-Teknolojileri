import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View ,FlatList,Button, LogBox} from 'react-native';
import { Appbar, List,Card,Chip,Title,Paragraph,Provider } from 'react-native-paper';
import Services from './src/Services/index';
import { theme } from './src/core/theme'
import StackNavigation from './src/navigation/stackNavigation';

export default function App() {
  LogBox.ignoreAllLogs();
  const[ftxData,setFtxData] = useState([])
  const[data,setData] = useState([])


  return (
    <Provider theme={theme}>
      <StackNavigation/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F8EFC'
  },
});