import React, { useEffect, useState } from 'react'
import { Text, View, FlatList } from 'react-native'
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
    },[ftxData,binanceData,bitexenData,btcTurkData,gateIoData,kuCoinData])

    const renderItem = ({item}) => (
        <CoinCard baseCurrency={item.baseCurrency} quoteCurrency={item.quoteCurrency} price={item.price} stockMarketName={item.stockMarketName}/>
    )

    return (
        <>
            <FlatList
                data={allData}
                renderItem={renderItem}
                keyExtractor={(item,index) => index}
            /> 
           
        </>
    )
}

export default CoinsOverlay

