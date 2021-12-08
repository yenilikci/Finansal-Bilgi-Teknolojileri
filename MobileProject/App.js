import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Services from './src/Services/index';

export default function App() {

  const[ftxData,setFtxData] = useState([])

  useEffect(async ()=> { 
    setFtxData(await Services.FTXService.FTXGetAll())
    console.log('function component useeffect worked');
  },[])

  const getValue = async () => {
    let FTXGetUSD = await Services.FTXService.FTXGetUSD('ETH')
    let FTXGetAll = await Services.FTXService.FTXGetAll()
    console.log(FTXGetAll);
    // console.log(FTXGetUSD);
  }

  return (
    <View style={styles.container}>
        <Text style={{fontSize: 20}}>Listelenen Borsa: FTX</Text>
        {ftxData.map((el,index )=>
        <View key={index}>
            <Text>
              {el.baseCurrency}
            </Text>
            <Text>
              {el.price}
            </Text>
          </View>
          )}
        
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

