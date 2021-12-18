import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View ,FlatList,Button, LogBox} from 'react-native';
import { Appbar, List,Card,Chip,Title,Paragraph,Provider } from 'react-native-paper';
import Services from './src/Services/index';
import { theme } from './src/core/theme'
import StackNavigation from './src/navigation/stackNavigation';
import { WaveIndicator } from 'react-native-indicators';
import { BarIndicator } from 'react-native-indicators';
import { SkypeIndicator } from 'react-native-indicators';

export default function App() {
  LogBox.ignoreAllLogs();

  const[loading, setLoading] = useState(true)

  useEffect(()=> {
    setTimeout(()=> {
      setLoading(false)
    }, 1500)
  },[])

  return (
    <Provider theme={theme}>
      {loading ? <SkypeIndicator size={250} color='#121212'/> : <StackNavigation/>}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F8EFC'
  },
});