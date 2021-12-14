import React, { useEffect, useState } from 'react'
import { Text, View, FlatList } from 'react-native'
import {Searchbar} from 'react-native-paper'
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
        <>
            <Searchbar
                style={{marginLeft:7, marginRight:7, marginTop: 10}}
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <FlatList
                data={allData}
                renderItem={renderItem}
                keyExtractor={(item,index) => index}
            /> 
           
        </>
    )
}

export default CoinsOverlay

