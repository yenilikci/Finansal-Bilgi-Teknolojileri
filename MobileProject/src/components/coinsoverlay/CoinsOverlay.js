import React, { useEffect, useState } from 'react'
import { Text, View, FlatList } from 'react-native'
import {Searchbar, Avatar} from 'react-native-paper'
import CoinCard from '../coincard/CoinCard'
import Services from '../../Services/index'

const CoinsOverlay = () => {

    const[ftxData,setFtxData] = useState([])
    const[binanceData,setBinanceData] = useState([])
    const[bitexenData,setBitexenData] = useState([])
    const[btcTurkData,setBtcTurkData] = useState([])
    const[gateIoData,setGateIoData] = useState([])
    const[kuCoinData,setKuCoinData] = useState([])
    const[allData,setAllData] = useState([])
    const[allDataTemp,setAllDataTemp] = useState([])
    const [searchQuery, setSearchQuery] = React.useState('');


    const getAllEffect = async () => {
        setBinanceData(await Services.BinanceService.BinanceGetAll())
        setFtxData(await Services.FTXService.FTXGetAll())
        setKuCoinData(await Services.KucoinService.KucoinGetAll())
        setBitexenData(await Services.BitexenService.BitexenGetAll())
        setBtcTurkData(await Services.BtcTurkService.BtcTurkGetAll())
        setGateIoData(await Services.GateIOService.GateioGetAll())
    }

    useEffect(async ()=> {    
        getAllEffect()
    },[])

    useEffect(() => {
        setAllData([...binanceData,...kuCoinData,...gateIoData,...ftxData,...btcTurkData,...bitexenData])
        setAllDataTemp([...binanceData,...kuCoinData,...gateIoData,...ftxData,...btcTurkData,...bitexenData])
    },[ftxData,binanceData,bitexenData,btcTurkData,gateIoData,kuCoinData])

    const renderItem = ({item}) => (
        <CoinCard baseCurrency={item.baseCurrency} quoteCurrency={item.quoteCurrency} price={item.price} stockMarketName={item.stockMarketName}/>
    )

    const onChangeSearch = query => {
        setSearchQuery(query);
        const all = []
            allDataTemp.map(item => {
                if(item.stockMarketName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.baseCurrency.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.quoteCurrency.toLowerCase().includes(searchQuery.toLowerCase()) 
                ){
                    all.push(item)
                }
            })
        setAllData(all)
    }

    // useEffect(() => {
    //     const all = []
    //     allData.map(item => {
    //         if(item.stockMarketName.includes(searchQuery) ||
    //         item.baseCurrency.includes(searchQuery) ||
    //         item.quoteCurrency.includes(searchQuery) 
    //         ){
    //             all.push(item)
    //         }
    //     })
    //     setAllData(all)
    // }, [searchQuery])

    return (
        <View style={{backgroundColor: '#484848'}}>
            <Searchbar
                style={{marginLeft:7, marginRight:7, marginTop: 10, backgroundColor: '#121212'}}
                iconColor='#fff'
                inputStyle={{
                    color: '#ddd'
                }}
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                theme={{
                    colors: {
                        placeholder: '#fff'
                    }
                }}
            />
            {allData.length > 0 ? <FlatList
                data={allData}
                renderItem={renderItem}
                keyExtractor={(item,index) => index}
            /> : 
            <View style={{minHeight:600, justifyContent: 'center', alignItems: 'center'}}>
                <Avatar.Image size={120} source={require('../../assets/not-result.png')} />
                <Text style={{color: '#000', fontSize: 25, marginBottom: 70}}>
                    No Result!
                </Text>
            </View>
            }
        </View>
    )
}

export default CoinsOverlay
