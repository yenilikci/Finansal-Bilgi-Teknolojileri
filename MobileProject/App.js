import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View ,FlatList,Button} from 'react-native';
import { Appbar, List,Card,Chip,Title,Paragraph,Provider } from 'react-native-paper';
import Services from './src/Services/index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from './src/screens'


function HomeScreen({navigation}) {
  return (
    <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 35}}>burası anasayfa knk</Text>
    </View>
  )
}

function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>burası profil knk</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator()


export default function App() {

  const[ftxData,setFtxData] = useState([])
  const[data,setData] = useState([])

  useEffect(async ()=> { 
    // setFtxData(await Services.FTXService.FTXGetAll())
    // console.log(await Services.BitexenService.BitexenGetAll());
    // console.log(await Services.BitexenService.BitexenGetUSDT('BTCUSDT'));
    // console.log(await Services.BinanceService.BinanceGetAll());
    // console.log(await Services.BinanceService.BinanceGetUSDT('BTCUSDT'));
    // console.log(await Services.BtcTurkService.BtcTurkGetAll());
    // console.log(await Services.BtcTurkService.BtcTurkGetUSDT('BTC_USDT'));
    // console.log(await Services.KucoinService.KucoinGetAll());
    // console.log(await Services.KucoinService.KucoinGetUSDT('BTC-USDT'));
    // console.log(await Services.GateIOService.GateioGetAll());
    setData(await Services.BinanceService.BinanceGetAll())

    console.log(await Services.GateIOService.GateioGetUSDT('BTC_USDT'));

    console.log('function component useeffect worked');
  },[])

  const getValue = async () => {
    let FTXGetUSD = await Services.FTXService.FTXGetUSD('ETH')
    // let FTXGetAll = await Services.FTXService.FTXGetAll()
    // console.log(FTXGetAll);
    // console.log(FTXGetUSD);
  }

  return (
    <Provider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F8EFC'
  },
});

